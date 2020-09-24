var express = require('express')
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
var data = require('./data.json')

//construct a schema, using GraphlQL schema language
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`

type Book{
    id: ID!
    isbn: String!,
    title: String!,
    author: String!,
    description: String!,
    publisher: String!,
    published_year: Int!
}

type Query {
    quoteOfTheDay : String
    random : Float!
    rollThreeDice : [Int]
    getBooks: [Book]!
    getBook(id: ID!): Book
}

type Mutation {
    addBook(
        isbn: String!,
        title: String!,
        author: String!,
        description: String,
        publisher: String!,
        published_year: Int!
    ) : Book

    updateBook(
        id: ID!,
        isbn: String!,
        title: String!,
        author: String!,
        description: String,
        publisher: String!,
        published_year: Int!
    ): Book

    deleteBook(id: ID!): Book
}

type AddBookResponse {
    success: Boolean!
    message: String
    book: Book
}

type UpdateBookResponse {
    success: Boolean!
    message: String
    book: Book
}

type DeleteBookResponse {
    success: Boolean!
    message: String
    book: Book
}`);

//the root provides a resolver function for each API Endpoint
var root = {
    quoteOfTheDay: () => {
        return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within';
    },
    random: () => {
        return Math.random();
    },
    rollThreeDice: () => {
        return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6));
    },
    getBooks: () => {
        return data;
    },
    getBook: ({id}) => {
        var book = data.find(function (e)
            {
                return e.id === id
            }
        );
        return book;
    },
    addBook: ({isbn,title, author, description,publisher, published_year} ) => {
        // Create a random id for our "database".
        var id = require('crypto').randomBytes(10).toString('hex');
        var book = {id, isbn, title, author, description, publisher, published_year};
        console.log("Data before add::" + data.length)
        data.push(book)
        console.log("Data aftre add::" + data.length)
        return book;
    },
    updateBook: ({id, isbn,title, author, description,publisher, published_year} ) => {
        // Create a random id for our "database".
        //var id = require('crypto').randomBytes(10).toString('hex');
        
        var book = {id, isbn, title, author, description, publisher, published_year};
        data.push(book)
        return book;
    }
};

/** 
mutation{
  addBook(isbn: "9899917745", title:"Test", author:"Test Author", 
    description:"Test description", publisher: "Mc Graw Hill",published_year: 1988){
    id
    isbn
    description
  }
}

mutation{
  updateBook(
    id:"6cfd4852fe359573c482", isbn:"9849017745",
    title:"Modified title",
    author:"Modified author",
    description: "Modified description",
    publisher: "Modified publisher",
    published_year: 2000
  ){
    published_year
    description
  }
}
*/
var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql')
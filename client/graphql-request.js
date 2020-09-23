var { GraphQLClient} = require("graphql-request");
const client = new GraphQLClient("http://localhost:4000/graphql");

const quoteOfTheDayQuery = `
    query {
        quoteOfTheDay
    }
`;

client.request(quoteOfTheDayQuery).then(data => {
    // do something
    console.log(data);
});
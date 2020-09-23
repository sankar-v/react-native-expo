# react-native-expo
React native application with v5 React Navigation, v16.x react and other latest react constructs

First things first

It should be really easy to pull up a Graphql Server and use a graphql client to test the queries and mutations.  
But most of the examples in the internet are oriented towards React, Angular, Vue, React-Native, Apollo to name a few.

What one really need is a bare bones version of the graphql server and client to quickly test the client server interaction without mock data and without any backend.
After working on various models and the issues, NodeJS was used as the server with barebones express providing the other details. Here is the list of test implementations.
There are a few more to come. The React, React Native, Vue, Angular and Apollo React clients etc have not been included.

a) GraphiQL - this one is the easiest and super comfortable client with good help.  Once you spin a server with express and graphql and enable grapiql, you are done.
b) GraphQL Request - installed via npm, this is lightweight as well. The source has a simple implementation for this. 
c) FetchQL - another simple imlementation baseed on fetch 
d) Apollo Fetch - a bare bones implementation by apollo using fetch, is easy to set up and test graphql queries and mutations
e) Apollo Client - a bare bones version of the client that cna quickly help to test the graphql queries and mutations. A sample is provided.

How to test:

Spin up the server program in the server folder by running node server.js. Similarly run any of the clients listed above using node and test the output in the console.

Next steps:

Another branch that provide mock data to a navigation based React Native application and other client will be developed. This will be further extended to integratrate with a (any) database to provide an end to end solution. 


References:

https://graphql.org/graphql-js/basic-types/
https://www.apollographql.com/docs/react/get-started/
https://www.npmjs.com/package/apollo-fetch
https://github.com/gucheen/fetchql
https://www.npmjs.com/package/graphql-request

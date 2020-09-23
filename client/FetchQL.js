//import fetchql from 'fetchql'
//const fetch = require("cross-fetch");
const FetchQL = require("fetchql");
const client = new FetchQL({ url: "http://localhost:4000/graphql" });

const quoteOfTheDayQuery = `
    query {
        quoteOfTheDay
    }
`;

client.query({ operationName: 'hello', query: quoteOfTheDayQuery }).then(result => {
  // do something 
  console.log(result)
});
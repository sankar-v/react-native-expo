const fetch = require("cross-fetch");
var {createApolloFetch} = require("apollo-fetch");
//var  {gql} = require('@apollo/client')

const uri = "http://localhost:4000/graphql";
// create a fetcher
const apolloFetch = createApolloFetch({ uri });

/*
const helloWorldQuery =  gql`
query  {
  quoteOfTheDay
}
`
*/
const quoteOfTheDayQuery = `
    query {
        quoteOfTheDay
    }
`;

const fetchData = () => 
  apolloFetch({ query: quoteOfTheDayQuery }).catch(error => {
  // do something
  console.log(error)
});

fetchData().then(response => console.log(response));
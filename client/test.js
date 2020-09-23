/** 
var { ApolloClient, InMemoryCache }  = require('@apollo/client');
var gql  = require('@apollo/client');

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

*/
// const client = ...
var  {ApolloClient, InMemoryCache, HttpLink, gql} = require('@apollo/client')
const fetch = require("cross-fetch");
//var gql = require('@apollo/client');

//var HttpLink  = require('apollo-link-http')

const link = new HttpLink(
  { 
    uri: 'http://localhost:4000/graphql', 
    fetch
})
const cache = new InMemoryCache()
const client = new ApolloClient({
  link,
  cache
})

client
    .query({
        query: gql`
      query  {
        quoteOfTheDay
      }
    `
    })
    .then(result => console.log(result));

//export default client

/** 
var fetch = require('cross-fetch')
var { ApolloClient, HttpLink } = require('@apollo/client')

const client = new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:4000/graphql, fetch' })
})

client
    .query({
        query: gql`
      query  {
        quoteOfTheDay
      }
    `
    })
    .then(result => console.log(result));
*/
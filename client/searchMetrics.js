//https://developers.searchmetrics.com/examples/javascript

import { createApolloFetch } from "apollo-fetch";
const SM_GRAPHQL_API = "https://graphql.searchmetrics.com/";
const apolloFetch = createApolloFetch({ uri: SM_GRAPHQL_API });

apolloFetch.use(({ request, options }, next) => {
  options.headers = {
    "sm-api-key": "$yourShineyKey",
    "sm-api-secret": "$yourDarkestSecret"
  };
  next();
});

const exampleQuery = `
    query {
        greeting {
            randomId
            who
        }
    }
`;


const exampleMutation = `
    mutation CreateGreetingMutation($template: String!) {
        create_greeting(template: $template) {
            randomId
            who
        }
    }
`;

//Trigger the queries somewhere in your code
const fetchData = () =>
  apolloFetch({
    query: exampleQuery
  }).catch(error => {
    console.log(error);
  });

fetchData().then(response => console.log(response));

const mutateData = () =>
  apolloFetch({
    query: exampleMutation, // yes a mutation is just a query
    variables: { template: "Have you met" }
  }).catch(error => {
    console.log(error);
  });

mutateData().then(response => console.log(response));
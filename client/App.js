import React from 'react';
import MainStackNavigator from './components/MainStackNavigator';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql',
  cache: new InMemoryCache()
});


//https://docs.expo.io/tutorial/text/
//https://morioh.com/p/d06ded1f9387

const App = () => {
  return <MainStackNavigator />
}

export default App;
import React from 'react';
import logo from './logo.svg';
import './App.css';

import {
  ApolloClient, ApolloProvider,
  InMemoryCache,
    gql,
} from '@apollo/client';
import QueryComp from "./Query";
import MutationComp from "./Mutation";


const cache: InMemoryCache = new InMemoryCache({});


function App() {

  // const { data } = useQuery(GET_GQL);
  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache
  });

  return (
      <ApolloProvider client={client} >
        <div className="App">
            <QueryComp />
            <MutationComp />
        </div>
      </ApolloProvider>
  );
}

export default App;


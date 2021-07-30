import React from 'react';
import ReactDOM from 'react-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
} from "@apollo/client";

import './index.css';
import App from './App';

const tutorialUri = 'https://48p1r2roz4.sse.codesandbox.io';
const dogUri = 'https://71z1g.sse.codesandbox.io';
const todoUri = 'https://sxewr.sse.codesandbox.io/';
const client = new ApolloClient({
    uri: todoUri,
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);


import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost'; 
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import 'semantic-ui-css/semantic.min.css';

const config  = require('./config/config.json');

console.log(config.uri);
const client = new ApolloClient({
  uri:config.uri
});

ReactDOM.render(
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('root')
  )

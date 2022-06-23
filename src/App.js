import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import  GlobalStyles  from './components/GlobalStyles';
import Pages from './pages/index';
const uri = process.env.REACT_APP_API_URL;

const cache = new InMemoryCache();


const client = new ApolloClient({
  uri,
  cache,
  connectToDevTools: true
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Pages />
    </ApolloProvider>);
};
ReactDOM.render(<App />, document.getElementById("root"));

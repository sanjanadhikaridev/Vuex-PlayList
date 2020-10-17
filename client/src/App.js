import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//components
import BookList from './components/BookList';
//apollo client setup
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql';
})

function App() {
    return (
        <div id="main">
            <h1>Ninja's Reading List</h1>
            <BookList />
        </div>
    );
}

export default App;

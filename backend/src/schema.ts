import { gql } from 'apollo-server';

const typeDefs = gql`
    type Book {
        title: String
        author: String
    }
    
    type Query {
        book: Book
    }
`;

export default typeDefs;
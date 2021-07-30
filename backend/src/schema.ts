import { gql } from 'apollo-server';

const typeDefs = gql`
    type Book {
        title: String
        author: String
    }
    
    type Query {
        book: Book
    }
    
    type Mutation {
      updateBook(title: String, author: String): Book
    }
`;

export default typeDefs;

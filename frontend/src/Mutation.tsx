import React, {useEffect} from 'react';
import { gql, useMutation } from "@apollo/client";


const UPDATE_GQL = gql`
    mutation updateBook($title: String!, $author: String!) {
     updateBook(title: $title, author: $author) {
        title
        author
    }
  }
`;

function Mutation() {
    const [updateBook , {data, loading, error}] = useMutation(UPDATE_GQL);

    useEffect(() => {
        updateBook({ variables: { title: '변경제목', author: '변경 작가' } });
    }, []);

    if (loading) {
        return <div>로딩중</div>;
    }

    if(!loading && data) {
        return <div>{data.updateBook.title}</div>
    }

    return (
        <div>mutation</div>
    );
}

export default Mutation;

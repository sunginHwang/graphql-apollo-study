import React, {useEffect} from 'react';
import { gql, useQuery, useMutation } from "@apollo/client";


const GET_GQL = gql`
  query {
    book {
      title,
    }
  }
`

const UPDATE_GQL = gql`
    mutation updateBook($title: String!, $author: String!) {
     updateBook(title: $title, author: $author) {
        title
        author
    }
  }
`;

function Query() {
    const { data, loading } = useQuery(GET_GQL);
    const [updateBook , {data: mutationData, loading: mutationLoading, error: mutationError}] = useMutation(UPDATE_GQL);

    useEffect(() => {
        updateBook({ variables: { title: '변경제목', author: '변경 작가' } });
    }, []);

    console.log(mutationLoading);
    console.log(mutationData);

    if (loading) {
        return <div>로딩중</div>;
    }

    if (!loading && data !== undefined) {
       return <div>{data.book.title}</div>;
    }

    if(mutationData) {
        return <div>{mutationData.updatebook.title}</div>
    }

    return (
        <div>Query</div>
    );
}

export default Query;

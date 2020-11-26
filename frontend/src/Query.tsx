import React from 'react';
import { gql, useQuery } from "@apollo/client";


const GET_GQL = gql`
  query {
    book {
      title,
    }
  }
`

function Query() {
    const { data, loading } = useQuery(GET_GQL);

    console.log(data);

    if (loading) {
        return <div>로딩중</div>;
    }

    if (!loading && data !== undefined) {
       return <div>{data.book.title}</div>;
    }


    return (
        <div>Query</div>
    );
}

export default Query;

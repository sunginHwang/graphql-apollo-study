import React from "react";
import {NetworkStatus, useQuery} from "@apollo/client";
import {GET_DOG_PHOTO} from "../../../graphqls/dog";

interface IProps {
    breed: string;
}

function DogPhoto({breed}: IProps) {
    const {loading, error, data, refetch, networkStatus} = useQuery<any>(GET_DOG_PHOTO, {
        variables: {breed},
        notifyOnNetworkStatusChange: true,
    });

    if (networkStatus === NetworkStatus.refetch) return <div>재 호출 중 입니다.</div>;
    if (loading) return <div>로딩중입니다.</div>;
    if (error) return <div>photo Error! ${error}</div>;

    return (
        <div>
            <img src={data.dog.displayImage} style={{height: 100, width: 100}}/>
            <button onClick={() => refetch()}>Refetch!</button>
        </div>
    );
}

export default DogPhoto;

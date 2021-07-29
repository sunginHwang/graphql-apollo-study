import React from 'react';
import {useQuery} from '@apollo/client';
import {GET_DOGS} from "../../../graphqls/dog";

interface IDog {
  breed: string;
  id: number;
}

interface IProps {
    onDogSelected: any;
}

function Dogs({onDogSelected}: IProps) {
    const {loading, error, data} = useQuery<any>(GET_DOGS);

    if (loading) return <div>'Loading...'</div>;
    if (error) return <div>`Error! ${error.message}`</div>;

    return (
        <select name="dog" onChange={onDogSelected}>
            {data.dogs.map((dog: IDog) => (
                <option key={dog.id} value={dog.breed}>
                    {dog.breed}
                </option>
            ))}
        </select>
    );
}

export default Dogs;
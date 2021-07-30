import React, {useState} from 'react';
import Dogs from "./Dogs";
import DogPhoto from "./DogPhoto";

function Dog() {
    const [breed, setBreed] = useState('');
    const onDogSelected = (e: any) => {
        setBreed(e.target.value);
    };

    return  (
        <>
            <Dogs onDogSelected={onDogSelected}/>
            {breed !== '' && <DogPhoto breed={breed}/>}
        </>
    );
}

export default Dog;


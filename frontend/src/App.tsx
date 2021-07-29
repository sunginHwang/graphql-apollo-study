import React, {useState} from 'react';
import './App.css';
import Dogs from "./components/dog/Dogs";
import DogPhoto from "./components/dog/DogPhoto";

function App() {
    const [breed, setBreed] = useState('');
    const onDogSelected = (e: any) => {
        setBreed(e.target.value);
    };

    return (
        <div className="App">
            <Dogs onDogSelected={onDogSelected}/>
            {breed !== '' && <DogPhoto breed={breed}/>}
        </div>
    );
}

export default App;


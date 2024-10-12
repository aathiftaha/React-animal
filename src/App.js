import './App.css';
import {useState} from 'react'
import AnimalShow from './AnimalShow';

function getrandomanimal(){
    const animals = ['bird','cat','cow','dog','gator','horse']
    return animals[Math.floor(Math.random() * animals.length)]
};
console.log(getrandomanimal());

function App(){
    const [animals,setAnimals] = useState([])
    const click = () =>{
        setAnimals([...animals,getrandomanimal()])
    }
    const renderAnimals = animals.map((animal,index) =>{
        return <AnimalShow type={animal} key={index} />
    })
    return (
        <div className='app'>
        <button onClick={click}>Add Animal</button>
        <div className='animal-list'>{renderAnimals}</div>
        </div>
    )
}
export default App

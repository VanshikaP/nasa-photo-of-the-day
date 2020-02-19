import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const Card = () => {
    const [apod, setApod] = useState([]);
    const [date, setDate] = useState('');
    useEffect(() => {
        Axios.get(`https://api.nasa.gov/planetary/apod?api_key=mtNe4BLMH8cvYODUkfqN7qqnphl2Og82ugjLOPaz&date=${date}`)
        .then(response => {
            console.log(response.data);
            setApod(response.data);
        })
        .catch(error => {
            console.log('Error in fetching NASA Data', error);
        })
    }, [date])
    return (
        <div className = 'card-container'>
            <label>
                <h3>Select the Date:</h3> 
                <input type='date' id='dateInput' ></input>
            </label>
            <button onClick = {() => {
                setDate(document.getElementById('dateInput').value);
            }}>Get Picture of the Day</button>
            <div className = 'card'>
                <h2>{apod.title}</h2>
                <p>{apod.date}</p>
                <img src={apod.url} alt = {apod.title}></img>
                <p>{apod.explanation}</p>
            </div>
        </div>
    )
}

export default Card;
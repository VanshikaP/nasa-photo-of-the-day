import React, {useState, useEffect} from 'react';
import Card from './Card';
import Axios from 'axios';

const CardGrid = () => {
    const [apod, setApod] = useState([]);
    useEffect(() => {
        Axios.get('https://api.nasa.gov/planetary/apod?api_key=mtNe4BLMH8cvYODUkfqN7qqnphl2Og82ugjLOPaz')
        .then(response => {
            console.log(response.data);
            setApod(response.data);
        })
        .catch(error => {
            console.log('Error in fetching NASA Data', error);
        })
    }, [])
    return (
        <div className = 'card-grid'>
            <Card 
            title={apod.title}
            date={apod.date}
            url = {apod.url}
            explanation = {apod.explanation} />
        </div>
    )
}

export default CardGrid;
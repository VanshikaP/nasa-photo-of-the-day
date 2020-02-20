import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const APODButton = styled.button `
    background: black;
    color: white;
    font-size: 16px;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    &:hover{
        background: blue;
    }
`;

const CardContainer = styled.div `
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    object-fit: scale;
    margin: 20px auto 0 auto;
    border: 1px solid gray;
    color: black;
    background: white;
`
const APOD = (props) => {
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
        <div className = 'container'>
            <p>
                <h3>Select the Date:</h3> 
                <input type='date' id='dateInput' ></input>
            </p>
            <APODButton onClick = {() => {
                setDate(document.getElementById('dateInput').value);
            }}>Get Picture</APODButton>
            <CardContainer>
                <Card>
                    <CardImg top width="100%" src={apod.hdurl} alt={apod.title} />
                    <CardBody>
                    <CardTitle>{apod.title}</CardTitle>
                    <CardText>{apod.explanation}</CardText>
                    <CardText>
                        <small className="text-muted">{apod.date}</small>
                    </CardText>
                    </CardBody>
                </Card>
            </CardContainer>
        </div>
    )
}

export default APOD;
import React from 'react';

export default function Card(props){

    return (
        <div className = 'card' key = {props.id}>
            <h2>{props.title}</h2>
            <p>{props.date}</p>
            <img src={props.url} alt = 'pod image'></img>
            <p>{props.explanation}</p>
        </div>
    )

}
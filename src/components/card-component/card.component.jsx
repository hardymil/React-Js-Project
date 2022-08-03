import { Component } from "react";
import './card.styles.css'

const Card = (props) => {
    
    const { name, email, id } = props.monster;
        
    return (
        <div className='card'>
            <div className='card-container' key={id}>
                <img alt={`monster ${name}`} 
                src= {`https://robohash.org/${id}?set=set2`}/>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>    
    );
}

export default Card;
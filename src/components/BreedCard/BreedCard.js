import React from 'react';
import './BreedCard.css'; 
export default function BreedCard({url}) {
    return(
        <div className="breedCard">
            <a href="#"><img src={url}></img></a>
        </div>
    )
 }
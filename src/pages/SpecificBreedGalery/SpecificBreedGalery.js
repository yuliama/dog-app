import axios from 'axios';
import React, { useState, useEffect } from 'react';
import BreedCard from '../BreedCard/BreedCard'
import './SpecificBreedGalery.css'

export default function SpecificBreedGalery({breed}){
    const [dogsImageUrls, setDogsImageUrls] = useState([]);

    useEffect(getAllDogsImageUrls, [dogsImageUrls]);

    async function getAllDogsImageUrls(){
        const url = "https://dog.ceo/api/breed/" + breed + "/images";

        const res = await axios.get(url);
        setDogsImageUrls(res.data.message);
    }
    return (
        <div className="specificBreedGallery">
            {dogsImageUrls.map((item, index) => <BreedCard key={index} url={item}></BreedCard>)}
        </div>
    )
}
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import DogModel from '../../model/DogModel';

export default function BreedsGallery() {
    const [breeds, setBreeds] = useState([]);


    React.useEffect(getAllBreeds, [breeds]);

    async function getAllBreeds() {
        const getAllBreedsURL = "https://dog.ceo/api/breeds/list/all";

        const res = await axios.get(getAllBreedsURL);

        const breedsNames = Object.keys(res.data.message);

        const promise = breedsNames.map(async (item, count) => {
            let url = await getBreedRandomImage(item);
            return new DogModel(count, item, url);
        });
        setBreeds(await Promise.all(promise));
    }

    async function getBreedRandomImage(breedName) {
        const imageUrl = '';
        const getAllBreedRandomImageUrl = "https://dog.ceo/api/breed/" + breedName + "/images/random";

        const res = await axios.get(getAllBreedRandomImageUrl);
        return res.data.message;
    }
    return (
        <>{breeds.map(item => <div key={item.id}>{item.breedName}</div>)}</>  // <div>{breeds.map(breed => { <div>breed</div> })}</div>
    )
}
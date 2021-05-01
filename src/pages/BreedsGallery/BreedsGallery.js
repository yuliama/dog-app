import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SpecificBreedGalery from '../SpecificBreedGalery/SpecificBreedGalery'

export default function BreedsGallery({ breeds }) {
    return (
        <>{breeds.map(item => <Link to={"SpecificBreedGalery/" + item.breedName} key={item.id}>{item.breedName}</Link>)}</>
    )
}
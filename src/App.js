import React, { useState, useEffect } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import DogModel from './model/DogModel';
import HomePage from './pages/HomePage/HomePage';
import BreedsGallery from './pages/BreedsGallery/BreedsGallery';
import SpecificBreedGalery from './pages/SpecificBreedGalery/SpecificBreedGalery';
import './App.css';

function App() {
  const [breeds, setBreeds] = useState([]);

  useEffect(getAllBreeds, [breeds]);

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
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/"><HomePage></HomePage></Route>
          <Route exact path="/BreedsGallery"><BreedsGallery breeds={breeds}></BreedsGallery></Route>
          <Route exact path="/SpecificBreedGalery/:breedName"><SpecificBreedGalery></SpecificBreedGalery></Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;

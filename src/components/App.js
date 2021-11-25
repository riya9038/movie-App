// import { render } from "@testing-library/react";
import React from 'react';
import {data} from "../data";
import Navbar from './NavBar';
import MovieCard from './MovieCard';

function App() {
    return (
      <div className="App">
       <Navbar/>
       <div className="main">
          <div className="tabs">
            <button className="tab">Movies</button>
            <button className="fav">Favourites</button>
          </div>

          <div className="list">
            {data.map((movie,index) =>(
              <MovieCard movie={movie} key={`movies-${index}`} />
              ))}
          </div>
        </div>
      </div>
    );
  
}

export default App;

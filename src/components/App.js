// import { render } from "@testing-library/react";
import React from 'react';
import {data} from "../data";
import Navbar from './NavBar';
import MovieCard from './MovieCard';
import { addMovies, setFavourite } from '../actions';

class App extends React.Component {

  componentDidMount(){
    const {store}= this.props;
    //make an api call
    
    //subscribe to the store
    store.subscribe(()=>{
      console.log('updated');
      this.forceUpdate();
    })
    //dispatch actions
    store.dispatch(addMovies(data))
  }

  isMovieFavourite=(movie)=>{
    const {movies}= this.props.store.getState();
    const index= movies.favourites.indexOf(movie);
    if(index!== -1){
      return true;
    }
    return false;
  }
  onChangeTab(val){
    this.props.store.dispatch(setFavourite(val));
  }

  render(){
    const {movies}= this.props.store.getState()
    const {list,favourites,showFavourites}= movies;
    console.log('render',this.props.store.getState());
    const displayMovie= showFavourites? favourites: list
    // console.log(movies);
    return (
      <div className="App">
       <Navbar/>
       <div className="main">
          <div className="tabs">
            <button className={`tab ${showFavourites? '':'active-tab'}`} onClick={()=>this.onChangeTab(false)}>Movies</button>
            <button className={`tab ${showFavourites? 'active-tab': ''}`} onClick={()=>this.onChangeTab(true)}>Favourites</button>
          </div>

          <div className="list">
            {displayMovie.map((movie,index) =>(
              <MovieCard 
                movie={movie} 
                key={`movies-${index}`}
                dispatch={this.props.store.dispatch}
                isMovieFavourite={this.isMovieFavourite(movie)} 
                />
              ))} 
          </div>
          {displayMovie.length ===0?<div>No movies to display!!</div>:null}
        </div>
      </div>
    );
  }
  
}

export default App;

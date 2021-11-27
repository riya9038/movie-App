import React from "react";
import {addFavourite, removeFavourite} from '../actions';

class MovieCard extends React.Component{

    onHandleFavourites=()=>{
        const {movie}= this.props;
        this.props.dispatch(addFavourite(movie));
    }
    onHandleUnFavourites=()=>{
        const {movie}= this.props;
        this.props.dispatch(removeFavourite(movie));
    }


    render(){
        const {movie, isMovieFavourite}= this.props;
        return (
            <div className="movie-card">
                <div className="left">
                    <img src={movie.Poster} alt="movie-poster"></img>
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {isMovieFavourite?
                        <button className="unfav-btn" onClick={this.onHandleUnFavourites}>UnFavourites</button>
                        :<button className="fav-btn" onClick={this.onHandleFavourites}>Favourites</button>
                        }   
                    </div>
                </div>
             
            </div>
          );
    }
    
  
}

export default MovieCard;
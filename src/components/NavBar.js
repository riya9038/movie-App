// import { render } from "@testing-library/react";
import React from "react";
// import {data} from "../data";
import {searchMovie, addMovieToList} from '../actions';
import { StoreContext } from "..";

class Navbar extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            searchText:'',
        }
    }
    handleSearchMovie=(movie)=>{
        this.props.dispatch(addMovieToList(movie))
    }

    handleChange=(e)=>{
        this.setState({
            searchText:e.target.value
        })
    }
    handleSearch=()=>{
        const {searchText}= this.state;
        this.props.dispatch(searchMovie(searchText));
    }
    render(){
        const {result: movie, showSearchResults}= this.props.search;
        return (
            <div className="nav">
                <div className="search">
                    <input onChange={this.handleChange}/>
                    <button className="search-btn" onClick={this.handleSearch}>Search</button>

                {showSearchResults &&
                (<div className="search-results">
                    <div className="search-result">
                        <img src={movie.Poster} alt="search-pic"></img>
                        <div className="movie-info">
                            <span>{movie.Title}</span>
                            <button onClick={()=>this.handleSearchMovie(movie)}>Add to movies</button>
                        </div>
                    </div>
                </div>
                )}
                </div>
            </div>
          );
    }
}
class NavbarWrapper extends React.Component{
    render(){
      return(
        <StoreContext.Consumer>
          {(store)=>{
            <Navbar dispatch={store.dispatch} search= {this.props.search} />
          }}
        </StoreContext.Consumer>
      )
    }
}
export default NavbarWrapper;

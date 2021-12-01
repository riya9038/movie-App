//action types
export const ADD_MOVIE = 'ADD_MOVIE';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const SET_FAVOURITE = 'SET_FAVOURITE';
export const ADD_SEARCH_RESULT= 'ADD_SEARCH_RESULT';
export const ADD_MOVIE_TO_LIST='ADD_MOVIE_TO_LIST';
//action creators
export function addMovies(movies){
    return{
        type: ADD_MOVIE,
        movies
    }
}

export function addFavourite(movie){
    return{
        type: ADD_FAVOURITE,
        movie
    }
}
export function removeFavourite(movie){
    return{
        type: REMOVE_FAVOURITE,
        movie
    }
}
export function setFavourite(val){
    return{
        type: SET_FAVOURITE,
        val
    }
}
export function addMovieToList(movie){
    return{
        type: ADD_MOVIE_TO_LIST,
        movie
    }
}
export function searchMovie(searchText){
    const url=`http://www.omdbapi.com/?apikey=3ca5df7&t=${searchText}`;
    return function(dispatch){  
        fetch(url).then(response=> response.json()).then((movie)=>{console.log('movie',movie);
        dispatch(addSearchResult(movie))
    })
    }
}

export function addSearchResult(movie){
    return{
        type: ADD_SEARCH_RESULT,
        movie
    }
}
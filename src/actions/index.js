//action types
export const ADD_MOVIE = 'ADD_MOVIE';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const SET_FAVOURITE = 'SET_FAVOURITE';
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
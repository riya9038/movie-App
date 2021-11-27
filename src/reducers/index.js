import { combineReducers } from "redux";
import { ADD_MOVIE, ADD_FAVOURITE, REMOVE_FAVOURITE, SET_FAVOURITE } from "../actions";

const movieState={
    list:[],
    favourites:[],
    showFavourites: false
}
export function movies(state=movieState, action){

    switch(action.type){
        case ADD_MOVIE:
            return {
                ...state,
                list: action.movies
            }
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FAVOURITE:
            const filteredArray= state.favourites.filter(movie=>
                movie.Title !== action.movie.Title);

            return {
                ...state,
                favourites: filteredArray
            }
        case SET_FAVOURITE:
            return {
                ...state,
                showFavourites: action.val
            }
        default:
            return state;
    }
}

    const searchState= {
        result:{}
    }
    export function search(state=searchState, action){
        return state;
    }
    const initialState={
        movies:movieState,
        search:searchState
    }
    // export default function rootReducer(state=initialState, action){
    //     return{
    //         movies:movies(state.movies, action),
    //         search:search(state.search, action)
    //     }
    // }

     export default combineReducers({
            movies,
            search
     })

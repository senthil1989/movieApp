import {
    GET_ALL_MOVIES,
    GET_ALL_MOVIES_SUCCESS,
    GET_ALL_MOVIES_FAIL,
    GET_SEARCH_TEXT
  } from "./actionTypes"
import {onGetAllMovies} from './thunk'

export function getAllMoviesList(page) {
    return onGetAllMovies(page);
}
export function searchValue(val) {
    return {
        type:GET_SEARCH_TEXT,
        val,
    }
}
export function getAllMoviesLoading() {
    return {
        type: GET_ALL_MOVIES,
    };
}

export function getAllMoviesSuccess(items) {
    return {
        type: GET_ALL_MOVIES_SUCCESS,
        payload:items
    };
}
export function getAllMovieseError(error) {
    return {
        type: GET_ALL_MOVIES_FAIL,
        error
    };
}

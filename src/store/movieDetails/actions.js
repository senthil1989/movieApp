import {
    GET_MOVIE_DETAILS,
    GET_MOVIE_DETAILS_SUCCESS,
    GET_MOVIE_DETAILS_FAIL,
    GET_MOVIE_VIDEO,
    GET_MOVIE_VIDEO_SUCCESS,
    GET_MOVIE_VIDEO_FAIL,
  } from "./actionTypes"
import {onGetMovieDetails,onGetMovieVideo} from './thunk'

export function getMovieDetails(id) {
    return onGetMovieDetails(id);
}

export function getMovieDetailsLoading() {
    return {
        type: GET_MOVIE_DETAILS,
    };
}

export function getMovieDetailsSuccess(items) {
    return {
        type: GET_MOVIE_DETAILS_SUCCESS,
        payload:items
    };
}
export function getMovieDetailseError(error) {
    return {
        type: GET_MOVIE_DETAILS_FAIL,
        error
    };
}

export function getMovieVideo(id) {
    return onGetMovieVideo(id);
}

export function getMovieVideoLoading() {
    return {
        type: GET_MOVIE_VIDEO,
    };
}

export function getMovieVideoSuccess(items) {
    return {
        type: GET_MOVIE_VIDEO_SUCCESS,
        payload:items
    };
}
export function getMovieVideoeError(error) {
    return {
        type: GET_MOVIE_VIDEO_FAIL,
        error
    };
}

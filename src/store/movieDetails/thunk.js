import axios from 'axios';
import {getMovieDetailsLoading,getMovieDetailsSuccess,getMovieDetailseError,getMovieVideoLoading,getMovieVideoSuccess,getMovieVideoeError} from './actions';

const options = {
    headers: {"x-rapidapi-key": "c94208d995msh1747a6f6ef8660dp141f0fjsn1c6346f18efa",
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "useQueryString": true}
  };
export function onGetMovieDetails(movie_id) {
    console.log("dfajjdjk kj")
    return (dispatch) => {
        dispatch(getMovieDetailsLoading());
        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=74dfbc0f68d2da5a2819cab80842227b&language=en-US`)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
                dispatch(getMovieDetailsLoading());
                return response;
            })
            .then((response) => dispatch(getMovieDetailsSuccess(response.data)))
            .catch((error) => dispatch(getMovieDetailseError(error)));
    };
}

export function onGetMovieVideo(movie_id) {
    console.log("dfajjdjk kj")
    return (dispatch) => {
        dispatch(getMovieVideoLoading());
        axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=74dfbc0f68d2da5a2819cab80842227b&language=en-US`)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
                dispatch(getMovieVideoLoading());
                return response;
            })
            .then((response) => dispatch(getMovieVideoSuccess(response.data)))
            .catch((error) => dispatch(getMovieVideoeError(error)));
    };
}
import axios from 'axios';
import {getAllMoviesLoading,getAllMoviesSuccess,getAllMovieseError} from './actions';

const options = {
    headers: {"x-rapidapi-key": "c94208d995msh1747a6f6ef8660dp141f0fjsn1c6346f18efa",
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "useQueryString": true}
  };
export function onGetAllMovies(val) {
    console.log(val,"121212dfajjdjk kj")
    let Api_Url=''
    if(typeof(val)==='string' && val.length){
        Api_Url=`https://api.themoviedb.org/3/search/movie?api_key=74dfbc0f68d2da5a2819cab80842227b&&language=en-US&page=1&include_adult=false&query=${val}`
    } else {
        Api_Url=`https://api.themoviedb.org/3/discover/movie?api_key=74dfbc0f68d2da5a2819cab80842227b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${val}&with_watch_monetization_types=flatrate`

    }
    return (dispatch) => {
        dispatch(getAllMoviesLoading());
        axios.get(Api_Url)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
                dispatch(getAllMoviesLoading());
                return response;
            })
            .then((response) => dispatch(getAllMoviesSuccess(response.data)))
            .catch((error) => dispatch(getAllMovieseError(error)));
    };
}
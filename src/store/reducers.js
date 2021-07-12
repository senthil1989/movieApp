import { combineReducers } from 'redux';
import allMovieReducer from "./home/reducer"
import movieDetailsReducer from "./movieDetails/reducer"


const rootReducer = combineReducers({
    allMovies:allMovieReducer,
    movieDetails:movieDetailsReducer
});
export default rootReducer;
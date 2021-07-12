import {
    GET_MOVIE_DETAILS,
    GET_MOVIE_DETAILS_SUCCESS,
    GET_MOVIE_DETAILS_FAIL,
    GET_MOVIE_VIDEO,
    GET_MOVIE_VIDEO_SUCCESS,
    GET_MOVIE_VIDEO_FAIL,
  } from "./actionTypes"
  const INIT_STATE = {
    movieDetail : {
      data : {},
      loading : false,
      error : {}
    },
    movieVideo:{
      data:{},
      loading:false,
      error:{}
    }
  }

  const allMovieReducer = (state = INIT_STATE, action) => {
      console.log(action)
    switch (action.type) {
      case GET_MOVIE_DETAILS:
        return {
          ...state,
          movieDetail : Object.assign({}, state.movieDetail, { data : {}, error : {}, loading : true }),
        }
  
      case GET_MOVIE_DETAILS_SUCCESS:
        return {
          ...state,
          movieDetail : Object.assign({}, state.movieDetail, { data: action.payload, loading : false })
        }
      case GET_MOVIE_DETAILS_FAIL:
        return {
          ...state,
          movieDetail : Object.assign({}, state.movieDetail, { error: action.payload, loading : false })
        }
        case GET_MOVIE_VIDEO:
        return {
          ...state,
          movieVideo : Object.assign({}, state.movieVideo, { data : {}, error : {}, loading : true }),
        }
  
      case GET_MOVIE_VIDEO_SUCCESS:
        return {
          ...state,
          movieVideo : Object.assign({}, state.movieVideo, { data: action.payload, loading : false })
        }
      case GET_MOVIE_VIDEO_FAIL:
        return {
          ...state,
          movieVideo : Object.assign({}, state.movieVideo, { error: action.payload, loading : false })
        }
        default:
      return state
  }
}

export default allMovieReducer
import {
    GET_ALL_MOVIES,
    GET_ALL_MOVIES_SUCCESS,
    GET_ALL_MOVIES_FAIL,
    GET_SEARCH_TEXT
  } from "./actionTypes"
  const INIT_STATE = {
    moviesList : {
      data : {},
      loading : false,
      error : {}
    },
    textVal:''
  }

  const allMovieReducer = (state = INIT_STATE, action) => {
      console.log(action)
    switch (action.type) {
      case GET_SEARCH_TEXT:
        return{
          ...state,
          textVal :action.val
        }
      case GET_ALL_MOVIES:
        return {
          ...state,
          moviesList : Object.assign({}, state.moviesList, { data : {}, error : {}, loading : true }),
        }
  
      case GET_ALL_MOVIES_SUCCESS:
        return {
          ...state,
          moviesList : Object.assign({}, state.moviesList, { data: action.payload, loading : false })
        }
      case GET_ALL_MOVIES_FAIL:
        return {
          ...state,
          moviesList : Object.assign({}, state.moviesList, { error: action.payload, loading : false })
        }
        default:
      return state
  }
}

export default allMovieReducer
import React,{Component,PureComponent} from 'react';
import { connect } from "react-redux"
import {getMovieDetails,getMovieVideo} from '../store/movieDetails/actions'

class MovieDetails extends PureComponent{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        const {match:{params}}=this.props
        this.props.onGetAllMovies(params.id);
        this.props.onGetVideo(params.id);
    }
  
	render() {
        const {movieDetail,movieVideo}=this.props
        var hours = Math.floor(movieDetail.runtime / 60);  
        var minutes = movieDetail.runtime % 60;
        var time=`${hours} h ${minutes} min`; 
		return(
            <>
            <div className="movieDetail">
                <div className="leftSection">
                    <h1>{movieDetail.title}</h1>
                    <span>{time}</span> <span>{movieDetail.release_date}</span> 
                <div className="genres">{movieDetail.genres?.map((item)=>{
                    return(
                        <span key={item.id}>{item.name}</span>
                    )
                })}</div>
                <div className="overview">{movieDetail.overview}</div>
                <div className="rating"><div><span className="rating_text">Rating {" "}</span><i class="fas fa-star"></i><span>{movieDetail.vote_average}/10</span></div>
                <div><i class="fas fa-heart"></i> {movieDetail.vote_count}</div>
                </div>
                </div>
               {movieVideo.results?.length?<iframe id="ytplayer" type="text/html" width="640" height="360"
                    src={`https://www.youtube.com/embed/${movieVideo.results[0].key}?autoplay=1&origin=http://example.com`}
                    frameborder="0"></iframe>:''}
            </div>
            </>
        )
    }
}
const mapStateToProps = ({movieDetails}) => ({
    movieDetail: movieDetails.movieDetail?.data,
    movieVideo: movieDetails.movieVideo?.data,

  })
  
  
  const mapDispatchToProps = dispatch => ({
    onGetAllMovies: (id) => dispatch(getMovieDetails(id)),
    onGetVideo: (id) => dispatch(getMovieVideo(id)),
  })
export default connect(mapStateToProps,mapDispatchToProps)(MovieDetails);
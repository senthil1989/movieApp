import React,{Component,PureComponent} from 'react';
import { connect } from "react-redux"
import MovieCard from '../components/MovieCard';
import Spinner from '../components/Spinner';
import Pagination from '../components/Pagination'
import {getAllMoviesList} from '../store/home/actions'
class Home extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            filter:{
              currentPage: 1,
              totalPages: null,
              currentData:[]
            }
        }

    }
    onPageChanged = data => {
      const { currentPage, totalPages, pageLimit } = data;
  console.log(data,"dasd")
      const offset = (currentPage - 1) * pageLimit;
      const currentData = this.props.moviesList.results?.slice(offset, offset + pageLimit);
      this.setState({filter: { ...this.state.filter, currentPage, currentData, totalPages} });
    };
    componentDidMount(){
        this.props.onGetAllMovies();
    }
    // componentDidUpdate(prevProps, prevState) {
    //   // Typical usage (don't forget to compare props)
    //   console.log(prevProps,prevState,this.state.filter,"42342");
    //   if (this.state.filter?.currentPage !== this.props.moviesList.page) {
    //     this.props.onGetAllMovies(this.state.filter?.currentPage);
    //   }
    // }
    componentDidUpdate(prevProps, prevState) {
      if (prevProps.isText !== this.props.isText) {
        console.log(prevProps,prevState,this.state.filter,"42342");
     this.props.onGetAllMovies(this.props.isText)

   }
      if (prevState.filter.currentPage !== this.state.filter.currentPage) {
           console.log(prevProps,prevState,this.state.filter,"42342");
        this.props.onGetAllMovies(this.state.filter.currentPage)

      }
  }
	render() {
    const {
      currentPage,
      totalPages
    } = this.state;
    console.log(this.props,"sdas312313")
    // const totalCountries = allCountries.length;

    // if (totalCountries === 0) return null;
		return(
            <div class="container mb-50">
            <div className="row cus-block">
            {!this.props.isLoading?<MovieCard items={this.props.moviesList.results} handleChange={this.handleChange}/>:<Spinner/>}
            </div>
            <Pagination totalRecords={1000} pageLimit={18} pageNeighbours={1} onPageChanged={this.onPageChanged} />
            </div>
        )
    }
}
const mapStateToProps = ({allMovies}) => ({
    moviesList: allMovies.moviesList?.data,
    isLoading : allMovies.moviesList?.loading,
    isText:allMovies.textVal
  })
  
  
  const mapDispatchToProps = dispatch => ({
    onGetAllMovies: (filter) => dispatch(getAllMoviesList(filter)),
  })
export default connect(mapStateToProps,mapDispatchToProps)(Home);
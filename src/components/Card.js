import React from 'react';
import { Link } from "react-router-dom";

const Card =({item})=>{
    return(
        <div class="cellphone-container">  
        <Link  to={`movie/${item.id}`}>
                <div class="movie">       
                  <div class="movie-img">
                  <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
                  </div>
                  <div class="text-movie-cont">
                    <div class="mr-grid">
                      <div class="col1">
                        <h2>{item.title}</h2>
                        <ul class="movie-gen justify-between">
                          <li>Realse Date : {item.release_date}</li>
                          <li><i class="far fa-heart"></i>{item.vote_count}</li>
                        </ul>
                      </div>
                    </div>
                    <div class="mr-grid summary-row">
                      <div class="col2">
                        <h5>SUMMARY</h5>
                      </div>
                    </div>
                    <div class="mr-grid">
                      <div class="col1">
                          <div className="textOverflow">
                              <div>
                        <p class="movie-description">{item.overview}</p>
                        </div>
                        </div>
                      </div>
                    </div>                    
                  </div>
                </div>
                </Link>
            </div>
    )
}
export default Card
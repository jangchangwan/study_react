import React from 'react';
import './Detail.css'
import axios from "axios";

class Detail extends React.Component {
  state = {
    movie: [],
  };

  getMovie = async (movieId) => {
    const {
      data: {
        data: {movie},
      },
    } = await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`)
    // state에 넣어주기
    this.setState({ movie: movie})
    // console.log(movies)
  }
  componentDidMount(){
    // 데이터 받아오기
    const movieId = window.location.href.split('/')[5]
    this.getMovie(movieId);
    // console.log(window.location.href.split('/')[5])

  }
  render() {
    const {movie} = this.state
    return (
      <div className="detail__movie">
        <img src={movie.medium_cover_image} alt={movie.title} title={movie.title}/>
        <h3>{movie.title}</h3>
        <h5>{movie.year}</h5>
        <h5>{movie.rating}</h5>
        <span>{movie.description_intro}</span>
      </div>
    );
  }
}

export default Detail;

import React from "react";
import axios from "axios";
// Movie.js와 연결
import Movie from './Movie';
import './App.css';

// 직접 실행시키지않다고 초기값으로 실행되는 함수
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: {movies},
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
    // state에 넣어주기
    this.setState({ movies: movies})
    // console.log(movies)
  }
  // 5초 뒤에 화면을 보여주도록 설정
  componentDidMount(){
    setTimeout(() => {
      this.setState({ isLoading: false})
    }, 1000);
    // 데이터 받아오기
    this.getMovies();
  }
  render() {
    const {isLoading, movies} = this.state
    return (
      <section className="container">
        {/* 삼항 연산자 사용 */}
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">'Loading...'</span>
          </div>
        ) : (
          <div className="movies">{ movies.map(movie => (
            // console.log(movie)
            // key값 전달
            <Movie 
                key = { movie.id }
                id = { movie.id }
                year = { movie.year }
                title = { movie.title }
                summary = { movie.summary }
                poster = { movie.medium_cover_image }
                genres = { movie.genres }
            />
            ))}
          )</div>
        )}

      </section>
    );
  }
}

export default App;

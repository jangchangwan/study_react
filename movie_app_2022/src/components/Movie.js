import React from 'react'
import PropTypes from 'prop-types'
import './Movie.css';
// detail로 이동하기위해
import { Link } from 'react-router-dom'
// 개별 Movie 데이터
function Movie({ id, title, year, summary, poster, genres}) {
  return (
    <div className='movie'>
      <Link to ={{
        pathname: `/movie-detail/${id}`,
        state: {
            year: year, 
            title: title, 
            summary: summary, 
            poster: poster, 
            genres: genres},
      }}
      >
      <img src={poster} alt={title} title={title}/>
      <div className='movie__data'>
        <h3 className='movie__title'>{title}</h3>
        <h5 className='movie__year'>{year}</h5>
        {/* slice 문자열 제한 */}
        <p className='movie__summary'>{summary.slice(0, 180)}...</p>
        <ul className='movie__genres'>
          { genres.map((genre, idx) => {
            return (
              <li key={idx} className='movie_genre'>{genre}</li>
            )
          })}
        </ul>
      </div>
      </Link>
      
    </div>
  )

}
// 필수적으로 들어가야하는 항목 넣어주기
Movie.propTypes = { 
  year: PropTypes.number.isRequired
 }

export default Movie;
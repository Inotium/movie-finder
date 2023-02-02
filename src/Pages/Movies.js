import axios from 'axios'
import React from 'react'
import { useEffect, useState} from 'react'
import MovieCard from '../components/MovieCard/MovieCard'





const Movies = () => {

  const [content, setContent] = useState([]);

  const getMovies =  async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc&page=1`);

    setContent(data.results)
    //console.log(data);
  }
  
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <span className='pageTitle'>Movies</span>
      <div className="search">
        {content &&
          content.map((cardContent) => (
            <MovieCard
              key={cardContent.id}
              id={cardContent.id}
              poster={cardContent.poster_path}
              title={cardContent.title || cardContent.name}
              date={cardContent.first_air_date || cardContent.release_date}
              media_type="movie"
            />
          ))}
          </div>
    </div>
  )
}

export default Movies

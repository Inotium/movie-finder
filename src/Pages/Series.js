import React from 'react'
import axios from 'axios'
import { useEffect, useState} from 'react'
import MovieCard from '../components/MovieCard/MovieCard'

const Series = () => {

  const [content, setContent] = useState([]);

  const getSeries =  async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc`);

    setContent(data.results)
    //console.log(data);
  }
  
  useEffect(() => {
    getSeries();
  }, []);

  return (
    <div>
      <span className='pageTitle'>Series</span>
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

export default Series

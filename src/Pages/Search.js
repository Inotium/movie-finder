import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react';
import { TextField, Button, Tabs, Tab } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import '../components/MovieCard/MovieCard'
import MovieCard from '../components/MovieCard/MovieCard';
import './Search.css'


const Search = () => {

  const [type, setType] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [content, setContent] = useState();


  const getSearch = async () => { 
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm}`);
      
        setContent(data.results);
        //console.log(data);
    }
  useEffect(() =>{
    getSearch();
    // eslint-disable-next-line
  },[type])

  return (
    <div>
      <div style={{display: 'flex'}}>
        <TextField 
          style={{ flex: 1 }}
          className="searchBar"
          label="Search"
          variant="filled"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <Button 
          variant='contained' 
          style={{marginLeft: 10}} 
          onClick={getSearch}
        > 
          <SearchIcon />
        </Button>
        
      </div>
      <Tabs 
        value={type} 
        indicatorColor='primary' 
        textColor='#ffffff'
        centered
        onChange={(event, newValue) => {
          setType(newValue);
        }}
      >
          <Tab style={{ width: '50%' }} label="Search Movies" />
          <Tab style={{ width: '50%' }} label="Search Series" />
      </Tabs>
      <span className='pageTitle'>Search</span>
      <div className="search">
        {content &&
          content.map((cardContent) => (
            <MovieCard
              key={cardContent.id}
              id={cardContent.id}
              poster={cardContent.poster_path}
              title={cardContent.title || cardContent.name}
              date={cardContent.first_air_date || cardContent.release_date}
              media_type={type ? "tv" : "movie"}
            />
          ))}
        {searchTerm &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
    </div>
  )
}


export default Search

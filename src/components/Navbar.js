import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if(value===0)
      navigate("/");
    else if(value===1)
      navigate("/movies")
    else if(value===2)
      navigate("/series")

  // eslint-disable-next-line
  }, [value]);
  return (

      <BottomNavigation style={{ backgroundColor: '#2a3131' ,height: "60px", width: '100%',position: 'fixed', bottom: '0'}}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction 
          style={{ background: '#2a3131' }}
          label="Search" 
          icon={<SearchIcon style={{ fill: '#ffffff' }} />}
        />
        <BottomNavigationAction 
          style={{ background: '#2a3131'}}
          label="Popular Movies" 
          icon={<MovieIcon style={{ fill: '#ffffff' }}/>} 
        />
        <BottomNavigationAction 
          style={{ background: '#2a3131'}}
          label="Popular Series" 
          icon={<LiveTvIcon style={{ fill: '#ffffff' }}/>} 
        />
      </BottomNavigation>
    
  );
}

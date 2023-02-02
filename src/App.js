import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import SimpleBottomNavigation from './components/Navbar';
import Search from './Pages/Search';
import Movies from './Pages/Movies';
import Series from './Pages/Series';
import { Container } from "@mui/material";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="App">
          <Container>
            <Routes>
              <Route path='/' element={ <Search />}/>
              <Route path='/movies' element={ <Movies/> }/>
              <Route path='/series' element={ <Series />}/>
            </Routes>
          </Container>
        </div>
        <SimpleBottomNavigation />
      </BrowserRouter>
    </>
  );
}

export default App;

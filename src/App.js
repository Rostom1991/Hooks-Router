import './App.css';
import React, { useState } from 'react'
import Star from './components/Star'
import { Button } from "react-bootstrap"
import Search1 from './components/Search1'
import MovieList from './components/MovieList';
import { MovieData } from './components/MovieData'
import AddMovie from './components/AddMovie'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Trailer from './components/Trailer'
function App() {
  const [moviesData, setMovies] = useState(MovieData)
  const [rate, setrate] = useState(0)
  const [search, setsearch] = useState('')
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
        <div>
        <div className="header">
        <Search1 search={search} setsearch={setsearch} />
        <AddMovie moviesData={moviesData} setMovies={setMovies} />
        </div>
        

        <Star rate={rate} setrate={setrate}/>
        <MovieList rate={rate} search={search} moviesData={moviesData}  />
        </div>
        </Route>
        <Route path="/trailer/:id">
          <Trailer moviesData={moviesData}/>

        </Route>
      </Switch>
    </BrowserRouter>
        
  );
}

export default App;

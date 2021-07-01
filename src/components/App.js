import React from 'react'
import {
  BrowserRouter,
  Route, Switch
} from 'react-router-dom';
import './App.css';


import Header from './Header';
import PopularSearches from './PopularSearches';
import SearchBar from './SearchBar';
import SuperHeroDetails from './SuperHeroDetails';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <div>
            <Header />
            <SearchBar></SearchBar>
            <PopularSearches />
          </div>
        </Route>
        <Route path='/:id'>
          <SuperHeroDetails />
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  )
}

export default App

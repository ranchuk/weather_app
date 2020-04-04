import React, {Component} from 'react';
import './App.css';
import Menu from './components/menuBar/menuBar.js'
import Home from './components/home/home.js'
import Favorites from './components/favorites/favorites.js'
import { Provider } from "react-redux";
import store from "./store";
import GeoLocation from './geoLocationAPI'
import { BrowserRouter, Route } from "react-router-dom";
import {setFavorites} from './actions/favoritesAction'
// import AlertMessage from './components/AlertMessage/AlertMessage'
import { SnackbarProvider } from 'notistack';
import Notifier from './components/AlertMessage/Notifier';
import config from './config';
GeoLocation()
console.log(config.isProduction)
//Check for favorites
if (localStorage.favorites) {
  store.dispatch(setFavorites(JSON.parse(localStorage.favorites)));
}

function App () {
    return (
    <Provider store={store}>
      {/* <AlertMessage type={'error'} message={'Example for error message'}/> */}        
      <SnackbarProvider maxSnack={4}>
      <Notifier />
        <BrowserRouter>
            <Menu/>
            <Route
              path="/"
              component={Home}
              exact
            />
            <Route
              path="/favorites"
              component={Favorites}
              exact
            />
        </BrowserRouter>
      </SnackbarProvider>
    </Provider>
    );
}

export default App;

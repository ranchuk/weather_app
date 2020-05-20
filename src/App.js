import React, {lazy, Suspense} from 'react';
import './App.css';
import Menu from './components/menuBar/menuBar.js'
// import Home from './components/home/home.js'
// import Favorites from './components/favorites/favorites.js'
import { Provider } from "react-redux";
import store from "./store";
import GeoLocation from './geoLocationAPI'
import { BrowserRouter, Route } from "react-router-dom";
import {setFavorites} from './actions/favoritesAction'
import { SnackbarProvider } from 'notistack';
import Notifier from './components/Notifier/Notifier';

const Home = lazy(() => import('./components/home/home.js'));
const Favorites = lazy(() => import('./components/favorites/favorites.js'));

GeoLocation()

if (localStorage.favorites) {
  store.dispatch(setFavorites(JSON.parse(localStorage.favorites)));
}

function App () {
    return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={4}>
      <Notifier />
      <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </SnackbarProvider>
    </Provider>
    );
}

export default App;

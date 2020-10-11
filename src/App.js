import React, { lazy, Suspense, useEffect } from 'react';
import './App.css';
import Menu from './components/menuBar/menuBar.js';
import { Provider } from 'react-redux';
import store from './store';
import GeoLocation from './geoLocationAPI';
import { BrowserRouter, Route } from 'react-router-dom';
import { setFavorites } from './actions/favoritesAction';
import { SnackbarProvider } from 'notistack';
import Notifier from './components/Notifier/Notifier';
import loadable from '@loadable/component';

const Home = loadable(() =>
  import(/* webpackChunkName: "home" */ './components/home/home.js')
);
const Favorites = loadable(() =>
  import(
    /* webpackChunkName: "favorites" */ './components/favorites/favorites.js'
  )
);

GeoLocation();

if (localStorage.favorites) {
  store.dispatch(setFavorites(JSON.parse(localStorage.favorites)));
}

function App() {
  return (
    <Provider store={store}>
      <SnackbarProvider maxSnack={4}>
        <Notifier />
        <Suspense fallback={<div>Loading...</div>}>
          <BrowserRouter>
            <Menu />
            <Route path='/' component={Home} exact />
            <Route path='/favorites' component={Favorites} exact />
          </BrowserRouter>
        </Suspense>
      </SnackbarProvider>
    </Provider>
  );
}

export default App;

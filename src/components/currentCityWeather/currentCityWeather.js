import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {favoritesAction} from '../../actions/favoritesAction'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import TodayWeather from './todayWeather';
import FiveDaysForecast from './fiveDaysforecast';

const CurrentCityWeather = () => {
    const dispatch = useDispatch()
    const {data: currentCity} = useSelector((state) => state.currentCity)
    const favorites = useSelector((state) => state.favorites.data)
    const isFavorite = currentCity && favorites.length > 0 && favorites.find((favorite)=>favorite.cityInfo.Key=== currentCity.cityInfo.Key)

    const favoriteFunc = () => {
        isFavorite ? dispatch(favoritesAction(currentCity, false)) : dispatch(favoritesAction(currentCity, true))
    }
    return <CurrentCityWeatherStyle>
                <h3>{currentCity && currentCity.cityInfo && currentCity.cityInfo.LocalizedName}</h3>
                <Button  onClick={()=>favoriteFunc()} variant="contained" color={isFavorite ? "secondary" : "primary"}>{isFavorite ? 'Remove to Favorite': 'Add to favorite'}</Button>
                <TodayWeather/>
                <FiveDaysForecast/>
            </CurrentCityWeatherStyle>
}

export default CurrentCityWeather

const CurrentCityWeatherStyle = styled.div`
    border: 1px solid black;
    border-radius:3px;
    text-align:center;
`;
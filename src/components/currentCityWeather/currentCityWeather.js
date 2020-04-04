import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {favoritesAction} from '../../actions/favoritesAction'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import TodayWeather from './todayWeather';
import FiveDaysForecast from './fiveDaysforecast';
import FavoriteIcon from '@material-ui/icons/Favorite';

const CurrentCityWeather = () => {
    const dispatch = useDispatch()
    const {data: currentCity} = useSelector((state) => state.currentCity)
    const favorites = useSelector((state) => state.favorites.data)
    const isFavorite = currentCity && favorites.length > 0 && favorites.find((favorite)=>favorite.cityInfo.Key=== currentCity.cityInfo.Key)

    const favoriteFunc = () => {
        isFavorite ? dispatch(favoritesAction(currentCity, false)) : dispatch(favoritesAction(currentCity, true))
    }
    return <CurrentCityWeatherStyle>
                <CityName>{currentCity && currentCity.cityInfo && currentCity.cityInfo.LocalizedName}</CityName>
                <ButtonStyle><FavoriteIcon  onClick={()=>favoriteFunc()} color={isFavorite ? "secondary" : "primary"} fontSize={'large'} /></ButtonStyle>
                <TodayWeather/>
                <FiveDaysForecast/>
            </CurrentCityWeatherStyle>
}

export default CurrentCityWeather

const CurrentCityWeatherStyle = styled.div`
    border: 1px solid black;
    border-radius:3px;
    text-align:center;
    position:relative;
`;
const CityName = styled.h3`
`

const ButtonStyle = styled.div`
cursor: pointer;
position: absolute;
right:10px;
top:10px;
`
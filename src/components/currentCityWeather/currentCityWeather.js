import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {favoritesAction} from '../../actions/favoritesAction'
import styled from 'styled-components'
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
                <TodayWeather currentCity={currentCity}/>
                <FiveDaysForecast currentCity={currentCity}/>
                <ButtonStyle><FavoriteIcon  onClick={()=>favoriteFunc()} color={isFavorite ? "secondary" : "primary"} fontSize={'large'} /></ButtonStyle>
            </CurrentCityWeatherStyle>
}

export default CurrentCityWeather

const CurrentCityWeatherStyle = styled.div` 
    margin-top:5rem;
    @media screen 
            and (max-device-width: 580px) 
            and (-webkit-min-device-pixel-ratio: 1) {     
            margin-top:10rem;
    }
`
export const ButtonStyle = styled.div`
cursor: pointer;
position: absolute;
right:10px;
top:10px;
`
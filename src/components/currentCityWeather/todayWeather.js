import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

const TodayWeather = () => {
    const {data: currentCity} = useSelector((state) => state.currentCity)

    return <TodayWeatherStyle>
                <h3>{currentCity && currentCity.todayWeather && currentCity.todayWeather.WeatherText}</h3>
                {currentCity && currentCity.todayWeather && 
                <img
                src={`https://developer.accuweather.com/sites/default/files/${
                    currentCity.todayWeather.WeatherIcon < 10
                    ? "0" + currentCity.todayWeather.WeatherIcon
                    : currentCity.todayWeather.WeatherIcon
                }-s.png`}
                alt="icon"
                />}
            </TodayWeatherStyle>
}

export default TodayWeather

const TodayWeatherStyle = styled.div`
width:100%;
text-align:center;
`;
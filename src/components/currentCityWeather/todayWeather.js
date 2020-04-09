import React from 'react';
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import {convertToF} from '../../utils'
import changeDegreeType from '../../actions/degreeAction'
import { useDispatch } from 'react-redux'
// import {TodayWeatherStyle, CityName,WeatherStatus, ImageAndTemp, Image, ImageAndStatus, CityAndTempStyle} from './styles'
const TodayWeather = ({currentCity}) => {
    const dispatch = useDispatch()
    const isCelsius = useSelector((state) => state.degreeType.isCelsius)
    const handleToggle = (e) => {
        dispatch(changeDegreeType())
    }
    return   <TodayWeatherStyle>
                         <CityAndTempStyle>
                            <CityName>{currentCity && currentCity.cityInfo && currentCity.cityInfo.LocalizedName}</CityName>
                            {isCelsius && <div>{Math.round(currentCity.todayWeather.Temperature.Metric.Value)}°C</div>}
                            {!isCelsius && <div>{convertToF(currentCity.todayWeather.Temperature.Metric.Value)}°F</div>}
                        </CityAndTempStyle>
                        <ImageAndStatus>
                            <WeatherStatus>{currentCity.todayWeather.WeatherText}</WeatherStatus>
                            <Image
                            src={`https://developer.accuweather.com/sites/default/files/${
                                currentCity.todayWeather.WeatherIcon < 10
                                ? "0" + currentCity.todayWeather.WeatherIcon
                                : currentCity.todayWeather.WeatherIcon
                            }-s.png`}
                            alt="icon"
                            />
                            
                        </ImageAndStatus>
                        <label className="switch">
                            <input type="checkbox" onChange={handleToggle}/>
                            <span className="slider round"></span>
                        </label>
            </TodayWeatherStyle>

}

export default TodayWeather

export const ImageAndStatus = styled.div`
display:flex;
align-items:center;
`
export const Image = styled.img`
width:10rem;
@media screen 
            and (max-device-width: 580px) 
            and (-webkit-min-device-pixel-ratio: 1) { 
                width:7rem;
    }
`
export const WeatherStatus = styled.span`
    text-transform: uppercase;
    font-size: 3rem;
    letter-spacing: 0.2rem;

    @media screen 
            and (max-device-width: 580px) 
            and (-webkit-min-device-pixel-ratio: 1) { 
                font-size: 2rem;
    }
`
export const CityName = styled.span`
    text-transform: uppercase;
    display: block;
    margin-right: 3rem;
    @media screen 
            and (max-device-width: 580px) 
            and (-webkit-min-device-pixel-ratio: 1) { 
                margin-right: 1rem;
    }
`
export const TodayWeatherStyle = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    color:#ffffff;
    animation-name: fadeIn;
    animation-duration: 2s;
    animation-timing-function: ease-out;
    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`

export const CityAndTempStyle = styled.div`
    display:flex;
    font-size: 6rem;
    font-weight: 400;
    letter-spacing: 0.5rem;
    margin-bottom: 2rem;

    @media screen 
            and (max-device-width: 580px) 
            and (-webkit-min-device-pixel-ratio: 1) { 
                font-size: 3rem;
    }
`
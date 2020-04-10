import React from 'react';
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'
import {convertToC} from '../../utils'
// import {FiveDaysForecastStyle, DayStyle, DayStyleLineHeader, DayStyleLine} from './styles'

var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const FiveDaysForecast = ({currentCity}) => {
    const isCelsius = useSelector((state) => state.degreeType.isCelsius)

    return <FiveDaysForecastStyle>
                {currentCity && currentCity.fiveDayaWeather && currentCity.fiveDayaWeather.DailyForecasts.map((weatherItem, index)=>{
                    return  <DayStyle key={index}>
                                <DayStyleLineHeader>{days[(new Date(moment(weatherItem.Date)).getDay())]}</DayStyleLineHeader>
                                <DayStyleLine>Day: {weatherItem.Day.IconPhrase}</DayStyleLine>
                                <DayStyleLine>Night: {weatherItem.Night.IconPhrase}</DayStyleLine>
                                <DayStyleLine>Max: 
                                    {isCelsius && <span>{convertToC(weatherItem.Temperature.Maximum.Value)}°C</span>}
                                    {!isCelsius && <span>{weatherItem.Temperature.Maximum.Value}°F</span>}
                                </DayStyleLine>
                                <DayStyleLine>Min: 
                                    {isCelsius && <span>{convertToC(weatherItem.Temperature.Minimum.Value)}°C</span>}
                                    {!isCelsius && <span>{weatherItem.Temperature.Minimum.Value}°F</span>}
                                </DayStyleLine>

                            </DayStyle>
                })}
            </FiveDaysForecastStyle>
}

export default FiveDaysForecast

export const FiveDaysForecastStyle = styled.div`
        display: flex;
        justify-content: space-between;
        margin-top:10rem;
        @media screen 
        and (max-device-width: 1049px) 
        and (-webkit-min-device-pixel-ratio: 1) { 
            /* flex-wrap:wrap; */
            max-width:100rem;;
            overflow:scroll;
            padding:1.5rem;
        }
`;

export const DayStyle = styled.div`        
    padding: 2rem;
    text-align:center;
    font-size: 1.4rem;
    height:25rem;
    background-color:white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); 
    flex-grow:1;
    min-width:15rem;
    width: 20%;
    margin-right:2rem;
    border-radius: 2rem;
`;
export const DayStyleLine = styled.div`
margin-bottom:1rem;
`;
export const DayStyleLineHeader = styled.div`
margin-bottom:1rem;
font-size: 2.5rem;
font-weight: 600;
`;

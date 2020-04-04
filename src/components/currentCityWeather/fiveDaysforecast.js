import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'
const FiveDaysForecast = () => {
    const {data: currentCity} = useSelector((state) => state.currentCity)

    return <FiveDaysForecastStyle>
                {currentCity && currentCity.fiveDayaWeather && currentCity.fiveDayaWeather.DailyForecasts.map((weatherItem, index)=>{
                    return  <DayStyle key={index}>
                                <div>{moment(weatherItem.Date).utc().format('MM/DD/YYYY')}</div>
                                <div>Day: {weatherItem.Day.IconPhrase}</div>
                                <div>Night: {weatherItem.Night.IconPhrase}</div>
                                <div>Temperature: {weatherItem.Temperature.Minimum.value} - {weatherItem.Temperature.Maximum.value}</div>
                            </DayStyle>
                })}
            </FiveDaysForecastStyle>
}

export default FiveDaysForecast

const FiveDaysForecastStyle = styled.div`
display: flex;
justify-content:space-evenly;
flex-wrap:wrap;
text-align:center;
padding:15px;
`;
const DayStyle = styled.div`
padding: 15px;
text-align:center;
border:1px solid black;
border-radius:3px;
height: 200px;
padding:10px;
margin-bottom: 20px;
width:15%;
min-width:150px;
`;
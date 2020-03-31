import React, { useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'

import {currentCityAction} from '../../actions/currentCityAction'
import styled from 'styled-components'



import CurrentCityWeather from '../currentCityWeather/currentCityWeather.js'
import SearchBar from '../searchBar/searchBar';
import CircularProgress from '@material-ui/core/CircularProgress';
const Home = () => {
    const dispatch = useDispatch()
    const {data: geoPosition} = useSelector((state) => state.geoPosition)
    const currentCity = useSelector((state) => state.currentCity)



    useEffect(()=>{
        if(geoPosition && !currentCity.data){
         dispatch(currentCityAction(geoPosition))
        }
    },[geoPosition,dispatch])

    // useEffect(()=>{
    //     console.log(currentCity.data)
    //     if(currentCity.data){
    //      dispatch(currentCityAction(currentCity.data.cityInfo))
    //     }
    // },[])


    return <div id='HomeDiv'>
            <SearchBar/>
            {currentCity.loading ? 
            <SpinnerWrapper>
                <CircularProgress /> 
                <SpinnerText>Loading weather data...</SpinnerText>
            </SpinnerWrapper> 
            : 
            <CurrentCityStyle>
                <CurrentCityWeather />
            </CurrentCityStyle>}
           </div>
}

export default Home

export const SpinnerWrapper = styled.div`
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    text-align:center;
`
export const SpinnerText = styled.div`
margin-top:10px;
`
export const CurrentCityStyle = styled.div`
position: relative;
left:50%;
transform: translate(-50%);
margin-top:10px;
max-width:50%;
min-width:265px;

`
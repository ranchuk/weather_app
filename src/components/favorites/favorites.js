import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {} from 'react-router-dom';
import styled from 'styled-components'
import {fetchFavoritesWeather} from '../../actions/favoritesAction'
import {favoritesAction} from '../../actions/favoritesAction'
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import {currentCityAction} from '../../actions/currentCityAction';

const Favorites = (props) => {
    const dispatch = useDispatch()
    const favorites = useSelector((state) => state.favorites)

    useEffect(()=>{
        favorites.data.length > 0 && dispatch(fetchFavoritesWeather(favorites.data))
    },[])
return <div> 
                <PageHeadline>Favorites</PageHeadline>
                {favorites.data.length === 0 ? 
                <CenterizeItem><NoFavoritesStyle>No Favorites Selected</NoFavoritesStyle></CenterizeItem> :
                 favorites.loading ? 
                <SpinnerWrapper><CircularProgress /></SpinnerWrapper> : (
                <FavoritesWrapper>
                        {favorites.data.map((favorite, index)=>{
                        return <FavoriteItemWrapper key={index}>
                                    <FavoriteItem onClick={(e)=> {dispatch(currentCityAction(favorite.cityInfo)); props.history.push('/')}}>
                                        <FavoriteTitle>{favorite.cityInfo.LocalizedName}</FavoriteTitle>
                                        <TodayWeatherStyle>
                                            <h3>{favorite.todayWeather.WeatherText}</h3>
                                            <img src={require("../../pictures/partly_cloudy.png")} />            
                                        </TodayWeatherStyle>
                                    </FavoriteItem>
                                    <Button onClick={(e)=>dispatch(favoritesAction(favorite, false))} variant="contained" color="secondary" startIcon={<DeleteIcon />}>Remove from Favorite</Button>
                                </FavoriteItemWrapper>})}
               </FavoritesWrapper>)}
        </div>
}

export default Favorites

const TodayWeatherStyle = styled.div`
    width:100%;
    min-width:200px;
`;
const NoFavoritesStyle = styled.div`
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    font-size: 20px;
`
const SpinnerWrapper = styled.div`
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
`
const CenterizeItem = styled.div`
    text-align:center;
`
const PageHeadline = styled(CenterizeItem)`
    font-size:50px;
    padding:30px;
`
const FavoritesWrapper = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content:space-between;
    margin-top:30px;
`;
const FavoriteItemWrapper = styled.div`
    border:1px solid black;
    margin:10px;
    text-align:center;
    padding:15px;
    cursor:pointer;
`;
const FavoriteItem = styled.div`
    padding:15px;
    cursor:pointer;
`;

const FavoriteTitle = styled.h3``
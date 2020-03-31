import { combineReducers } from "redux";
import geoLocation from "./geoLocationReducer";
import geoPosition from './geoPositionReducer';
import autoCompleteSearch from './autoCompleteSearchReducer';
import currentCity from './currentCityReducer';
import favorites from './favoritesReducer';

export default combineReducers({
    geoLocation,
    geoPosition,
    autoComplete: autoCompleteSearch,
    currentCity,
    favorites,
});
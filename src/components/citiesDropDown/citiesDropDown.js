import React from 'react';
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const CitiesDropDown = (props) => {
    const autoComplete = useSelector((state) => state.autoComplete)

    return !autoComplete.loading && autoComplete.data && autoComplete.data.map((city, index)=>{
        return <CityItem key={index} onClick={(e)=>props.onSelect(city)}><h3>{city.LocalizedName}</h3></CityItem>
    })
}

export default CitiesDropDown

const CityItem = styled.div`
    text-align: center;
    border: 1px solid black;
    border-radius: 3px;
    background-color:white;
    width:265px;
    cursor: pointer;
    :hover {
        background-color: gainsboro;
    }
`;
import React from 'react';
import { Link, withRouter } from "react-router-dom";
import styled from 'styled-components'
import {useDispatch} from 'react-redux';
import {fetchFavoritesWeatherLoading} from '../../actions/favoritesAction'


const MenuBar = (props) => {
    const dispatch = useDispatch()
    const {pathname} = props.history.location

    const handleToggle = (e) => {
        // TO DO -  handle dark/light theme support
    }
return <MenuStyle>
        <LinkStyle>
            {pathname === '/favorites' ? 
              <Link style={{color: 'white', textDecoration: "none"}} to="/">Home</Link>
            : <Link style={{color: 'white', textDecoration: "none"}} to="/favorites">Favorites</Link>}
            <label className="switch">
                <input type="checkbox" onChange={handleToggle}/>
                <span className="slider round"></span>
            </label>
       </LinkStyle>
       <LogoStyle>
            <img src={require("../../pictures/appLogo.png")} width="68px" height="68px" />            
       </LogoStyle>
       </MenuStyle>
}

export default withRouter(MenuBar)

const MenuStyle = styled.div`
    position: relative;
    width: 100%;
    border:1px solid black;
    height:70px;
    background-color:purple;
    color:white;
    font-size:20px;
`;

const LinkStyle = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right:2%;
`;
const LogoStyle = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left:1%;
    height:68px;
`;
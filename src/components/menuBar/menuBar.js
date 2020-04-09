import React from 'react';
import { Link, withRouter } from "react-router-dom";
import styled from 'styled-components'
import SearchBar from '../searchBar/searchBar.js';

const MenuBar = (props) => {
    const {pathname} = props.history.location

return <MenuStyle>
           <LogoStyle>
            <img src={require("../../pictures/appLogo.png")} width="100px" height="100px" />            
       </LogoStyle>
       {pathname !== '/favorites' ? <SearchStyle><SearchBar/></SearchStyle> : null}

        <LinkStyle>
            {pathname === '/favorites' ? 
              <Link style={{color: 'white', textDecoration: "none"}} to="/">Home</Link>
            : <Link style={{color: 'white', textDecoration: "none"}} to="/favorites">Favorites</Link>}
       </LinkStyle>
       </MenuStyle>
}

export default withRouter(MenuBar)
    const SearchStyle = styled.div`
    position:absolute;
    top:50%;
    transform: translate(-50%, -50%);
    left:50%;

    @media screen 
            and (max-device-width: 580px) 
            and (-webkit-min-device-pixel-ratio: 1) { 
                top:150%;
    }
`
const MenuStyle = styled.div`
    position:relative;
    display:flex;
    width: 100%;
    height:8rem;
    @media screen 
            and (max-device-width: 768px) 
            and (-webkit-min-device-pixel-ratio: 1) { 
                /* font-size:2.5rem; */
    }
`;

const LinkStyle = styled.div`
font-size:2.5rem;
position:absolute;
top:50%;
transform: translateY(-50%);
right:0rem;
`;
const LogoStyle = styled.div`
    position:absolute;
    top:50%;
    transform: translateY(-43%);
    left:-1.6rem;
`;
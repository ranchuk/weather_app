import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import CitiesDropDown from '../citiesDropDown/citiesDropDown.js'
import {debounced} from '../../utils'
import {currentCityAction} from '../../actions/currentCityAction'
import {SET_AUTO_COMPLETE} from '../../actions/types'
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components'

const SearchBar = () => {
    const dispatch = useDispatch()
    const [query, setQuery] = useState('')
    const [isOpen,setIsOpen] = useState(false)
    const autoComplete = useSelector((state: any) => state.autoComplete)
    const isLoading = autoComplete.loading;

    const onSelect = (city: any) => {
        setQuery(city.LocalizedName)
        setIsOpen(false)
        dispatch(currentCityAction(city))
    }

    const onQueryChange = (e: any) => {
        const query= e.target.value
        setQuery(e.target.value)
        if(query !== '') {
            debounced(query)
            setIsOpen(true)
        }
        else {
            setIsOpen(false)
            dispatch({
                type: SET_AUTO_COMPLETE,
                payload: null
            });
        }
    }

    return <SearchWrapper onBlur={(e)=>{setTimeout(()=>setIsOpen(false),100)}}>
                    <SearchInputWrapper>
                        <SearchInput placeholder={'Search City'} onChange={onQueryChange} value={query} onFocus={(e)=>query !== '' && setIsOpen(true)}/>
                        {isLoading ? <SpinnerWrapper><CircularProgress size={20}/></SpinnerWrapper> :
                        isOpen && <CitiesDropDown onSelect={onSelect}/>}
                    </SearchInputWrapper>
            </SearchWrapper>
}

export default SearchBar
const SearchWrapper = styled.div`
    position: relative;
    z-index:9999;
    height:100px;
    margin-bottom: 5%;
`;
const SearchInputWrapper = styled.div`
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%);
`
const SearchInput = styled.input`
    border: 1px solid black;
    border-radius: 3px;
    font-size: 20px;
    padding: 10px;
    min-width:200px;
`;
const SpinnerWrapper = styled.span`
    position:absolute;
    right:20px;
    top:10px;
`;
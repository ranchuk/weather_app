import {autoCompleteSearch} from './actions/autoCompleteAction';
import store from "./store";
import * as _ from 'lodash';


export const debounced = _.debounce((query)=>{
    return store.dispatch(autoCompleteSearch(query));
  },200)
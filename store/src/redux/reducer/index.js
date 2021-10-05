import {combineReducers} from 'redux';
import { productReducer } from './productReducer';


const reducers = combineReducer({

    allProducts:productReducer


})
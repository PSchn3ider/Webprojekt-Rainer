import data from './data';
import {createStore, creatStore} from 'redux';

const initialState = {};
const reducer = (state, action) => {
    return {products: data.products};
};

const store = createStore(reducer, initialState);

export default store;

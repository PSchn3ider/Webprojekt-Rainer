import axios, { Axios } from "axios";
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCESS } from "../constants/productConstants"

export const listProducts = () => async(dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    });
    try{
        const {data} = await axios.get('/api/products');
        dispatch({type: PRODUCT_LIST_SUCESS, payload: data});
    }catch(error){
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message});
    }
};

export const detailsProduct = (productId) => async(dispatch) => {
    dispatch({type: PRODUCT_DETAILS_REQUEST, payload: productId});
    try{
        const{data} = await axios.get(`/api/products/${productId}`);
        dispatch({type: PRODUCT_DETAILS_SUCESS, payload: data});

    }catch(error){
        dispatch({type: PRODUCT_DETAILS_FAIL, payload: error.response && error.response.data.message? error.response.data.message: error.message});
    }
};
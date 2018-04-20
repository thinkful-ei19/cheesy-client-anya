import {API_BASE_URL} from '../config'

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST'
export const fetchCheesesRequest = () => ({
    type: FETCH_CHEESES_REQUEST
});

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS'
export const fetchCheesesSuccess = (cheeses) => ({
    type: FETCH_CHEESES_SUCCESS,
    cheeses
});

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR'
const fetchCheesesError = (error) => ({
    type: FETCH_CHEESES_ERROR,
    error
});

//GET request
export const fetchCheeses = () => (dispatch) => {
    dispatch(fetchCheesesRequest());
    return fetch(`${API_BASE_URL}/cheeses`, {
        method: 'GET'
    })        
        .then(response => response.json())
        .then(response => dispatch(fetchCheesesSuccess(response)))
        .then(cheeses => console.log(cheeses))
        .catch(err => {
            dispatch(fetchCheesesError(err));
            console.log(err)
        })
};

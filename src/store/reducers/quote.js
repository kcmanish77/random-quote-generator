import * as _ from '../actions/actionTypes'


const initialState = {
    isLoading: true,
    error: null,
    quotes: []
};
export const quotes = (state=initialState, action) => {
    switch(action.type){
        case _.GET_RANDOM_QUOTE:
            return {...state, quotes:action.payload, isLoading: false, error: null}
        case _.RANDOM_QUOTE_LOADING:
            return {...state, isLoading: true}
        case _.RANDOM_QUOTE_FAILED:
            return {...state, isLoading: false, error: action.payload}
        default:
            return state;
    }
}
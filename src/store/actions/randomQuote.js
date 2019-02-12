import * as _ from './actionTypes';


export const quotesLoading = () => {
    return{
        type: _.RANDOM_QUOTE_LOADING
    }
}
export const getQuotes = (quotes) => {
    return {
        type: _.GET_RANDOM_QUOTE,
        payload: quotes
    }
}
export const quotesFetchFailed = (err) => {
    return {
        type: _.RANDOM_QUOTE_FAILED,
        payload: err
    }
}

export const fetchQuotes = () => dispatch => {
    dispatch(quotesLoading());
    return fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
        .then(response => {
            if(response.ok){
                return response;
            }
            else{
                var error = new Error('Error ' + response.status + ' : ' + response.statusText);
                error.message = response;
                throw error;
            }
        }, err =>{
            var error = new Error(err.message)
            throw error;
        })
        .then(response => response.json())
        .then(quotes => dispatch(getQuotes(quotes)))
        .catch(error => dispatch(quotesFetchFailed(error)))
}
import axios from "axios";

export const GET_YEAR = 'GET_YEAR'
export const SET_IS_LOADING = 'SET_IS_LOADING'
export const GET_STATES_SUCCESS = 'GET_STATES_SUCCESS'
export const GET_STATES_FAILURE = 'GET_STATES_FAILURE'

let urls = [
    'https://datausa.io/api/data?drilldowns=State&measures=Population&year=',
    'https://datausa.io/api/data?drilldowns=Nation&measures=Population&year='
]

export const getStatesData = (year) => dispatch => {
    dispatch(setIsLoading(true))
    dispatch(getYear(year))
    let tempArr = []
    let usStateObj = {
        usState: '',
        us: ''
    }
    axios.all(urls.map(url => axios.get(`${url}${year}`)))
        .then(responses => responses.forEach(resp => {
            tempArr.push(resp.data.data)
        }))
        .catch(errors => errors.forEach(err => {
            console.log(err)
        }))
        .finally(() => {
            usStateObj.usState = tempArr[0]
            usStateObj.us = tempArr[1]
            dispatch(getStatesSuccess(usStateObj))
            dispatch(setIsLoading(false))
        })
}

export const getYear = year => 
({
    type: GET_YEAR, payload: year
})

export const setIsLoading = isLoading => ({
    type: SET_IS_LOADING, payload: isLoading
})

export const getStatesSuccess = stateData => ({
    type: GET_STATES_SUCCESS, payload: stateData
})

export const getStatesFailure = error => ({
    type: GET_STATES_FAILURE, payload: error
})
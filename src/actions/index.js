import axios from "axios";

export const GET_YEAR = 'GET_YEAR'
export const SET_IS_LOADING = 'SET_IS_LOADING'
export const GET_STATES_SUCCESS = 'GET_STATES_SUCCESS'
export const GET_STATES_FAILURE = 'GET_STATES_FAILURE'

const baseStatesURL = 'https://datausa.io/api/data?drilldowns=State&measures=Population&year='
const baseNationURL = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population&year='

export const getStatesData = (year) => dispatch => {
    dispatch(setIsLoading(true))
    dispatch(getYear(year))
    axios.get(`${baseStatesURL}${year}`)
        .then(res => {
            console.log(res)
            dispatch(getStatesSuccess(res.data.data))
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => dispatch(setIsLoading(false)))
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
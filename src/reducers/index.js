import { GET_YEAR, GET_STATES_SUCCESS, SET_IS_LOADING, GET_STATES_FAILURE } from '../actions'

const initialState = {
    year: null,
    stateData: null,
    loading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_YEAR:
            console.log(action.payload)
            return { ...state, year: action.payload}
        case SET_IS_LOADING:
            return { ...state, loading: action.payload }
        case GET_STATES_SUCCESS:
            return { ...state, stateData: action.payload }
        case GET_STATES_FAILURE:
            return { ...state, error: action.payload }
        default:
            return (state)
    }
}
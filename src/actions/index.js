import axios from "axios";

export const GET_YEAR = 'GET_YEAR'

export const getYear = () => dispatch => {
    axios.get('https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}
import React from 'react';
import { connect } from 'react-redux'
import { getStatesData } from './actions'
import State from './components/State'
import './App.css';

let dropDownYears = ['--Select Year--' , 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]

const App = ({ getStatesData, year, loading, stateData, error }) => {
  return (
    <>
      <div className="App">
        <h1>Population Data Webpage</h1>
      </div>

      <div className='topContainer'>
        {
          <h3>{error ? `Error: ${error}`: ''}</h3>
        }

        {
          loading ? <h3>Loading in state data...</h3>
          : <h3 id='usPopulation'>{year !== '--Select Year--' && !!year ? `${year} United States Population: ${stateData.us[0].Population}`
          : 'Select a Year to See Population Data'}</h3>
        }
        
        <label htmlFor='years'></label>
        <select name='years' id='years' onChange={e => getStatesData(e.target.value)}>
          {dropDownYears.map(yearSelect => {
            return <option key={yearSelect} value={yearSelect}>{yearSelect}</option>
          })}
        </select>
        </div>

        {
          stateData && !!year && year !== '--Select Year--' ? 
        <div>
          <State />
        </div>
        : <div></div>
        }
    </>
  );
}

const mapStateToProps = state => {
  return {
    year: state.year,
    loading: state.loading,
    stateData: state.stateData,
    error: state.error
  }
}

export default connect(mapStateToProps, { getStatesData })(App);
import React from 'react';
import { connect } from 'react-redux'
import { getStatesData } from './actions'
import State from './components/State'
import './App.css';

let dropDownYears = ['--Select Year--' , 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021]

const App = ({ getStatesData, year, loading, stateData }) => {
  return (
    <>
      <div className="App">
        <h1>Population Data Webpage</h1>
      </div>

      <div>
        {
        loading ? <h3>Loading in state data...</h3>
        : <h3>{year !== '--Select Year--' && !!year ? `${year} United States Population: `
        : 'Select a Year to See Population Data'}</h3>
        }
        
        <label htmlFor='years'></label>
        <select name='years' id='years' onChange={e => getStatesData(e.target.value)}>
          {dropDownYears.map(yearSelect => {
            return <option key={yearSelect} value={yearSelect}>{yearSelect}</option>
          })}
        </select>

        {
          stateData && !!year && year !== '--Select Year--' ? 
        <div className='stateContainer'>
          <State />
        </div>
        : <div></div>
        }
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    year: state.year,
    loading: state.loading,
    stateData: state.stateData
  }
}

export default connect(mapStateToProps, { getStatesData })(App);
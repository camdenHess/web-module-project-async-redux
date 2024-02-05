import React from 'react'
import { connect } from 'react-redux'
import '../App.css'

let id = 0

const State = ({ stateData }) => {

    return (
        <>
            <div className='statesContainer'>
                {stateData.usState.map(usState => {
                    return (
                        <div key={id++} className='state'>
                            <h4 className='stateName'>{usState.State}</h4>
                            <h6>POPULATION:</h6>
                            <h4>{usState.Population}</h4>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        stateData: state.stateData
    }
}

export default connect(mapStateToProps)(State)
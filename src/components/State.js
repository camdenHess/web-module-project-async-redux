import React from 'react'
import { connect } from 'react-redux'


const State = ({ stateData }) => {

    return (
        <>
            <div className='state'>
                <h4>STATE</h4>
                <h6>POPULATION:</h6>
                <h4>1,000,000</h4>
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
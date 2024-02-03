import React from 'react'
import { connect } from 'react-redux'


const State = () => {
    // if(loading) {
    //     return <h2>Loading in population data...</h2>
    // }

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

export default State
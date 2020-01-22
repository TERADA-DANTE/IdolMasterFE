import React from 'react'
import HistoryList from './HistoryList'
import '../assets/css/Right.css'

function Right(props) {
    return (
        <div className='right stickyRight'>
            <div className='rightContent'>
                <div className='alert alert-primary text-center'>Recent search</div>
                <ul className='list-group list-group-flush text-center' onClick={props.handleClick}>
                    {props.history ? < HistoryList handleClick={props.handleClick} history={props.history} /> : null}
                </ul>
            </div>
        </div >
    )
}

export default Right
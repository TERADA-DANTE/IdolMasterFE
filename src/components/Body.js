import React from 'react'
import UserInfo from './UserInfo'
import UserResult from './UserResult'
import '../assets/css/Body.css'

function Body(props) {
    const data = props.data
    return (
        <div className='body'>
            < UserInfo profileImg={data.profileImg} profileDesc={data.profileDesc} />
            < UserResult rowToShow={data.rowToShow} onButton={props.onButton} userResult={data.userResult} />
        </div>
    )
}

export default Body;
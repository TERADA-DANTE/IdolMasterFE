import React from 'react'
import '../assets/css/HistoryList.css'

function HistoryList(props) {
    const historyList = props.history.data.map((s) => {
        return (
            <li className='history' key={s}>
                <i className='historyItem'>{s}</i>
            </li>
        )
    })
    return (
        <ul className='list-group list-group-flush text-center' onClick={props.handleClick}>
            {historyList}
        </ul>
    )
}
export default HistoryList
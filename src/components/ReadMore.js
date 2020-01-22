import React from 'react'
import '../assets/css/ReadMore.css'

function ReadMore(props) {
    return (
        <div className='text-center readMore' onClick={props.onButton}>
            もっと見る <i className="fas fa-caret-square-down" />
        </div>
    )
}

export default ReadMore
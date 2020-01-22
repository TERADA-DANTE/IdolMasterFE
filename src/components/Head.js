import React from 'react';
import HeadForm from './HeadForm'
import '../assets/css/Head.css'

function Head(props) {
    return (
        <div className='head'>
            <div className="container">
                <div className='border-top' />
                < HeadForm onSubmit={props.onSubmit} onChange={props.onChange} />
            </div>
        </div>
    )
}

export default Head
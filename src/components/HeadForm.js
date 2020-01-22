import React from 'react'

const HeadForm = (props) => {
    return (
        <form onSubmit={props.onSubmit} className='mx-auto wrapper-head'>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text" minLength='1' maxLength='15' onChange={props.onChange} className="form-control text-input" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" pattern='[A-Za-z0-9_]{1,15}' />
            </div>
            <div />
            <div>
                <button type='submit' className="btn btn-info btn-block form-submit-btn"><i className="fab fa-twitter"></i></button>
            </div>
        </form>
    )
}

export default HeadForm
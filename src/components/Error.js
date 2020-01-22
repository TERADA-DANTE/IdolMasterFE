import React from 'react'

function Error(props) {
    switch (props.statusCode) {
        // 보호 계정
        case 401:
            return (
                <div className='container'>
                    <div className="alert alert-primary text-center">
                        <span className='font-weight-bold'>{`@${props.name}`}</span><span className='text-secondary'>は保護されているアカウントです <span role='img' aria-label='emoji'>🔒</span></span>
                    </div>
                </div>
            )
        // 없는 계정
        case 404:
            return (
                <div className='container'>
                    <div className="alert alert-danger text-center">
                        <span className='font-weight-bold'>{`@${props.name}`}</span>
                        <span className='text-secondary'>は存在しないアカウントです <span role='img' aria-label='emoji'>🙅🏼‍♂️</span></span>
                    </div>
                </div>
            )
        // 트윗이 없는 계정
        case 999:
            return (
                <div className='text-center'>
                    <div class="alert alert-warning text-center">
                        <span className='font-weight-bold'>{`@${props.name}`}</span>
                        <span className='text-secondary'>はまだ投稿していません <span role='img' aria-label='emoji'>🧙🏼‍♂️</span></span>
                    </div>
                </div>
            )
        default:
            return null
    }
}

export default Error
import React from 'react';
import '../assets/css/Title.css'
import Twitter from '../assets/icons/twitter.svg'
function Title() {
    return (
        <div className='title'>
            <div className='container'>
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand" onClick={() => { window.location.reload() }}>
                        <img src={Twitter} width="30" height="30" className="d-inline-block align-top" alt="twitter" />
                        {' '}Twitter 画像 取得 サイト
                    </span>
                </nav>
            </div>
        </div >
    )
}

export default Title
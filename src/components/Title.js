import React from 'react';
import '../assets/css/Title.css'

function Title() {
    return (
        <div className='title'>
            <div className='container'>
                <nav className="navbar navbar-light bg-light">
                    <span className="navbar-brand" onClick={() => { window.location.reload() }}>
                        <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                        Twitter 画像 取得 サイト
                    </span>
                </nav>
            </div>
        </div >
    )
}

export default Title
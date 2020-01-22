import React from 'react'
import '../assets/css/Topbar.css'

function Topbar() {
    return (
        <div className='top sticky-top'>
            <div className='container text-center' onClick={() => { window.scrollTo(0, 0) }}>
                <div className='topbar'>
                    <span>Topへ戻る</span>
                </div>
            </div>
        </div>
    )
}

export default Topbar
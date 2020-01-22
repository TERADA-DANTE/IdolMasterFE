import React from 'react'

function Nav() {
    return (
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" id="pills-photo-tab" data-toggle="pill" href="#pills-photo" role="tab" aria-controls="pills-photo" aria-selected="true">画像</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="pills-video-tab" data-toggle="pill" href="#pills-video" role="tab" aria-controls="pills-video" aria-selected="false">動画</a>
            </li>
        </ul>
    )
}

export default Nav
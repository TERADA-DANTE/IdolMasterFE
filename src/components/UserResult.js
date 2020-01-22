import React from 'react'
import Nav from './Nav'
import EndOfResult from './EndOfResult'
import ReadMore from './ReadMore'

import '../assets/css/UserResult.css'

function UserResult(props) {
    return (
        <div className='userResult'>
            <div className='container'>
                <div className='border-top' />
                < Nav />
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-photo" role="tabpanel" aria-labelledby="pills-photo-tab">
                        <RenderResult isPhoto={true} rowToShow={props.rowToShow} onButton={props.onButton} userResult={props.userResult} />
                    </div>
                    <div className="tab-pane fade" id="pills-video" role="tabpanel" aria-labelledby="pills-video-tab">
                        <RenderResult isPhoto={false} rowToShow={props.rowToShow} onButton={props.onButton} userResult={props.userResult} />
                    </div>
                </div>
                <div className='border-bottom' />
            </div>
        </div >
    )
}

function RenderResult(props) {
    // 이미지 or 비디오 렌더링
    // 루프 안에서 익명 함수 선언 불가하므로 아래 핸들오픈 추가
    function handleOpen(e) {
        // 이벤트 핸들러 뽑아서 값 전달 _self 같은
        window.open(e.target[Object.keys(e.target)[1]].value)
    }
    // 이미지 렌더링
    if (props.isPhoto) {
        const imgArr = props.userResult.userResultImage
        // 원하는row 까지만
        const imgArrFiltered = imgArr.filter(function (s, idx) {
            return 0 <= idx && idx < (props.rowToShow) * 2
        })
        const result = imgArrFiltered.map((s) => {
            return (
                <div key={s} className='item'>
                    <img alt={s} src={s} value={s} className='itemContent' onClick={handleOpen} />
                </div>
            )
        })
        return (
            <div>
                <div className='wrapper-userResult'>{result}</div>
                {imgArr.length > props.rowToShow * 2 ? <ReadMore onButton={props.onButton} /> : <EndOfResult />}
            </div>
        )
    }
    // 비디오 렌더링
    else if (!props.isPhoto) {
        //
        const vidArr = props.userResult.userResultVideo
        // 원하는row 까지만
        const vidArrFiltered = vidArr.filter(function (s, idx) {
            return 0 <= idx && idx < (props.rowToShow) * 2
        })
        const result = vidArrFiltered.map((s) => {
            return (
                <div key={s} className='item'>
                    <img alt={s[0]} src={s[0]} value={s[1]} className='itemContent' onClick={handleOpen} />
                    <i className="far fa-play-circle" value={s[1]} onClick={handleOpen} />
                </div>
            )
        })
        return (
            <div>
                <div className='wrapper-userResult'>
                    {result}
                </div>
                {vidArr.length > props.rowToShow * 2 ? <ReadMore onClick={props.onButton} /> : <EndOfResult />}
            </div>
        )
    }
}


export default UserResult
import React from 'react'
import '../assets/css/UserInfo.css'
import { ReactComponent as VerifiedLogo } from '../assets/icons/verified.svg'

function UserInfo(props) {
    return (
        <div className='userInfo'>
            <div className='container'>
                <div className='border-top' />
                <div className='wrapper-userInfo'>
                    <a href={`https://twitter.com/${props.profileDesc.screen_name}`} target='blank'>
                        <img className="profileImg" src={`${props.profileImg}`} alt={`${props.profileDesc.name}_profileImg`} />
                    </a>
                    <div />
                    <div className='profileDesc'>
                        <span><h3 className='userName'>{props.profileDesc.name} {props.profileDesc.isVerified ? <VerifiedLogo width='25' height='25' /> : null}</h3></span>
                        <h4 style={{ color: '#6b6b6b' }}>@{props.profileDesc.screen_name}</h4>
                        <span> {props.profileDesc.description}</span><br />
                        <span className='font-weight-bold'>{props.profileDesc.following}</span> <span className='text-secondary'>Following</span><br />
                        <span className='font-weight-bold'>{props.profileDesc.follower}</span> <span className='text-secondary'>Followers</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo
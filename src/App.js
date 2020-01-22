import React from 'react'
import './App.css'
import Right from './components/Right'
import Topbar from './components/Topbar'
import Title from './components/Title'
import Head from './components/Head'
import Loading from './components/Loading'
import Body from './components/Body'
import Error from './components/Error'
import Footer from './components/Footer'

class App extends React.Component {
  constructor(props) {
    super(props)
    // 함수 링크
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleButton = this.handleButton.bind(this)
    this.handleClick = this.handleClick.bind(this)
    // 환경 스테이트 설정
    this.state = {
      inputText: '',
      name: '',
      profileImg: null,
      profileDesc: {},
      userResult: {},
      isShow: false,
      isLoading: false,
      rowToShow: 5,
      isError: false,
      statusCode: null,
      history: null
    }
  }
  // 히스토리용 비동기 마운팅
  componentDidMount() {
    // Right history asynchronous update
    const setState = this.setState.bind(this)
    fetch('https://cors-anywhere.herokuapp.com/https://terada.herokuapp.com/', {
      method: 'GET',
      headers: { 'content-type': 'application/json' }
    }).then(res => res.json())
      .then(function (res) {
        setState({
          history: res
        })
      })
  }
  // 입력폼 핸들
  handleChange(e) {
    this.setState({
      inputText: e.target.value
    })
  }
  // 히스토리 클릭 - GET
  handleClick(e) {
    e.preventDefault()
    const name = e.target[Object.keys(e.target)[1]].children
    if (this.state.name !== name) {
      this.setState({
        name: name,
        isLoading: true
      })
      fetch(`https://cors-anywhere.herokuapp.com/https://terada.herokuapp.com?q=${encodeURIComponent(JSON.stringify({ data: name }))}`)
        .then(response => response.json())
        .catch(() => {
          console.log('Error!')
          this.setState({
            isLoading: false,
            isError: true,
            isShow: true
          })
          throw Error
          // 코드 실행 중지 .catch 불완전
        })
        .then(response => {
          if (response.data.statusCode === 200) {
            this.setState({
              statusCode: 200,
              profileImg: response.data.userInfo.profileImg,
              profileDesc: {
                name: response.data.userInfo.profileDesc.name,
                screen_name: response.data.userInfo.profileDesc.screen_name,
                description: response.data.userInfo.profileDesc.description,
                follower: response.data.userInfo.profileDesc.follower,
                following: response.data.userInfo.profileDesc.following,
                isVerified: response.data.userInfo.profileDesc.verified
              },
              userResult: {
                userResultImage: response.data.userResult.userResultImage,
                userResultVideo: response.data.userResult.userResultVideo,
              },
              isShow: true,
              isLoading: false,
              isError: false
            })
          }
          else if (response.data.statusCode === 401) {
            // 401 인증 오류 => 비밀 계정
            this.setState({
              statusCode: 401,
              isShow: true,
              isLoading: false
            })
          }
          else if (response.data.statusCode === 404) {
            // 404 페이지 존재 안함 => 존재하지 않는 사용자    
            this.setState({
              statusCode: 404,
              isShow: true,
              isLoading: false
            })
          }
          else if (response.data.statusCode === 999) {
            // 999 => 존재하는 사용자, 트윗을 하지 않음
            this.setState({
              statusCode: 999,
              isShow: true,
              isLoading: false
            })
          }
        })
    }
  }
  // 폼 입력 - POST
  handleSubmit(e) {
    e.preventDefault()
    if (this.state.name !== this.state.inputText) {
      this.setState({
        name: this.state.inputText,
        isLoading: true
      })
      fetch('https://cors-anywhere.herokuapp.com/https://terada.herokuapp.com/', {
        // Heroku supports cors proxy server, Holy shit!
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ data: this.state.inputText })
        // setState lag 때문에 inputText로 보냄

      }).then(response => response.json())
        .catch(() => {
          console.log('Error!')
          this.setState({
            isLoading: false,
            isError: true,
            isShow: true
          })
          throw Error
          // 코드 실행 중지 .catch 불완전
        })
        .then(response => {
          if (response.data.statusCode === 200) {
            this.setState({
              statusCode: 200,
              profileImg: response.data.userInfo.profileImg,
              profileDesc: {
                name: response.data.userInfo.profileDesc.name,
                screen_name: response.data.userInfo.profileDesc.screen_name,
                description: response.data.userInfo.profileDesc.description,
                follower: response.data.userInfo.profileDesc.follower,
                following: response.data.userInfo.profileDesc.following,
                isVerified: response.data.userInfo.profileDesc.verified
              },
              userResult: {
                userResultImage: response.data.userResult.userResultImage,
                userResultVideo: response.data.userResult.userResultVideo,
              },
              isShow: true,
              isLoading: false,
              isError: false
            })
          }
          else if (response.data.statusCode === 401) {
            // 401 인증 오류 => 비밀 계정
            this.setState({
              statusCode: 401,
              isShow: true,
              isLoading: false
            })
          }
          else if (response.data.statusCode === 404) {
            // 404 페이지 존재 안함 => 존재하지 않는 사용자    
            this.setState({
              statusCode: 404,
              isShow: true,
              isLoading: false
            })
          }
          else if (response.data.statusCode === 999) {
            // 999 => 존재하는 사용자, 트윗을 하지 않음
            this.setState({
              statusCode: 999,
              isShow: true,
              isLoading: false
            })
          }
        })

    }
  }
  // ReadMore
  handleButton() {
    this.setState({
      rowToShow: this.state.rowToShow + 5
    }
    )
  }

  render() {
    // Default
    if (!this.state.isShow) {
      return (
        <div className='wrapper-main'>
          <div className="App">
            < Title />
            < Head onChange={this.handleChange} onSubmit={this.handleSubmit} />
            {this.state.isLoading ? <Loading /> : null}
          </div>
          < Right handleClick={this.handleClick} history={this.state.history} />
        </div>
      )
    }
    // Search 
    else {
      if (this.state.statusCode === 200) {
        const data = {
          profileImg: this.state.profileImg,
          profileDesc: this.state.profileDesc,
          userResult: this.state.userResult,
          rowToShow: this.state.rowToShow,
          isVerified: this.state.isVerified
        }
        return (
          <div className='wrapper-main'>
            <div className="App">
              < Topbar />
              < Title />
              < Head onChange={this.handleChange} onSubmit={this.handleSubmit} />
              {this.state.isLoading ? < Loading /> : null}
              < Body data={data} onButton={this.handleButton} />
              < Footer />
            </div>
            < Right handleClick={this.handleClick} history={this.state.history} />
          </div>
        )
      }
      else {
        return (
          <div className='wrapper-main'>
            <div className="App">
              < Title />
              < Head onChange={this.handleChange} onSubmit={this.handleSubmit} />
              {this.state.isLoading ? < Loading /> : null}
              < Error statusCode={this.state.statusCode} name={this.state.name} />
            </div>
            < Right handleClick={this.handleClick} history={this.state.history} />
          </div>
        )
      }
    }
  }
}

export default App

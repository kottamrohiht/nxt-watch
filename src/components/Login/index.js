import {Redirect} from 'react-router-dom'
import {Component} from 'react'

import Cookies from 'js-cookie'

import {
  MainContainer,
  Form,
  UsernameContainer,
  Label,
  Input,
  ShowpasswordContainer,
  InputCheckbox,
  LoginButton,
  ImgContainer,
  LoginImg,
  ErrorContainer,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showErrMsg: false,
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    const inputType = showPassword ? 'text' : 'password'

    return (
      <UsernameContainer>
        <Label htmlFor="password"> PASSWORD </Label>
        <Input
          onChange={this.onChangePassword}
          id="password"
          type={inputType}
          value={password}
          palceholder="Password"
          palceholderTextColor="black"
        />
      </UsernameContainer>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <UsernameContainer>
        <Label htmlFor="username"> USERNAME </Label>
        <Input
          onChange={this.onChangeUsername}
          id="username"
          type="text"
          value={username}
          palceholder="Username"
          palceholderTextColor="black"
        />
      </UsernameContainer>
    )
  }

  renderShowPasswordFiled = () => (
    <ShowpasswordContainer>
      <InputCheckbox
        onClick={this.onClickShowPassword}
        id="swow-password"
        type="checkbox"
      />
      <Label showPassword htmlFor="swow-password">
        Show Password
      </Label>
    </ShowpasswordContainer>
  )

  renderImg = () => {
    const imgUrl =
      'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

    return (
      <ImgContainer>
        <LoginImg src={imgUrl} alt="login" />
      </ImgContainer>
    )
  }

  loginSuccesss = () => {
    const {history} = this.props
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userObj = {username, password}
    const userUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userObj),
    }

    const response = await fetch(userUrl, options)
    if (response.ok) {
      const data = await response.json()
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      this.loginSuccesss()
    } else {
      this.setState({
        showErrMsg: true,
      })
    }
  }

  render() {
    const {showErrMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <MainContainer>
        <Form onSubmit={this.onSubmitForm}>
          {this.renderImg()}
          {this.renderUsernameField()}
          {this.renderPasswordField()}
          {this.renderShowPasswordFiled()}
          <LoginButton type="submit"> Login </LoginButton>
          <ErrorContainer>
            {showErrMsg && (
              <ErrorMsg> *Username and Password didn&apos;t match </ErrorMsg>
            )}
          </ErrorContainer>
        </Form>
      </MainContainer>
    )
  }
}

export default Login

import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

const websiteLogInForm = 'https://assets.ccbp.in/frontend/react-js/logo-img.png'

class LoginForm extends Component {
  state = {username: '', password: '', isError: false, errorMsg: ''}

  onChangeUsername = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({isError: true, errorMsg})
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, isError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-bg-container">
        <form className="card-login" onSubmit={this.onSubmitLoginForm}>
          <img
            src={websiteLogInForm}
            className="card-logo"
            alt="website logo"
          />

          <label htmlFor="username" className="label">
            USERNAME
          </label>
          <input
            type="text"
            id="username"
            value={username}
            placeholder="Username"
            className="input-element"
            onChange={this.onChangeUsername}
          />
          <label htmlFor="password" className="label">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="input-element"
            value={password}
            onChange={this.onChangePassword}
          />
          <button type="submit" className="submit-button">
            Login
          </button>
          {isError && <p className="error-message">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm

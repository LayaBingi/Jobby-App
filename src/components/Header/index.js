/* eslint-disable react/button-has-type */
import {Link, withRouter} from 'react-router-dom'
import {ImHome} from 'react-icons/im'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import './index.css'

const websiteLogo = 'https://assets.ccbp.in/frontend/react-js/logo-img.png'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="nav-container">
      <ul className="nav-ul-container">
        <li className="logo-container">
          <Link className="link" to="/">
            <img className="logo" src={websiteLogo} alt="website logo" />
          </Link>
        </li>

        <ul className="home-job-container">
          <li>
            <Link className="link" to="/">
              <ImHome className="home-icon" />
              <h1 className="nav-text">Home</h1>
            </Link>
          </li>

          <li>
            <Link className="link" to="/jobs">
              <h1 className="nav-text">Jobs</h1>
              <h1 className="jobs-text"> Jobs</h1>
            </Link>
          </li>
        </ul>

        <FiLogOut className="home-icon" onClick={onClickLogout} />
        <button type="button" className="logout-button" onClick={onClickLogout}>
          Logout
        </button>
      </ul>
    </nav>
  )
}

export default withRouter(Header)

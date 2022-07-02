import React, { Component } from 'react'
import Outernavbar from './outernavbar.component'
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            email: '',
            password: '',
        }
    }

    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const userObject = {
            email: this.state.email,
            password: this.state.password
        };
        axios.post('http://127.0.0.1:8000/api/auth/login', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        this.setState({ email: '', password: ''})
    }

  render() {
    return (
        <div className='App'>
            <Outernavbar/>
            <div className="auth-wrapper">
          <div className="auth-inner">
      <form onSubmit={this.onSubmit}>
        <h3>Sign In</h3>
        <p className="forgot-password text-right">
          Don't have account <a href="/sign-up">join us?</a>
        </p>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={this.onChangeUserEmail}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={this.onChangePassword}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary"  >
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot password?
        </p>
      </form>
      </div>
      </div>
      </div>
    )
  }
}
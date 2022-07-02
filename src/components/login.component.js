import React, { Component } from 'react'
import Outernavbar from './outernavbar.component'

export default class Login extends Component {
  render() {
    return (
        <div className='App'>
            <Outernavbar/>
            <div className="auth-wrapper">
          <div className="auth-inner">
      <form>
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
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
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
          <a type="submit" className="btn btn-primary" href="/dashboard" >
            Submit
          </a>
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
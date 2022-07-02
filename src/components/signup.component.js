import React, { Component } from 'react'
import Outernavbar from './outernavbar.component'
import axios from 'axios';

export default class SignUp extends Component {

    constructor(props) {
        super(props)
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePasswordConfirmation = this.onChangePasswordConfirmation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            first_name: '',
            last_name: '',
            phone: '',
            email: '',
            password: '',
            password_confirmation: '',
        }
    }
    onChangeFirstName(e) {
        this.setState({ first_name: e.target.value })
    }
    onChangeLastName(e) {
        this.setState({ last_name: e.target.value })
    }
    onChangePhone(e) {
        this.setState({ phone: e.target.value })
    }
    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }
    onChangePasswordConfirmation(e) {
        this.setState({ password_confirmation: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const userObject = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            phone: this.state.phone,
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,
        };
        axios.post('http://127.0.0.1:8000/api/auth/register', userObject)
            .then((res) => {
                console.log(res.data)
                if(res.data.message === "User successfully registered"){
                    alert("Registration Successfull")
                    window.location = "/sign-in";
                }
            }).catch((error) => {
                console.log(error)
            });
        this.setState({ first_name: '', last_name: '', phone: '', email: '', password: '', password_confirmation: '' })
    }


  render() {
    return (
        <div className='App'>
        <Outernavbar/>
        <div className="auth-wrapper">
      <div className="auth-inner">
      <form onSubmit={this.onSubmit}>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={this.onChangeFirstName}
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" onChange={this.onChangeLastName} />
        </div>
        <div className="mb-3">
          <label>Phone Number</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter phone number"
            onChange={this.onChangePhone}
          />
        </div>
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
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={this.onChangePasswordConfirmation}
          />
        </div>
        <div className="d-grid">
        <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
      </div>
      </div>
      </div>
    )
  }
}
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Logout extends Component {
    constructor(props) {
        super(props)
        localStorage.removeItem("user")
    }
  render() {
    return (
      <div>
        <h1>You have been logged-out</h1>
        <Link to="/sign-in">Login again</Link>
      </div>
    )
  }
}

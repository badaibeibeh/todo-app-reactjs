import React, { Component } from 'react'
import Register from './register'
import Login from './login'

export default class Publict extends Component {
  render() {
      console.log(this.props)
    return (
      <div>
        <Register  />
        <Login history={this.props.history} />
      </div>
    )
  }
}

import React, { Component } from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {Grid, Col, Row }  from 'react-bootstrap';

import './style.css';


export default class register extends Component {
  // constructor() {
  // super();
  // this.state = {
  state = {
    name : '',
    username : '',
    email : '',
    password : ''
  }

  handleName(text) {
    this.setState({ name: text.target.value })
  }

  handleUserName(text) {
    this.setState({ username: text.target.value })
  }

  handleEmail(text) {
    this.setState({ email: text.target.value })
  }

  handlePassword(text) {
    this.setState({ password: text.target.value })
  }

  submitRegister(e) {
    console.log(this.state)
    e.preventDefault()

    fetch('https://Todoappsaja.herokuapp.com/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
  })
}
  render() {
    console.log(this.state)
    return (
      <div className="registerDiv">
        
        <h4>Register</h4>
        
        <Form onSubmit={(e) => this.submitRegister(e)}>
          <Row>
            <Col>
              <Form.Control 
                placeholder="name" 
                name="name" 
                value={this.state.nameValue} 
                onChange={(text) => { this.handleName(text) }}
                required
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Control 
                placeholder="username" 
                name="userName"
                value={this.state.userNameValue}
                onChange={(text) => { this.handleUserName(text) }}
                required
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Control 
                placeholder="email" 
                name="email"
                value={this.state.emailValue}
                onChange={(text) => { this.handleEmail(text) }}
                required
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Control 
                placeholder="password (minimum 5 characters)"
                name="password"
                type="password"
                value={this.state.passwordValue}
                onChange={(text) => { this.handlePassword(text) }}
                required
              />
            </Col>

          </Row>

        </Form><br/>

        <ButtonToolbar>
          <Button type="Submit" variant="primary">Register</Button>
        </ButtonToolbar>

        {/* <form onSubmit={(e) => this.submitRegister(e)}> */}
          {/* <input placeholder="name"
            name="name"
            value={this.state.nameValue}
            onChange={(text) => { this.handleName(text) }}
            required
          /><br/> */}

          {/* <input placeholder="username"
            name="userName"
            value={this.state.userNameValue}
            onChange={(text) => { this.handleUserName(text) }}
            required
          /><br/> */}

          {/* <input placeholder="email"
            name="email"
            value={this.state.emailValue}
            onChange={(text) => { this.handleEmail(text) }}
            required
          /><br/> */}

          {/* <input placeholder="password (minimum 5 character)"
            name="password"
            type="password"
            value={this.state.passwordValue}
            onChange={(text) => { this.handlePassword(text) }}
            required
          /><br/> */}
          {/* <button type="submit">Register</button> */}
        {/* </form> */}

      </div>
    )
  }
}
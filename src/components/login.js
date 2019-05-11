import React, { Component } from 'react'
import './style.css';
import {ButtonToolbar, Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {Grid, Col, Row }  from 'react-bootstrap';

export default class login extends Component {
  state = {
    username: '',
    password: ''
  }

  handleUsername(text) {
    this.setState({ username: text.target.value })
  }

  handlePassword(text) {
    this.setState({ password: text.target.value })
  }

  submitLogin(e) {
    console.log(this.state)
    e.preventDefault()

    fetch('https://Todoappsaja.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(
        { ...this.state }
      )        
    })
    //promise
    .then((response) => {
      if(response.ok){
      return response.json();    
      }
      else{
          throw response;
      }
      
  })
  .catch(err =>{
     console.log(err)
      })

    .then( responseJson => {
      this.setState({
        activity : ''  
      })
      localStorage.setItem("id", responseJson.token)
      this.props.history.push("/user")
    })   

  }

  render() {
    console.log(this.props)
    return (
      <div className="loginDiv">
        <h4>Log In</h4>

        <Form onSubmit={(e) => this.submitLogin(e)}>
          <Row>
            <Col>
              <Form.Control 
                placeholder="username"
                value={this.state.username}
                onChange={(text) => { this.handleUsername(text) }}
                required
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Control 
                placeholder="password"
                type="password"
                value={this.state.password}
                onChange={(text) => { this.handlePassword(text) }}
                required
              />
            </Col>
          </Row>
          <br></br>
            <Button>Login</Button>

        </Form>
        {/* 
        <ButtonToolbar>
          <Button>Login</Button>
        </ButtonToolbar> */}

        {/* <form onSubmit={(e) => this.submitLogin(e)}> */}
          {/* <input
            placeholder="username"
            value={this.state.username}
            onChange={(text) => { this.handleUsername(text) }}
            required
          /> */}

          {/* <input
            placeholder="password"
            type="password"
            value={this.state.password}
            onChange={(text) => { this.handlePassword(text) }}
            required
          /> */}
          {/* <button>Login</button> */}
        {/* </form> */}

      </div>
    )
  }
}

import React, { Component } from 'react'
import './style.css';

export default class addList extends Component {
  state = {
    activity: ""
  }

  handleActivity(text) {
    this.setState({ activity: text.target.value })
  }

  submitActivity(e) {
    console.log(this.state.activity)
    e.preventDefault()
    let token = localStorage.getItem("id")
    fetch('https://Todoappsaja.herokuapp.com/user/createactivity', {
      
      method: 'POST',
      headers: {
        'token-access': token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    })
      .then(e => {
        fetch('https://Todoappsaja.herokuapp.com/user/showactivity', {
          method: 'GET',
          headers: {
            'token-access': token,
            'Content-Type': 'application/json',
          },
        })
          .then(res => res.json())
          .then(res => {
            // this.setState({
            //   data: res.data
            // })
            window.location.reload()
            console.log("addlist",res)
          })
      })
  }

  render() {
    console.log(this.state)
    return (
      <div className='addlistdiv'>
        <h1 >What should we do next?</h1>
        <form onSubmit={(e) => this.submitActivity(e)}>
          <input
            value={this.state.activity}
            onChange={(text) => { this.handleActivity(text) }}
            required className="inputBox"
          />
          <button type="submit">+</button>
        </form>
      </div>
    )
  }
}

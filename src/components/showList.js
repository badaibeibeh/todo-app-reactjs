import React, { Component } from 'react'
// import './style.css';
export default class showList extends Component {

  state = {
    data: []
  }

  // componentWillMount(){
  //   this.fetchActivity()
  // }

  componentDidMount() {
    let token = localStorage.getItem("id")
    fetch('https://Todoappsaja.herokuapp.com/user/showactivity', {
      method: 'GET',
      headers: {
        'token-access': token,
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.list
        })
        console.log(this.state.data)
      })

  }

  handleDelete(id) {
    console.log(id)
    let token = localStorage.getItem("id")
    fetch('https://Todoappsaja.herokuapp.com/user/deleteactivity', {
      method: "DELETE",
      headers: {
        'token-access': token,
        'Content-Type': 'application/json'
      },
        
      body: JSON.stringify({
        'id': id
      })
    })
    .then(res => {
        // this.setState({
        //   data: res.data
        // })
        window.location.reload()
        console.log("addlist",res)
    })
  }

  render() {
    console.log("data",this.state.data)
    return (
      <div>
        {/* <div className="todoactivitytestcontainer">
          <h2>Things need to be done!</h2>
        </div> */}
        {this.state.data.map(item => (
          <div key={item._id}>{item.activity}
            <button type="delete" onClick={() => this.handleDelete(item._id)}>x</button>
          </div>
        ))}
      </div>
    )
  }
}

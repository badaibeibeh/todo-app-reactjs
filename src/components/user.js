import React, { Component } from 'react'
import ShowList from './showList';
import AddList from './addList';
import Logout from './Logout';

export default class user extends Component {
  render() {
    return (
      <div>
        <div>
            <AddList />
            <ShowList />
        </div>
        <br/>
        <br/>
        <br/>
        <div>
            <Logout />
        </div>
      </div>
    )
  }
}

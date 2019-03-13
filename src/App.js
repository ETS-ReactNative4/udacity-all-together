import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from "./UserInput.js"
import ListOfUsers from "./ListOfUsers.js"

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
constructor(props){
super(props)
this.addUser = this.addUser.bind(this);
this.updateShow = this.updateShow.bind(this);
}

state = {users:[], show: false}

addUser = newUser => {
const check = this.state.users.filter(user=>user.username === newUser.username);
if (check.length === 0) {
this.updateShow(false);
this.setState(prevState=>{prevState.users.push(newUser)})
} else {
this.updateShow(true);
}
}

updateShow = (value)=>{
this.setState({
show: value
})
}

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
    	<User username={this.usernames} newUser={this.newUser} addUser={this.addUser}/>
		{this.state.show && (<div><p className="red">Choose a different Username</p></div>)}
		<ListOfUsers state={this.state}/>
      </div>
    );
  }
}

export default App;

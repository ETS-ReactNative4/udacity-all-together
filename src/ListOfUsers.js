import React, {Component} from "react";
import "./ListOfUsers.css"

class ListOfUsers extends Component {
constructor(props){
super(props)
this.pressButton = this.pressButton.bind(this);
this.updateState = this.updateState.bind(this);
}

state = {}

updateState = (value, user) => {
this.setState(prevState=>{
return prevState[user] = value
}, console.log(this.state))
}

pressButton = (event, user) =>{
event.preventDefault();
if(this.state[user]) {
this.updateState(false, user)
this.forceUpdate()
} else {
this.updateState(true, user)
}
}

render(){
return(
  <ul>
  {this.props.state.users.map(user=><li key={user.username}> <span>{user.username}</span> {this.state[user.username] && <span > Games Played: {user.numberOfGames}</span>}<button onClick={(event)=>this.pressButton(event, user.username)}>Show Games Played</button></li>)}
  </ul>
)
}
}

export default ListOfUsers;
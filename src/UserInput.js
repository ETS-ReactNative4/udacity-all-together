import React, {Component} from "react";
import "./UserInput.css"

class User extends Component {
constructor(props){
super(props)
this.clearInput = this.clearInput.bind(this)
this.itIsValid = this.itIsValid.bind(this)
this.handleBlur = this.handleBlur.bind(this)
}

  state = {
  username : "",
  firstName : "",
  lastName : "",
  numberOfGames: 0,
    touched: {
    	username : false,
  		firstName : false,
  		lastName : false,
    }
  	}

itIsValid = () =>{
const {username, firstName, lastName} = this.state;
return username && firstName && lastName;
}

validation = () =>{
return {
username : this.state.username.length === 0,
firstName : this.state.firstName.length === 0,
lastName : this.state.lastName.length === 0,
}
};

handleBlur = inputField => event => {
this.setState({
touched: {...this.state.touched, [inputField]: true}
})
}

createUser = event => {
if(!this.itIsValid) {
event.preventDefault();
return;
}
event.preventDefault();
  const user = {
  username : this.state.username,
  firstName : this.state.firstName,
  lastName : this.state.lastName,
  numberOfGames: this.state.numberOfGames,
  }
  this.props.addUser(user)
  this.clearInput()
}

clearInput = () =>{
this.setState(()=>{return{
 username : "",
  firstName : "",
  lastName : "",
}})
}
  
updateUser = event => {
const {name, value} = event;
this.setState(currState=>{
  return {[name]: value}
})
}



 render(){
 const show = this.itIsValid();
 const errors = this.validation();
 const isEnabled = Object.keys(errors).some(key => errors[key])
const blur = field => {
	const hasError = errors[field];
	const shouldShow = this.state.touched[field];
  	return hasError ? shouldShow : false;
	}
  return(
    <div>
     <form onSubmit ={this.createUser}>
    	<input className={blur("username") ? "error" : ""} onBlur={this.handleBlur("username")} name="username" value={this.state.username} type="text" placeholder="Username" onChange={event => this.updateUser(event.target)} />
    	<input className={blur("firstName") ? "error" : ""} onBlur={this.handleBlur("firstName")} name="firstName" value={this.state.firstName} type="text"placeholder="First Name" onChange={event => this.updateUser(event.target)} />
    	<input className={blur("lastName") ? "error" : ""} onBlur={this.handleBlur("lastName")} name="lastName" value={this.state.lastName} type="text" placeholder="Last Name" onChange={event => this.updateUser(event.target)}/>
		<button disabled={isEnabled} type="submit" >Add</button>
	 </form>
	</div>
   )  
 }
}

export default User;
import React from "react";

const ListOfUsers = ({state}) =>{
return(
  <ul>
  {state.users.map(user=><li key={user.username}>{user.username} has played {user.numberOfGames}</li>)}
  </ul>

)
}

export default ListOfUsers;
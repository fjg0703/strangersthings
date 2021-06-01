import React from 'react'



const LogIn = () => {

  return(
  <div className='login'>
      <h1>Log In</h1>
      <label for='username'>Username: </label>
      <input type='text' id='username'></input>
      <label for='password'>Password: </label>
      <input type='text' id='password'></input>
      <button>Log in</button>


  </div>
  )
}




export default LogIn
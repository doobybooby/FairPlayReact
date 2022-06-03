import React from 'react'
import { Link } from 'react-router-dom'

function LogIn() {
  return (
    <div>
      <Link to='/'>HOME</Link>
      <h1>Sign Up/Log In</h1>
      <div>
        <form>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
          <br />
          <label>
            Password:
            <input type="text" name="password" />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default LogIn
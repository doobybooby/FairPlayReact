import React from 'react'
import { Link } from 'react-router-dom'

function LogIn() {
  return (
    <div className='logIn--page'>
      <div className='StickyNote' id='stickynote--login'>
        <h1>Log In</h1>
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
          <p>Don't have an account?
            <Link to='/signup'>Sign Up</Link>
          </p>
        </div>
      </div>
    </div>

  )
}

export default LogIn
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
          <p>Or go back, &nbsp;
            <Link to='/'>HOME</Link>
          </p>
        </div>
      </div>
      <div className='StickyNote'>
        <h1>Rules</h1>
        <ol>
          <li className='rules--list'>
            Create/Join a Rooom
          </li>
          <li className='rules--list'>
            "Call Next"
          </li>
          <li className='rules--list'>
            Play When Its your turn
          </li>
        </ol>
      </div>
    </div>
  )
}

export default LogIn
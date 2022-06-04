import React from 'react'
import { Link } from 'react-router-dom'

function SingUp() {
  return (
    <div className='signUp--page'>
      <div className='StickyNote' id='stickynote--signUp'>
        <h1>Sign Up</h1>
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
            <label>
              Confirm Password:
              <input type="text" name="password" />
            </label>
            <br />
            <input type="submit" value="Create" />
          </form>
          <p>Already have an account?
            <Link to='/login'>Log In</Link>
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

export default SingUp
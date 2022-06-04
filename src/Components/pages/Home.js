import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className='RoomsComponent'>
            <form className='room--search--form'>
              <label>SEARCH ROOMS</label>
              <div className='search--room--search--and--button'>
                <input className='search--room-input' type="text" name="room" value="EX: pier6" />
                <button type="submit">-></button>
              </div>
            </form>
          </div>
      <div className='RulesComponent'>
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
          <div className='rules--button--div'>
              <Link to='./rooms' className='link-button' id='button-rooms'>Rooms</Link>
              <Link to='./login'className='link-button' id='button-login'>Login</Link>
          </div>
        </div>
      </div>
    </>
  
  )
}

export default Home
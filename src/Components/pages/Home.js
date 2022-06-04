import React from 'react'
import { Link } from 'react-router-dom'
import RoomSearchBar from '../RoomSearchBar'

function Home() {
  return (
    <>
      <div className='home__component'>

        <RoomSearchBar />
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
      </div>
    </>
  
  )
}

export default Home
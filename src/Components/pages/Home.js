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
        <div >
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
            <li className='rules--list'>
              Log-in & Get Reward
            </li>
          </ol>
          <div className='rules--button--div'>
            <button>
              <Link to='./rooms'>Rooms</Link>
            </button>
            <button>
              <Link to='./login'>Login</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  
  )
}

export default Home
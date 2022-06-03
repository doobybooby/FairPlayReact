import React from 'react'
import { Link } from 'react-router-dom'

function Rooms() {
  return (
    <div>
      <Link to='/'>HOME</Link>
      <h2> JOIN A ROOM! </h2>

      <div>
        <li>
          <a href="/room/1">Room 1</a>
        </li>
        <li>
          <a href="/room/1">Room 2</a>
        </li>
        <li>
          <a href="/room/1">Room 3</a>
        </li>
      </div>
    </div>
  )
}

export default Rooms
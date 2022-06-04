import React from 'react'
import { Link } from 'react-router-dom'
import RoomSearchBar from '../RoomSearchBar'
function Rooms() {
  const rooms =
  [
    {name: 'pier6', courtNumber: 1, numberOfPlayers: 50},
    {name: 'pier6', courtNumber: 2, numberOfPlayers: 42},
    {name: 'pier6', courtNumber: 3, numberOfPlayers: 33},
    {name: 'centralPark', courtNumber: 1, numberOfPlayers: 23},
    {name: 'AllyPond', courtNumber: 0, numberOfPlayers: 19},
  ]

  const roomsList = rooms.map( room => 

    <li >
      <div className='activeRoomList'> 
        <Link to=':name' >{room.name}</Link>
        <p> {room.courtNumber}</p>
        <p> {room.numberOfPlayers}</p>

      </div>
    </li>
  )

  return (
    <div className='roomsComponent'>
      <RoomSearchBar />
      <div className='StickyNote' id='rooms'>
        <h2> JOIN A ROOM! </h2>
        <ul>
          <li>Room Name</li>
          <li>Court #</li>
          <li>Players</li>
            
        </ul>
          {roomsList}
      </div>
      <p>Or go back, &nbsp;
        <Link to='/'>HOME</Link>
      </p>
    </div>

  )
}

export default Rooms
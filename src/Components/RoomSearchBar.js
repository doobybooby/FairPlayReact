import React from 'react'

function RoomSearchBar() {
  return (
  <div className='room--search--form'>
    <form className='room--search' >
      <label>Room Name </label>
      <input className='search--room-input' type="text" name="room" value="EX: pier6" />
      <button type="submit">Search Room</button>
    </form>

  </div>
  )
}

export default RoomSearchBar
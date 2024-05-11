
import React, { useState }  from 'react'
import { useNavigate } from 'react-router-dom';

function Landing() {

  const [roomCode, setRoomCode] = useState('')

  const navigate = useNavigate();

 const handleFormSubmit = (ev)=>{
  ev.preventDefault();
  navigate(`/room/${roomCode}`)
 }

  return (
    <div className='Home-page'>
        <form onSubmit={handleFormSubmit} className='form'>
          <div>
            <label>Enter Room Code : </label>
            <input value={roomCode} onChange={(e)=>{
              setRoomCode(e.target.value)
            }} type="text" placeholder='Enter Room Code' />
          </div>
          <button className='btn'type='submit'>Join</button>
        </form>
    </div>
  )
}

export default Landing
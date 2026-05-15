import React, { useState } from 'react'
import './Usercard.css'

const Usercard = () => {

  const [texts, setTexts] = useState([])

  const handleClick = (e) => {

    const newText = {
      x: e.clientX,
      y: e.clientY,
      id: Date.now()
    }

    setTexts([...texts, newText])
  }

  return (
    <div className='main' onClick={handleClick}>

      <div className='divclass'>
        <p id='para'>Click Anywhere ✨</p>

        <button>
          Radha Radha
        </button>
      </div>

      {
        texts.map((item) => (
          <span
            key={item.id}
            className='floating-text'
            style={{
              left: item.x,
              top: item.y
            }}
          >
            🌸 Radha Radha 🌸
          </span>
        ))
      }

    </div>
  )
}

export default Usercard
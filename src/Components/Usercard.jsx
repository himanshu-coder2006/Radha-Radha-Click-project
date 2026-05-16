import React, { useState } from 'react'
import './Usercard.css'
import radhaAudio from '../assets/radha.mp3'

const Usercard = () => {

  const [texts, setTexts] = useState([])
  const [count, setCount] = useState(0)

  const speakRadha = () => {
    const audio = new Audio(radhaAudio)
    audio.play()
  }

  const handleClick = (e) => {

    speakRadha()

    // Count increase
    setCount((prev) => prev + 1)

    const newText = {
      x: e.clientX,
      y: e.clientY,
      id: Date.now()
    }

    setTexts((prev) => [...prev, newText])

    setTimeout(() => {
      setTexts((prev) =>
        prev.filter((item) => item.id !== newText.id)
      )
    }, 2000)
  }

  return (
    <div className='main' onClick={handleClick}>

      <div className='divclass'>
        <p id='para'>Click Anywhere ✨</p>

        <h2 className='count'>
          🌸 Radha Count: {count}
        </h2>

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
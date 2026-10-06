'use client'

import React from 'react'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'

const ConfettiBurst = () => {
  const { width, height } = useWindowSize()

  const leftConfettiConfig = {
    width,
    height,
    numberOfPieces: 800,
    gravity: 0.2,
    wind: 0.3,
    initialVelocityX: 40,
    initialVelocityY: 20,
    recycle: false,
    confettiSource: {
      x: 0,
      y: height / 1,
      w: 10,
      h: 0
    }
  }

  const rightConfettiConfig = {
    ...leftConfettiConfig,
    wind: -0.3,
    initialVelocityX: -40,
    confettiSource: {
      x: width,
      y: height / 1,
      w: 10,
      h: 0
    }
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 1,
        transition: 'opacity 0.5s ease-out'
      }}
    >
      <>
        <Confetti {...leftConfettiConfig} />
        <Confetti {...rightConfettiConfig} />
      </>
    </div>
  )
}

export default ConfettiBurst

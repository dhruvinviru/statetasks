import React, { useState } from 'react'

function Ticktack() {
  const [btn, setBtn] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState('X')
  const [win, setWin] = useState(null)
  const [gover, setGover] = useState(null)

  const restart = () => {
    setBtn(Array(9).fill(null))
    setTurn('X')
    setWin(null)
    setGover(false)
  }

  const click = (index) => {
    if (gover !== true || checkwin(index) !== true) {
      const temp = [...btn]
      if (btn[index] === null) {
        temp[index] = turn;
        setTurn(turn === 'X' ? 'O' : 'X')
      }
      setBtn(temp)
    } else {
      setWin(turn === 'X' ? 'O' : 'X')
      setGover(true)
    }
  }

  const checkwin = (index) => {
    !btn.includes(null) ? setGover(true) : setGover(false)

    if (btn[0] !== null && btn[0] === btn[1] && btn[1] === btn[2]) {
      // setWin(turn === 'X' ? 'O' : 'X')
      return true;
    } else if (btn[3] !== null && btn[3] === btn[4] && btn[4] === btn[5]) {
      // setWin(turn === 'X' ? 'O' : 'X')
      return true;
    } else if (btn[6] !== null && btn[6] === btn[7] && btn[7] === btn[8]) {
      // setWin(turn === 'X' ? 'O' : 'X')
      return true;
    } else if (btn[0] !== null && btn[0] === btn[3] && btn[3] === btn[6]) {
      // setWin(turn === 'X' ? 'O' : 'X')
      return true;
    } else if (btn[1] !== null && btn[1] === btn[4] && btn[4] === btn[7]) {
      // setWin(turn === 'X' ? 'O' : 'X')
      return true;
    } else if (btn[2] !== null && btn[2] === btn[5] && btn[5] === btn[8]) {
      // setWin(turn === 'X' ? 'O' : 'X')
      return true;
    } else if (btn[0] !== null && btn[0] === btn[4] && btn[4] === btn[8]) {
      // setWin(turn === 'X' ? 'O' : 'X')
      return true;
    } else if (btn[2] !== null && btn[2] === btn[4] && btn[4] === btn[6]) {
      // setWin(turn === 'X' ? 'O' : 'X')
      return true;
    }
  }

  return (
    <>
      <div className='tick-tack'>
        <div>
          <h1>Ticktack</h1>
        </div>
        <div>
          {btn.map((val, i) => (
            <button
              className='btn'
              id='buttons'
              key={i}
              onClick={() => { click(i) }}
            >
              {val}
            </button>
          ))}
        </div>
      </div>
      <div className='tick-tack-footer'>
        <p className='winner'>
          {win ? `Winner: ${win}` : gover ? 'Game Over' : `Next: ${turn}`}
        </p>
        <button onClick={restart} className='restart'>Restart</button>
      </div>
    </>
  )
}

export default Ticktack
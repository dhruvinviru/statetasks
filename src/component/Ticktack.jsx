import React, { useState } from 'react'

function Ticktack() {
  const [btn, setBtn] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState('X')
  const [win, setWin] = useState(null)

  const restart = () => {
    setBtn(Array(9).fill(null))
    setTurn('X')
    setWin(null)
    console.log('Game was Restarted')
  }
   const click = (index) => {
    if (checkwin() !== true) {
      const btn1 = [...btn]
      if (btn[index] === null) {
        btn1[index] = turn;
      }
      setBtn(btn1)
      setTurn(turn === 'X' ? 'O' : 'X')
      checkwin()
    } else {
      setWin(turn === 'X' ? 'O' : 'X')
      btn.map((val, i) => {
        return (
          <button className='btn' key={i} onClick={() => { click(i) }} disabled>{val}</button>
        )
      })
    }
  }
  const checkwin = () => {
    if (btn[0] !== null && btn[0] === btn[1] && btn[1] === btn[2]) {
      return true;
    }
    if (btn[3] !== null && btn[3] === btn[4] && btn[4] === btn[5]) {
      return true;
    }
    if (btn[6] !== null && btn[6] === btn[7] && btn[7] === btn[8]) {
      return true;
    }
    if (btn[0] !== null && btn[0] === btn[3] && btn[3] === btn[6]) {
      return true;
    }
    if (btn[1] !== null && btn[1] === btn[4] && btn[4] === btn[7]) {
      return true;
    }
    if (btn[2] !== null && btn[2] === btn[5] && btn[5] === btn[8]) {
      return true;
    }
    if (btn[0] !== null && btn[0] === btn[4] && btn[4] === btn[8]) {
      return true;
    }
    if (btn[2] !== null && btn[2] === btn[4] && btn[4] === btn[6]) {
      return true;
    }}

     return (
        <>
      <div className='tick-tack'>
        <div>
          <h1>Ticktack</h1>
        </div>
        <div>
          {btn.map((val, i) => {
            return (
              <button
                className='btn'
                key={i}
                onClick={() => { click(i) }}
                disabled={Boolean(win) || val !== null}
              >
                {val}
              </button>
            )
          })}
        </div>
      </div>
      <div>
        <p className={`ticktack-status ${win ? 'winner' : 'next-turn'}`}>
          {win ? `Winner: ${win}` : `Next turn: ${turn}`}
        </p>
          <button className="ticktack-restart" onClick={restart}>Restart</button>

      </div>
       </>
  )
}


export default Ticktack
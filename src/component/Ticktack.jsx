import React, { useState } from 'react'

function Ticktack() {
  const [btn, setBtn] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState('X')
  // const [win, setWin] = useState(null)
  const click = (index) => {
    const temp = [...btn]
    if(btn[index] === null){
      temp[index] = turn;
    }
    setBtn(temp)
    setTurn(turn === 'X' ? 'O' : 'X')
    // checkwin(index)
  }
  

  return (
    <div className='tick-tack'>
      <div>
        <h1>Ticktack</h1>
      </div>
      <div>
        {btn.map((val, i) => {
          return (
            <button className='btn' key={i} onClick={() => { click(i) }}>{val}</button>
          )
        })}
      </div>
    </div>
  )
}

export default Ticktack
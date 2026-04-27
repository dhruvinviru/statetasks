import React,{useState} from 'react'

function Shape() {
  const [shape, setShape] = useState('square');
  const printshapes = () =>{
    if(shape === 'square') {
      return <p className='square'></p>
    }
    if(shape === 'circle') {
      return <p className='circle'></p>
    }
    if(shape === 'triangle') {
      return <p className='triangle'></p>
    }
  }
  return (
    <div>
        <div>
            <h1>Shape</h1> 
        </div>
        <div>
            <button onClick={() => setShape('square')}>Square</button>
            <button onClick={() => setShape('circle')}>Circle</button>
            <button onClick={() => setShape('triangle')}>Triangle</button>
        </div>
        <div>
          {printshapes()}
        </div>
    </div>

  )
}

export default Shape
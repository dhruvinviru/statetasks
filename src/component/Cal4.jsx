import React, { useState } from 'react'

function Cal4() {
    const [result, setResult] = useState(0);
    const [operator, setOperator] = useState(null);
    return (
        <div className="cal4">
            <div>
                <h1>Calculator Task4</h1>
            </div>
            <div>
                <p>{result}</p>
                <p>{operator}</p>
                <button className="num-btn" onClick={()=>{setResult(result+'1')}}>1</button>
                <button className="num-btn" onClick={()=>{setResult(result+'2')}}>2</button>
                <button className="num-btn" onClick={()=>{setResult(result+'3')}}>3</button>
                <button className="num-btn" onClick={() => {setOperator('/'),setResult(0)}}>/</button>
                <button className="num-btn" onClick={()=>{setResult(result+'4')}}>4</button>
                <button className="num-btn" onClick={()=>{setResult(result+'5')}}>5</button>
                <button className="num-btn" onClick={()=>{setResult(result+'6')}}>6</button>
                <button className="num-btn" onClick={() => {setOperator('*'),setResult(0)}}>*</button>
                <button className="num-btn" onClick={()=>{setResult(result+'7')}}>7</button>
                <button className="num-btn" onClick={()=>{setResult(result+'8')}}>8</button>
                <button className="num-btn" onClick={()=>{setResult(result+'9')}}>9</button>
                <button className="num-btn" onClick={() => {setOperator('-'),setResult(0)}}>-</button>
                <button className="num-btn" onClick={()=>{setResult(0)}}>C</button>
                <button className="num-btn" onClick={()=>{setResult(result+'0')}}>0</button>
                <button className="num-btn" onClick={()=>{setResult(result+'.')}}>.</button>
                <button className="num-btn" onClick={() => {setOperator('+'),setResult(0)}}>+</button>
                <button className="equals num-btn">=</button><br />

            </div>
        </div>
    )
}

export default Cal4
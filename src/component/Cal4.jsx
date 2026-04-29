import React, { useState } from 'react'

function Cal4() {
    const [result, setResult] = useState(0);
    const [operator, setOperator] = useState('');
    const [no1, setNo1] = useState('');
    const [no2, setNo2] = useState('');

    const sum = () => {
        setNo1(result);
        setOperator('+');
        setResult(0)
    }

    const sub = () => {
        setNo1(result);
        setOperator('-')
        setResult(0)
    }
    const mul = () => {
        setNo1(result);
        setOperator('*')
        setResult(0)
    }
    const div = () => {
        setNo1(result);
        setOperator('/')
        setResult(0)
    }

    const ans = () => {
        setNo2(result)


        if (operator === '+') {
            setResult(Number(no1) + Number(no2))
        } else if (operator === '-') {
            setResult(Number(no1) - Number(no2))
        } else if (operator === '*') {
            setResult(Number(no1) * Number(no2))
        } else if (operator === '/') {
            setResult(Number(no1) / Number(no2))
        }
    }
    return (
        <div className="cal4">
            <div>
                <h1>Calculator Task4</h1>
            </div>
            <div>
                <p>{result}</p>
                <p>{operator}</p>
                <button className="num-btn" onClick={() => { setResult(result + '1') }}>1</button>
                <button className="num-btn" onClick={() => { setResult(result + '2') }}>2</button>
                <button className="num-btn" onClick={() => { setResult(result + '3') }}>3</button>
                <button className='num-btn op-btn' onClick={() => {
                    if (result.length !== 1) {
                        setResult(result.substring(0, result.length - 1))
                    }else{
                        return;
                    }
                }}>{`<<`}</button>
                <button className="num-btn" onClick={() => { setResult(result + '4') }}>4</button>
                <button className="num-btn" onClick={() => { setResult(result + '5') }}>5</button>
                <button className="num-btn" onClick={() => { setResult(result + '6') }}>6</button>
                <button className="num-btn op-btn" onClick={div}>/</button>
                <button className="num-btn" onClick={() => { setResult(result + '7') }}>7</button>
                <button className="num-btn" onClick={() => { setResult(result + '8') }}>8</button>
                <button className="num-btn" onClick={() => { setResult(result + '9') }}>9</button>
                <button className="num-btn op-btn" onClick={mul}>*</button>
                <button className="num-btn" onClick={() => { setResult(0) }}>C</button>
                <button className="num-btn" onClick={() => { setResult(result + '0') }}>0</button>
                <button className="num-btn" onClick={() => { if (!result.includes(`.`)) { setResult(result + `.`) } }}>.</button>
                <button className="num-btn op-btn" onClick={sub}>-</button>
                <button className="equals num-btn" onClick={ans}>=</button>
                <button className="num-btn op-btn" onClick={sum}>+</button>

            </div>
        </div>
    )
}

export default Cal4
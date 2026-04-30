import React, { useState } from 'react'

function Cal4() {
    const [result, setResult] = useState(0);
    const [operator, setOperator] = useState('');
    const [no1, setNo1] = useState('');

    const oparation = (op) => {
        setNo1(result);
        setOperator(op);
        setResult(0)
        if (op === '=') {
            ans()
        }
    }

    const ans = () => {
        const n2 = result;
        if (operator === '+') {
            setResult(String(Number(no1) + Number(n2)))
        } else if (operator === '-') {
            setResult(String(Number(no1) - Number(n2)))
        } else if (operator === '*') {
            setResult(String(Number(no1) * Number(n2)))
        } else if (operator === '/') {
            setResult(String(Number(no1) / Number(n2)))
        }
        setOperator('=')
    }
    return (
        <div className="cal4">
            <div>
                <h1>Calculator Task4</h1>
            </div>
            <div>
                <p className='display'>{result}</p>
                <p>{operator}</p>
                <button className="num-btn" onClick={() => {
                    if (result === 0) {
                        setResult('1')
                    } else {
                        setResult(result + '1')
                    }
                }}>1</button>
                <button className="num-btn" onClick={() => {
                    if (result === 0) {
                        setResult('2')
                    } else {
                        setResult(result + '2')
                    }
                }}>2</button>
                <button className="num-btn" onClick={() => {
                    if (result === 0) {
                        setResult('3')
                    } else {
                        setResult(result + '3')
                    }
                }}>3</button>
                <button className='num-btn op-btn' onClick={() => {
                    if (result.length > 1) {
                        setResult(result.substring(0, result.length - 1))
                    } else {
                        setResult(0)
                    }
                }}>«</button>

                <button className="num-btn" onClick={() => {
                    if (result === 0) {
                        setResult('4')
                    } else {
                        setResult(result + '4')
                    }
                }}>4</button>
                <button className="num-btn" onClick={() => {
                    if (result === 0) {
                        setResult('5')
                    } else {
                        setResult(result + '5')
                    }
                }}>5</button>
                <button className="num-btn" onClick={() => {
                    if (result === 0) {
                        setResult('6')
                    } else {
                        setResult(result + '6')
                    }
                }}>6</button>
                <button className="num-btn op-btn" onClick={() => { oparation('/') }}>/</button>

                <button className="num-btn" onClick={() => {
                    if (result === 0) {
                        setResult('7')
                    } else {
                        setResult(result + '7')
                    }
                }}>7</button>
                <button className="num-btn" onClick={() => {
                    if (result === 0) {
                        setResult('8')
                    } else {
                        setResult(result + '8')
                    }
                }}>8</button>
                <button className="num-btn" onClick={() => {
                    if (result === 0) {
                        setResult('9')
                    } else {
                        setResult(result + '9')
                    }
                }}>9</button>
                <button className="num-btn op-btn" onClick={() => { oparation('*') }}>*</button>

                <button className="num-btn" onClick={() => { setResult(0) }}>C</button>
                <button className="num-btn" onClick={() => { setResult(result + '0') }}>0</button>
                <button className="num-btn" onClick={() => {
                    if (!result.includes('.')) {
                        setResult(result + '.')
                    }
                }}>.</button>
                <button className="num-btn op-btn" onClick={() => { oparation('-') }}>-</button>

                <button className="equals num-btn" onClick={() => { oparation('=') }}>=</button>
                <button className="num-btn op-btn" onClick={() => { oparation('+') }}>+</button>

            </div>
        </div>
    )
}

export default Cal4
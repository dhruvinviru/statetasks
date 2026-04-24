import React, { useState } from 'react'

function Cal2() {
    const [no1, setNo1] = useState(0);
    const [no2, setNo2] = useState(0);
    const [result, setResult] = useState(0);

  return (
    <div>
        <main className="calculator-page">
            <section className="calculator-card">
                <h1>Calculator Task2</h1>
                <div className="field-row">
                    <label htmlFor="number1">Number 1</label>
                    <input
                        id="number1"
                        type="number"
                        placeholder="Enter a number"
                        value={no1}
                        onChange={(e) => setNo1(Number(e.target.value))}
                    />
                </div>
                <div className="field-row">
                    <label htmlFor="number2">Number 2</label>
                    <input
                        id="number2"
                        type="number"
                        placeholder="Enter a number"
                        value={no2}
                        onChange={(e) => setNo2(Number(e.target.value))}
                    />
                </div>
                <button className="calculate-button" onClick={() => setResult(no1 + no2)}>
                    Sum
                </button>
                <button className="calculate-button" onClick={() => setResult(no1 * no2)}>
                    Multiplication
                </button>
                <button className="calculate-button" onClick={() => setResult(no1 / no2)}>
                    Division
                </button>
                <button className="calculate-button" onClick={() => setResult(no1 - no2)}>
                    Subtraction
                </button>
                <div className="result-block">
                    <h2>Result</h2>
                    <p className="result-value">{result}</p>
                </div>
            </section>
        </main>        
    </div>
  )
}

export default Cal2
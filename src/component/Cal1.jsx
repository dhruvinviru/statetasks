import React, { useState } from 'react'

function Cal1() {

  const [no, setNo] = useState(0);
  return (
    <main className="calculator-page">
      <section className="calculator-card">
        <h1>Calculator Task1</h1>
        <div className="calculator-actions">
          <button className="calculate-button" onClick={() => setNo(no + 1)}>
            Add
          </button>
          <button className="calculate-button secondary" onClick={() => setNo(no - 1)}>
            Subtract
          </button>
        </div>
        <div className="result-block">
          <h2>Result</h2>
          <p className="result-value">{no}</p>
        </div>
      </section>
    </main>
  )
}

export default Cal1
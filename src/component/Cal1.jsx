import React,{useState} from 'react'

function Cal1() {

    const [no , setno] = useState(0);
  return (
    <div>
        <main className="calculator-page">
                <section className="calculator-card">
                    <h1>Calculator Task3</h1>
                        <button className="calculate-button" onClick={() => setno(no + 1)}>
                            Sum
                        </button>
                        <p className="result-value">{no}</p>
                </section>
            </main>
    </div>
  )
}

export default Cal1
import React, { useState } from 'react'

function Stopwatch() {
    const [time, setTime] = useState(0);
    var m = 0, ms = 0, h = 0, s = 0, cnt;
    const start = () => {
        cnt = setInterval(() => {
            ms++;
            if (ms === 99) {
                s++;
                ms = 1;
            }
            if (s === 60) {
                m++;
                s = 0;
            }
            if (m === 60) {
                h++;
                m = 0;
            }
            display();   
        }, 1)
    }
    const stop = () => {
        clearInterval(cnt)
    }

    const reset = () => {
        clearInterval(cnt)
        m = 0
        ms = 0
        h = 0
        s = 0
        display()
    }

    const display = () => {
        setTime(`${h}:${m}:${s}:${ms}`)
    }
    return (
        <div className="stopwatch">
            <div>
                <h1>Stopwatch</h1>
            </div>
            <div>
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
            <div>
                <p id="disp">{time}</p>
            </div>
        </div>
    )
}

export default Stopwatch
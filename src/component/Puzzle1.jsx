import React, { useState } from 'react'

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let winCondition = [1, 2, 3, 4, 5, 6, 7, 8, '']

function NewGame() {
    var finalarr = new Array();
    var ranarr = new Array();

    // Add Random Value in RandomArray
    arr.map((val, i) => {
        return (
            ranarr[i] = Math.floor(Math.random() * 10)
        )
    })
    // Add Random Value in FinalArray with Duplicate Value Sorting 
    ranarr.map((val, i) => {
        return (
            ranarr[i] !== 9 && ranarr[i] !== undefined && !finalarr.includes(ranarr[i]) ? finalarr.push(ranarr[i]) : null
        )
    })
    // Check FinalArray For Missing Values 
    arr.map((val, i) => {
        return (
            !finalarr.includes(arr[i]) ? finalarr.push(arr[i]) : null
        )
    })
    // Make Space Empty For Move
    finalarr.map((val, i) => {
        return (
            finalarr.indexOf(0) === i ? finalarr[i] = "" : finalarr
        )
    })

    return finalarr
}

function Puzzle1() {
    const [btn, setBtn] = useState(NewGame())

    const newgame = () => {
        setBtn(NewGame())
    }

    const click = (index) => {
        let swaper = [...btn]
        if (!win()) {
            if (btn[index] !== '' && index % 3 !== 0 && btn[index - 1] === '') {
                [swaper[index], swaper[index - 1]] = [swaper[index - 1], swaper[index]]
                setBtn(swaper)
            }
            if (btn[index] !== '' && index % 3 !== 2 && btn[index + 1] === '') {
                [swaper[index], swaper[index + 1]] = [swaper[index + 1], swaper[index]]
                setBtn(swaper)
            }
            if (btn[index] !== '' && index >= 3 && btn[index - 3] === '') {
                [swaper[index], swaper[index - 3]] = [swaper[index - 3], swaper[index]]
                setBtn(swaper)
            }
            if (btn[index] !== '' && index < 6 && btn[index + 3] === '') {
                [swaper[index], swaper[index + 3]] = [swaper[index + 3], swaper[index]]
                setBtn(swaper)
            }
            console.log(btn);

        } else {
            const alertgame = window.confirm('Your Win!\nFor Start New Game Click Ok')
            if(alertgame){
                newgame()
            }
        }
    }

    const win = () => {
        if (btn === winCondition) {
            return true
        }
    }
    const directwin = () => {
        setBtn(winCondition)
    }
    return (
        <>
            <div className='tick-tack'>
                <div>
                    <h1>Number Puzzle</h1>
                </div>
                <div>
                    {btn.map((val, i) => (
                        <button
                            className='btn'
                            id='buttons'
                            key={i}
                            onClick={() => { click(i) }}
                        >
                            {val}
                        </button>
                    ))}
                </div>
            </div>
            <div className='tick-tack-footer'>
                <button onClick={newgame} className='restart'>New Game</button>
                <button onClick={directwin} className='restart'>Click to Win</button>
            </div>
        </>
    )
}

export default Puzzle1
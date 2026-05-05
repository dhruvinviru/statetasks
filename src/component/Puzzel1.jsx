import React, { useState } from 'react'

function NewGame() {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var finalarr = new Array();
    var ranarr = new Array();

    // Add Random Value in RandomArray
    arr.map((val, i) => {
        return (
            ranarr[i] = Math.floor(Math.random() * 10)
        )
    })
    // Add Random Value in FinalArray with Dublicate Value Sorting 
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

function Puzzel1() {
    var finalarr = NewGame()
    const [btn, setBtn] = useState(NewGame)

    const newgame = () => {
        setBtn(finalarr)
    }

    const click = (index) => {
        let a = '';
        if(btn[index - 1] === ''){
            console.log(btn[index])
            console.log(btn[index - 1]);
            console.log(index);
            console.log(a);                        
            console.log(btn);

            a = btn[index]
            btn[index] = btn[index - 1]
            btn[index - 1] = a

            setBtn(btn)

            console.log(btn[index])
            console.log(btn[index - 1]);
            console.log(index);
            console.log(a);                        
            console.log(btn);
        }
        
    }

    return (
        <>
            <div className='tick-tack'>
                <div>
                    <h1>Number Puzzel</h1>
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
            </div>
        </>
    )
}

export default Puzzel1
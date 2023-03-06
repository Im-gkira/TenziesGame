import React from "react";
import Dice from "./dice";

export default function Main(){

    let diceData = []

    for (let i=0;i<10;i++){
        diceData.push(<Dice number={i+1}/>)
    }

    return (
        <div className="main">
            <h1>Tenzies</h1>
            <p>
            Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
            </p>
            <div className="dice--grid">
            {diceData}
            </div>
            
        </div>
    )
}
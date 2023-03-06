import React from "react";
import { useState,useEffect } from "react";
import Dice from "./dice";

export default function Main(){

    const getNewDice = ()=>Array.from({length: 10}, () => Math.floor(Math.random() * 5)+1);

    const [diceArr,setDiceArr] = useState(getNewDice()) 
    
    const diceData = [diceArr.map(function(data){ return <Dice number={data}/> })]

    function clickHandler(){
        setDiceArr(getNewDice());
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
            <button onClick={clickHandler} className="btn">Roll</button>
        </div>
    )
}
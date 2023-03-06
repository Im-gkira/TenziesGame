import React from "react";
import { useState, useEffect } from "react";
import Dice from "./dice";
import {nanoid} from "nanoid"



export default function Main() {

  const getNewDice = function () {
    let arr = new Array();
    for (let i = 0; i < 10; i++) {
      let value = Math.ceil(Math.random() * 6);
      arr.push({ key:nanoid(), value: value, isHold: false, id: i });
    }
    return arr;
  };

  const [diceArr, setDiceArr] = useState(getNewDice());

console.log(diceArr);

  const diceData = [
    diceArr.map(function (data) {
      return <Dice eventHandler={clickHandler2} key={data.key} data={data} />;
    }),
  ];

  function clickHandler1() {
    setDiceArr(function (data) {
      return data.map(function (entry) {
        if (!entry.isHold) {
          return { ...entry, value: Math.ceil(Math.random() * 6) };
        }
        return entry;
      });
    });
  }


  function clickHandler2(event){
    event.preventDefault();
    const id = event.currentTarget.id;
    console.log(id);
    setDiceArr(function (data){
        return data.map(function (entry){
            if (entry.id==id)return {...entry,isHold:!entry.isHold}
            return entry

        })
    })
  }

  return (
    <div className="main">
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice--grid">{diceData}</div>
      <button onClick={clickHandler1} className="btn">
        Roll
      </button>
    </div>
  );
}

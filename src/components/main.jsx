import React from "react";
import { useState, useEffect } from "react";
import Dice from "./dice";
import { nanoid } from "nanoid";
import Confetti from 'react-confetti'


export default function Main() {
  const [tenzies, setTanzies] = useState(false);


  const getNewDice = function () {
    let arr = new Array();
    for (let i = 0; i < 10; i++) {
      let value = Math.ceil(Math.random() * 6);
      arr.push({ key: nanoid(), value: value, isHold: false, id: i });
    }
    return arr;
  };

  const [diceArr, setDiceArr] = useState(getNewDice());

  useEffect(
    function () {
      let values = new Set();
      let counter = 0;
      diceArr.forEach(function (dice) {
        if (dice.isHold) {
          values.add(dice.value);
          counter++;
        }
      });
      setTanzies(values.size == 1 && counter == 10);
    },
    [diceArr]
  );

  const diceData = [
    diceArr.map(function (data) {
      return <Dice eventHandler={clickHandler2} key={data.key} data={data} />;
    }),
  ];

  function clickHandler1() {
    setDiceArr(function (data) {
      return data.map(function (entry) {
        if (tenzies){
          return {...entry,isHold:false,value:Math.ceil(Math.random()*6)}
        }
        if (!entry.isHold) {
          return { ...entry, value: Math.ceil(Math.random() * 6) };
        }
        return entry;
      });
    });
  }

  function clickHandler2(event) {
    event.preventDefault();
    const id = event.currentTarget.id;
    setDiceArr(function (data) {
      return data.map(function (entry) {
        if (entry.id == id) return { ...entry, isHold: !entry.isHold };
        return entry;
      });
    });
  }

  return (
    <div className="main">
      {tenzies && <Confetti/>}
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice--grid">{diceData}</div>
      <button onClick={clickHandler1} className="btn">
        {tenzies?'New Game':'Roll'}
      </button>
    </div>
  );
}

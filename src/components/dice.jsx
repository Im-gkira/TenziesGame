import React from "react";


export default function Dice(props){
    let style = {backgroundColor:props.data.isHold?"#59E391":"white" }


    
    return (
        <div style={style} id={props.data.id} onClick={props.eventHandler} className="dice">
            <h2>{props.data.value}</h2>
        </div>
    )
}
import React, { useState, useEffect } from "react";
import {Layout, Register as RegisterContainer} from '../containers'



export default function prueva() {
    // 0 === POS X:  480 POS Y 376
    //0 === POS X:  806 POS Y 205
    //0 === POS X:  799 POS Y -7
    const [movimientos0, setmMvimientos0] = useState([]);

    setmMvimientos0(posx= 480, posy= 376)
    const RedDot = {
        height:"50px",
        width:"50px",
        borderRadius:"50px",
        backgroundColor:"#C4342C",
        color:"#FFF",
        fontSize: "20px",
        textAlign: "center",
      };

      movimientos0.forEach((movimiento,index) => {
        setTimeout(() => {
            console.log("0 === POS X: ", movimiento.posx, "POS Y", movimiento.posy );
            player0.style.transition= "transform 0.5s linear";
             player0.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
          }, intervaloMov * (index + 1));
    });
  return (
    <>
    <Layout>
    <div style={RedDot}>
        <p>1</p>
    </div> 
    <button onClick={play} >play jugada</button>
    </Layout>
    </>
  )
}
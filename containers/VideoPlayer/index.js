//import React from 'react';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import { Canvas } from '../../components';
import FreeTransform from 'react-free-transform'
import ReactPlayer from 'react-player'
import firebase from '../../lib/fire';
import {Container,
Court,
Sidebar,
RedDot,
AnimatorBar,
Square,
Navbar,
SectorNav
} from './styled'

export default function VideoPlayer(jugadaData) {
  const [movimientos0, setMovimientos0] = useState([]);
  const [movimientos1, setMovimientos1] = useState([]);
  const [movimientos2, setMovimientos2] = useState([]);
  const [movimientos3, setMovimientos3] = useState([]);
  const [movimientos4, setMovimientos4] = useState([]);
  const [players, setPlayers] = useState('');
  const [components, setComponents] = useState([]);
  //const [jugada, setJugada] = useState([]);
  const {
    name,
    description,
    animations
  } = jugadaData.jugada;
  //console.log(animations);

  useEffect(() => {
    getPlayers();
  }, );

 const getPlayers = () =>{
   if(animations){
  animations.forEach(function (user,i) {
    var node = document.createElement("div");
    var playerCreator = document.getElementById("Court").appendChild(node);
    node.setAttribute('id',i);
    node.style.backgroundColor = "#C4342C";
    node.style.height = "50px";
    node.style.width = "50px";
    node.style.borderRadius = "50px";
    node.style.color = "#FFF";
    node.style.fontSize = "20px";
    node.style.textAlign = "center";
    node.style.transform = `translate(${user[0].posx}px, ${user[0].posy}px)`;
    //console.log(user[0].posx);
  });
}
}

//animacion de los jugadores
 const play = () => {
  const intervaloMov = 1000;
  console.log('--------Play mode!-------')
  var player0 = document.getElementById("0");
  var player1 = document.getElementById("1");
  var player2 = document.getElementById("2");
  var player3 = document.getElementById("3");
  var player4 = document.getElementById("4");

console.log(`las animaciones ${animations.length}`);

for(let i = 0; i < animations.length; i++){
  console.log("prueba");
  console.log(i);
  animations[i].forEach((movimiento,index) => {
    var player = document.getElementById(i);
    console.log("prueba 2");
      setTimeout(() => {
        console.log("prueba 3");
          console.log("0 === POS X: ", movimiento.posx, "POS Y", movimiento.posy );
          player.style.transition= "transform 0.5s linear";
          player.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
        }, intervaloMov * (index + 1));
  });
}

}
//fin de la animacion de los jugadores

    return(
        <Container>
          <Court id="Court">
          </Court> 
          <div></div>
          <AnimatorBar>
            <p>Controles</p>
            <div
            onClick={play}
            >
              <img src="/Assets/Play-icon.svg" />
            </div>
            <p>{name}</p>
          </AnimatorBar>
        </Container>
      )
   }
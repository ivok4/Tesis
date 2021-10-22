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
  //console.log(animations[0]);

  useEffect(() => {
    getPlayers();
  }, );

 const getPlayers = () =>{
   if(animations){
    if(animations.own){
      animations.own.forEach(function (user,i) {
        var node = document.createElement("div");
        var playerNumber = document.createElement("p");
        var playerCreator = document.getElementById("Court").appendChild(node);
        node.appendChild(playerNumber).innerHTML= i +1;
        node.setAttribute('id',i);
        node.style.backgroundColor = "#C4342C";
        node.style.height = "50px";
        node.style.width = "50px";
        node.style.borderRadius = "50px";
        node.style.color = "#FFF";
        node.style.fontSize = "20px";
        node.style.textAlign = "center";
        node.style.transform = `translate(${user[0].posx}px, ${user[0].posy}px)`;
      });
    }
      if(animations.rivals){
  animations.rivals.forEach(function (user,i) {
    var node = document.createElement("div");
    var playerNumber = document.createElement("p");
    var playerCreator = document.getElementById("Court").appendChild(node);
    node.appendChild(playerNumber).innerHTML= i +1;
    node.setAttribute('id',`b-${i}`);
    node.style.backgroundColor = "blue";
    node.style.height = "50px";
    node.style.width = "50px";
    node.style.borderRadius = "50px";
    node.style.color = "#FFF";
    node.style.fontSize = "20px";
    node.style.textAlign = "center";
    node.style.transform = `translate(${user[0].posx}px, ${user[0].posy}px)`;
  });
      }
  if(animations.ball){
  animations.ball.forEach(function (user,i) {
    var node = document.createElement("div");
    var playerCreator = document.getElementById("Court").appendChild(node);
    node.setAttribute('id',"ball");
    node.style.backgroundImage= "url('/Assets/Ball.png')"; 
    node.style.height = "50px";
    node.style.width = "50px";
    node.style.borderRadius = "50px";
    node.style.color = "#FFF";
    node.style.fontSize = "20px";
    node.style.textAlign = "center";
    node.style.transform = `translate(${user[0].posx}px, ${user[0].posy}px)`;
  });
}
}
}

//animacion de los jugadores
 const play = () => {
  const intervaloMov = 1000;
  console.log('--------Play mode!-------');

// for(let i = 0; i < animations.rivals.length; i++){
//   animations.rivals[i].forEach((movimiento,index) => {
//     var player = document.getElementById(`b-${i}`); 
//     console.log("prueba 2");
//       setTimeout(() => {
//           player.style.transition= "transform 0.5s linear";
//           player.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
//         }, intervaloMov * (index + 1));
//   });
// }
for(let i = 0; i < animations.own.length; i++){
  animations.own[i].forEach((movimiento,index) => {
    var player = document.getElementById(i);
      setTimeout(() => {
          player.style.transition= "transform 0.5s linear";
          player.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
        }, intervaloMov * (index + 1));
  });
}
for(let i = 0; i < animations.ball.length; i++){
  animations.ball[i].forEach((movimiento,index) => {
    var player = document.getElementById("ball");
      setTimeout(() => {
          player.style.transition= "transform 0.5s linear";
          player.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
        }, intervaloMov * (index + 1));
  });
}
}
//fin de la animacion de los jugadores

    return(
        <>
          <Navbar>
                <div>
                    <img src="/Assets/Menu-icon.png" href='../index' />
                    <a href="/login"><img src="/Assets/BackArrow.png" href='../index' /></a>
                    <h1>Tacticas</h1>
                </div>
                <div className="buttons">
                    <SectorNav>
                    <img src="/Assets/Share-icon.png" />
                    <p>Compartir</p>
                    </SectorNav>
                    <SectorNav>
                        <img src="/Assets/Save-icon.png"/>
                        <p>Guardar</p>
                    </SectorNav>
                </div>
            </Navbar>
        <Container>
          <Sidebar>
            <div>
              <img src="/Assets/Player-icon.png" />
            </div>
            <div>
              <img src="/Assets/Ball-icon.png" />
            </div>
            <div>
              <img src="/Assets/Line-icon.png" /> 
            </div> 
            <div>
              <img src="/Assets/Shape-icon.png" />
            </div>
          </Sidebar> 
          <Court id="Court">
          </Court> 
          <>
                {jugadaData ? (
                <ReactPlayer url={jugadaData.videoFile} playing={true} controls={true}  width='100%' height='100%'/>
              ): ( 
                <p>no hay video</p>
                )}     
              </>
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
        </>
      )
   }
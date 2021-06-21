import {Layout, VideoPlayer} from '../containers'
import React, { useState, useEffect } from "react";
import Draggable from 'react-draggable';
import firebase from '../lib/fire';


export default function prueba() {
  //const [movimientos0, setmMvimientos0] = useState([{posx:397, posy:333},{posx:681, posy:164}]);
  const [movimientos0, setMovimientos0] = useState([]);
  const [movimientos1, setMovimientos1] = useState([]);
  const [movimientos2, setMovimientos2] = useState([]);
  const [movimientos3, setMovimientos3] = useState([]);
  const [movimientos4, setMovimientos4] = useState([]);
  const [players, setPlayers] = useState('');
  const [components, setComponents] = useState([]);
  const [jugada, setJugada] = useState([]);

  
  
  const RedDot = {
    height:"50px",
    width:"50px",
    borderRadius:"50px",
    backgroundColor:"#C4342C",
    color:"#FFF",
    fontSize: "20px",
    textAlign: "center"
  }
  
  
  const Widget = () => <Draggable
  id="0"
  handle=".handle"
  defaultPosition={{x: 0, y: 0}}
  grid={[1, 1]}
  scale={1}
  onStop={(event, data) => this.handleStop(1, event)}
  >
  <RedDot className="handle">
    <p></p>
  </RedDot>          
  </Draggable> ;


const getPlayers = () =>{
  jugada.forEach(function (user,i) {
    var node = document.createElement("div");
    var playerCreator = document.getElementById("layout").appendChild(node);
    playerCreator.setAttribute('id',i);
    playerCreator.setAttribute('class',"RedDot");

  });
}



//https://tesis-37b65-default-rtdb.firebaseio.com/users/0/x3mvAyACoIPwW1f5FFoeUGQWtuB2/plays/3/animations

useEffect(() => {
  const fetchData = async () => {
      try {
          const { data } = await firebase.database().ref(`users/0/x3mvAyACoIPwW1f5FFoeUGQWtuB2/plays/3/animations`).once('value').then((snapshot) => {
            var username = (snapshot.val())|| 'Anonymous';               
            setMovimientos0(username[0]);
            setMovimientos1(username[1]);
            setMovimientos2(username[2]);
            setMovimientos3(username[3]);
            setMovimientos4(username[4]);
            setJugada(username);
            getPlayers();
          });
      } catch (error) {
          console.error("este es mi error", error);
      }
  };
  fetchData();
}, []);


//animacion de los jugadores
const play = () => {
//console.log(jugada);
getPlayers();
 const intervaloMov = 1000;
 console.log('--------Play mode!-------')
 var player0 = document.getElementById("0");
 var player1 = document.getElementById("1");
 var player2 = document.getElementById("2");
 var player3 = document.getElementById("3");
 var player4 = document.getElementById("4");

//  movimientos0.forEach((movimiento,index) => {
//      setTimeout(() => {
//          console.log("0 === POS X: ", movimiento.posx, "POS Y", movimiento.posy );
//          player0.style.transition= "transform 0.5s linear";
//           player0.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
//        }, intervaloMov * (index + 1));
//  });

//  movimientos1.forEach((movimiento,index) => {
//    setTimeout(() => {
//        console.log("1 === POS X: ", movimiento.posx, "POS Y", movimiento.posy );
//        player1.style.transition= "transform 0.5s linear";
//        player1.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
//      }, intervaloMov * (index + 1));
// });



// movimientos2.forEach((movimiento,index) => {
//  setTimeout(() => {
//      console.log("2 === POS X: ", movimiento.posx, "POS Y", movimiento.posy );
//      player2.style.transition= "transform 0.5s linear";
//      player2.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
//    }, intervaloMov * (index + 1));
// });
// movimientos3.forEach((movimiento,index) => {
//  setTimeout(() => {
//      console.log("3 === POS X: ", movimiento.posx, "POS Y", movimiento.posy );
//      player3.style.transition= "transform 0.5s linear";
//      player3.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
//    }, intervaloMov * (index + 1));
// });
// movimientos4.forEach((movimiento,index) => {
//  setTimeout(() => {
//      console.log("4 === POS X: ", movimiento.posx, "POS Y", movimiento.posy );
//      player4.style.transition= "transform 0.5s linear";
//      player4.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
//    }, intervaloMov * (index + 1));
// });  
}
const handleClick = () =>{
  
  
}
  return (
    
    <Layout>
      <VideoPlayer />
    </Layout>
    
  )
  
}
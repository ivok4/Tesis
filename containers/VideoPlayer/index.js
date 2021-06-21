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




export default function VideoPlayer() {
  const [movimientos0, setMovimientos0] = useState([]);
  const [movimientos1, setMovimientos1] = useState([]);
  const [movimientos2, setMovimientos2] = useState([]);
  const [movimientos3, setMovimientos3] = useState([]);
  const [movimientos4, setMovimientos4] = useState([]);
  const [players, setPlayers] = useState('');
  const [components, setComponents] = useState([]);
  const [jugada, setJugada] = useState([]);

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
  
  // const RedDot = {
  //   height:"50px",
  //   width:"50px",
  //   borderRadius:"50px",
  //   backgroundColor:"#C4342C",
  //   color:"#FFF",
  //   fontSize: "20px",
  //   textAlign: "center"
  // }
  
 const getPlayers = () =>{
  jugada.forEach(function (user,i) {
    var node = document.createElement("RedDot");
    var playerCreator = document.getElementById("Court").appendChild(node);
    node.setAttribute('id',i);
    node.setAttribute('className',"RedDot");
    node.classList.add("RedDot");
  });
}

//animacion de los jugadores
 const play = () => {
    getPlayers();
//   const intervaloMov = 1000;
//   console.log('--------Play mode!-------')
//   var player0 = document.getElementById("0");
//   var player1 = document.getElementById("1");
//   var player2 = document.getElementById("2");
//   var player3 = document.getElementById("3");
//   var player4 = document.getElementById("4");

//   this.state.movimientos0.forEach((movimiento,index) => {
//       setTimeout(() => {
//           console.log("0 === POS X: ", movimiento.posx, "POS Y", movimiento.posy );
//           player0.style.transition= "transform 0.5s linear";
//            player0.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
//         }, intervaloMov * (index + 1));
//   });
//   console.log('------Movimientos: ----' + this.state.styleMovimientos0); 

//   this.state.movimientos1.forEach((movimiento,index) => {
//     setTimeout(() => {
//         console.log("1 === POS X: ", movimiento.posx, "POS Y", movimiento.posy );
//         player1.style.transition= "transform 0.5s linear";
//         player1.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
//       }, intervaloMov * (index + 1));
// });

// console.log('------Movimientos: ----' + this.state.styleMovimientos1); 


// this.state.movimientos2.forEach((movimiento,index) => {
//   setTimeout(() => {
//       console.log("2 === POS X: ", movimiento.posx, "POS Y", movimiento.posy );
//       player2.style.transition= "transform 0.5s linear";
//       player2.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
//     }, intervaloMov * (index + 1));
// });
// this.state.movimientos3.forEach((movimiento,index) => {
//   setTimeout(() => {
//       console.log("3 === POS X: ", movimiento.posx, "POS Y", movimiento.posy );
//       player3.style.transition= "transform 0.5s linear";
//       player3.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
//     }, intervaloMov * (index + 1));
// });
// this.state.movimientos4.forEach((movimiento,index) => {
//   setTimeout(() => {
//       console.log("4 === POS X: ", movimiento.posx, "POS Y", movimiento.posy );
//       player4.style.transition= "transform 0.5s linear";
//       player4.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
//     }, intervaloMov * (index + 1));
// });  
}
//fin de la animacion de los jugadores

//pasar la funcion del rectangulo

    return(
      <>
        <Container>
          <Sidebar>
           
          </Sidebar> 
         
          <Court id="Court">

          </Court>
                <>
                {jugada ? (
                <ReactPlayer url={jugada.videoFile} playing={true} controls={true}  width='100%' height='100%'/>
              ): ( 
                <p style={{color: "white", textAlign: "center"}}>no hay video</p>
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
            
          </AnimatorBar>
        </Container>
        </>
      )
   }
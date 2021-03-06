//import React from 'react';
import React, { useRef, useEffect } from 'react';
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
SectorNav,
BallDot,
BlueDot,
AnimatorBarContainer
} from './styled'


const Widget = () => <Draggable
id="0"
handle=".handle"
defaultPosition={{x: 0, y: 0}}
grid={[1, 1]}
scale={1}
onStop={(event, data) => this.handleStop(1, event)}
>
<RedDot className="handle">
  <p>{i}</p>
</RedDot>          
</Draggable> ;


const rivalWidget = () => <Draggable
id="0"
handle=".handle"
defaultPosition={{x: 0, y: 0}}
grid={[1, 1]}
scale={1}
onStop={(event, data) => this.handleStop(1, event)}
>
<RedDot className="handle">
  <p>{i}</p>
</RedDot>          
</Draggable> ;


const BallWidget = () => <Draggable
id="Ball"
handle=".handle"
defaultPosition={{x: 0, y: 0}}
grid={[1, 1]}
scale={1}
onStop={(event, data) => this.handleStop(1, event)} 
>
<Ball className="handle">
  <p>Ball</p>
</Ball>          
</Draggable> ;

 const SquareShape = () =>   <div class="resize both">Resize me!</div>

class EdicionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movimientos0: [],
      movimientos1: [],
      movimientos2: [],
      movimientos3: [],
      movimientos4: [],
      styleMovimientos0: [],
      styleMovimientos1: [],
      styleMovimientos2: [],
      styleMovimientos3: [],
      styleMovimientos4: [],
      movimientosB0:[],
      movimientosB1:[],
      movimientosB2:[],
      movimientosB3:[],
      movimientosB4:[],
      movimientosBall:[],
      ownPlayers: [],
      rivalPlayers:[],
      shapes: [],
      Ball:[],
      positions: 0,
      userId: '',
      };
  }  
  
  renderPlayer() {
    if(this.state.ownPlayers.length < 5){
    const newComponents = [...this.state.ownPlayers, Widget];
    this.setState({
      ownPlayers: newComponents
    });
    }else{
      alert("no more players"); 
    }  
    
  }
  renderRivalPlayer() {
    if(this.state.rivalPlayers.length < 5){
    const newComponents = [...this.state.rivalPlayers, rivalWidget];
    this.setState({
      rivalPlayers: newComponents
    });
    }else{
      alert("no more players"); 
    }  
    
  }
  renderBall() {
    console.log("Ball was clicked");
    if(this.state.Ball.length < 1){
      const newComponents = [...this.state.Ball, BallWidget];
      this.setState({
        Ball: newComponents
      });
      }else{
        alert("no more balls"); 
      }  
  }


  renderSquare() {
    console.log("Square was clicked");
    const newShapes = [...this.state.shapes, SquareShape];
    this.setState({
      shapes: newShapes
    });
  }

  handlePositions() {
    //setInterval para la animacion
    const newPositions = [...this.state.positions];

    this.setState({
      positions: newPositions
    });  
    console.log(positions);
  }

//animacion de los jugadores
 play = () => {
  const intervaloMov = 1000;
  console.log('--------Play mode!-------')
  var player0 = document.getElementById("0");
  var player1 = document.getElementById("1");
  var player2 = document.getElementById("2");
  var player3 = document.getElementById("3");
  var player4 = document.getElementById("4");
  var rival0 = document.getElementById("b-0");
  var rival1 = document.getElementById("b-1");
  var rival2 = document.getElementById("b-2");
  var rival3 = document.getElementById("b-3");
  var rival4 = document.getElementById("b-4");
  var ball = document.getElementById("Ball");


  this.state.movimientos0.forEach((movimiento,index) => {
      setTimeout(() => {
          console.log("0 === POS X: ", movimiento.posx, "POS Y", movimiento.posy );
          player0.style.transition= "transform 0.5s linear";
           player0.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
        }, intervaloMov * (index + 1));
  });
  console.log('------Movimientos: ----' + this.state.styleMovimientos0); 

  this.state.movimientos1.forEach((movimiento,index) => {
    setTimeout(() => {
        console.log("1 === POS X: ", movimiento.posx, "POS Y", movimiento.posy );
        player1.style.transition= "transform 0.5s linear";
        player1.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
      }, intervaloMov * (index + 1));
});

console.log('------Movimientos: ----' + this.state.styleMovimientos1); 


this.state.movimientos2.forEach((movimiento,index) => {
  setTimeout(() => {
      console.log("2 === POS X: ", movimiento.posx, "POS Y", movimiento.posy );
      player2.style.transition= "transform 0.5s linear";
      player2.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
    }, intervaloMov * (index + 1));
});
this.state.movimientos3.forEach((movimiento,index) => {
  setTimeout(() => {
      console.log("3 === POS X: ", movimiento.posx, "POS Y", movimiento.posy );
      player3.style.transition= "transform 0.5s linear";
      player3.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
    }, intervaloMov * (index + 1));
});
this.state.movimientos4.forEach((movimiento,index) => {
  setTimeout(() => {
      console.log("4 === POS X: ", movimiento.posx, "POS Y", movimiento.posy );
      player4.style.transition= "transform 0.5s linear";
      player4.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
    }, intervaloMov * (index + 1));
});  
this.state.movimientosB0.forEach((movimiento,index) => {
  setTimeout(() => {
      console.log("4 === POS X: ", movimiento.posx, "POS Y", movimiento.posy );
      rival0.style.transition= "transform 0.5s linear";
      rival0.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
    }, intervaloMov * (index + 1));
});  
this.state.movimientosB1.forEach((movimiento,index) => {
  setTimeout(() => {
      console.log("4 === POS X: ", movimiento.posx, "POS Y", movimiento.posy );
      rival1.style.transition= "transform 0.5s linear";
      rival1.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
    }, intervaloMov * (index + 1));
}); 
this.state.movimientosB2.forEach((movimiento,index) => {
  setTimeout(() => {
      console.log("4 === POS X: ", movimiento.posx, "POS Y", movimiento.posy );
      rival2.style.transition= "transform 0.5s linear";
      rival2.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
    }, intervaloMov * (index + 1));
}); 
this.state.movimientosB3.forEach((movimiento,index) => {
  setTimeout(() => {
      console.log("4 === POS X: ", movimiento.posx, "POS Y", movimiento.posy );
      rival3.style.transition= "transform 0.5s linear";
      rival3.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
    }, intervaloMov * (index + 1));
}); 
this.state.movimientosB4.forEach((movimiento,index) => {
  setTimeout(() => {
      console.log("4 === POS X: ", movimiento.posx, "POS Y", movimiento.posy );
      rival4.style.transition= "transform 0.5s linear";
      rival4.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
    }, intervaloMov * (index + 1));
});
this.state.movimientosBall.forEach((movimiento,index) => {
  setTimeout(() => {
      console.log("4 === POS X: ", movimiento.posx, "POS Y", movimiento.posy );
      ball.style.transition= "transform 0.5s linear";
      ball.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
    }, intervaloMov * (index + 1));
});  
}
//fin de la animacion de los jugadores

//pasar la funcion del rectangulo
createRectangulo = () => {
  const r1Info = { x: 20, y: 30, w: 100, h: 50 };
  const r1Style = { borderColor: 'red', borderWidth: 10 };
 drawRect(r1Info, r1Style);
}

 //save info in database
 handleSaveClck = () => {
  const own = [
    this.state.movimientos0,
    this.state.movimientos1,
    this.state.movimientos2,
    this.state.movimientos3,
    this.state.movimientos4
  ]
  const rivals = [
    this.state.movimientosB0,
    this.state.movimientosB1,
    this.state.movimientosB2,
    this.state.movimientosB3,
    this.state.movimientosB4
  ]
  const ball = [
    this.state.movimientosBall
  ]
  //console.log(savePlay);
  //---------HACER PUSH DE LA JUGADA A FIREBASE-----------------

  var ref = firebase.database().ref(`/users/0/${this.props.userId}/plays/`);

  var blast = ref.child(this.props.playId); //recibe el valor de iteracion, que es igual al id del "animal" en la base de datos
        blast.update({ //actualiza la data.
          //"animations": savePlay
          animations : {
          "own": own,
          "rivals": rivals,
          "ball" : ball
        }
        });
}


handlePositionClick = () =>{
  console.log("poisiton click");
  this.state.positions += 1;
  const self = this;
  let stateUpdates = {};
  this.state.ownPlayers.forEach((player,i) => { 
    var player = document.getElementById(i);
    var style = window.getComputedStyle(player);
    var matrix = new WebKitCSSMatrix(style.transform);
    let posy = matrix.f;
    let posx = matrix.m41;
    stateUpdates = {posy,posx}
    //guardar las posiciones en el state  
          switch (i) {
              case 0:
                self.setState({movimientos0: [...self.state.movimientos0, stateUpdates]}); 
              break;
              case 1:
                this.setState({movimientos1: [...this.state.movimientos1, stateUpdates]});
                break;
              case 2:
                this.setState({movimientos2: [...this.state.movimientos2, stateUpdates]});
                  break;
              case 3:
                this.setState({movimientos3: [...this.state.movimientos3, stateUpdates]});
                  break;
              case 4:
                this.setState({movimientos4: [...this.state.movimientos4, stateUpdates]});
                  break;    
              default:
                  break;
          }  
  });

  this.state.rivalPlayers.forEach((player,i) => {
    var player = document.getElementById(`b-${i}`);
    var style = window.getComputedStyle(player);
    var matrix = new WebKitCSSMatrix(style.transform);
    let posy = matrix.f;
    let posx = matrix.m41;
    stateUpdates = {posy,posx}
    //guardar las posiciones en el state  
          switch (i) {
              case 0:
                self.setState({movimientosB0: [...self.state.movimientosB0, stateUpdates]}); 
              break;
              case 1:
                this.setState({movimientosB1: [...this.state.movimientosB1, stateUpdates]});
                break;
              case 2:
                this.setState({movimientosB2: [...this.state.movimientosB2, stateUpdates]});
                  break;
              case 3:
                this.setState({movimientosB3: [...this.state.movimientosB3, stateUpdates]});
                  break;
              case 4:
                this.setState({movimientosB4: [...this.state.movimientosB4, stateUpdates]});
                  break;    
              default:
                  break;
          }  
  });
  
  this.state.Ball.forEach((ballmovement,i) => {
    var ball = document.getElementById("Ball");
    var style = window.getComputedStyle(ball);
    var matrix = new WebKitCSSMatrix(style.transform);
    let posy = matrix.f;
    let posx = matrix.m41;
    stateUpdates = {posy,posx}
          switch (i) {
              case 0:
                self.setState({movimientosBall: [...self.state.movimientosBall, stateUpdates]}); 
              break;     
              default:
                  break;
          }  
  });
  this.renderPositions();
  }

   renderPositions = () => {
   // for(var x=1; x<this.state.positions; x++) {
      var board = document.createElement('div');
      board.classList.add("positionNumber"); 
      board.innerHTML = `
      <p>${this.state.positions}</p>
      <img src="/Assets/AnimPos-icon.svg"/>  
     `;
      document.getElementById('positions-container').appendChild(board);
    //}
  }

   render(){
    const { ownPlayers, rivalPlayers, shapes, Ball, positions} = this.state; 
    const jugada = this.props.jugada;
    //console.log(jugada);
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
                    <SectorNav onClick={this.handleSaveClck}>
                        <img src="/Assets/Save-icon.png"/>
                        <p>Guardar</p>
                    </SectorNav>
                </div>
            </Navbar>
        <Container>
          <Sidebar>
            <div
            onClick={this.renderPlayer.bind(this)}
            >
              <img src="/Assets/Player-icon.png" />
            </div>
            <div
            onClick={this.renderRivalPlayer.bind(this)}
            >
              <img src="/Assets/Player-icon.png" />
            </div>
            <div
            onClick={this.renderBall.bind(this)}
            >
              <img src="/Assets/Ball-icon.png"/>
            </div>
            <div>
              <img src="/Assets/Line-icon.png" /> 
            </div> 
            <div onClick={this.renderSquare.bind(this)}>
              <img src="/Assets/Shape-icon.png" />
            </div>
          </Sidebar> 
         
          <Court>
              {ownPlayers.length !== 0 &&
              ownPlayers.map((Widget, i) => <Draggable
              id="0"
              handle=".handle"
              defaultPosition={{x: 0, y: 0}}
              position={null} 
              grid={[1, 1]}
              scale={1} 
              >
              <RedDot className="handle" id={i}>
                <p>{i+1}</p>
              </RedDot>          
            </Draggable>
            )}
            {rivalPlayers.length !== 0 &&
              rivalPlayers.map((Widget, i) => <Draggable
              id="0"
              handle=".handle"
              defaultPosition={{x: 0, y: 0}}
              position={null} 
              grid={[1, 1]}
              scale={1} 
              >
              <BlueDot className="handle" id={`b-${i}`}>
                <p>{i+1}</p>
              </BlueDot>          
            </Draggable>
            )}
            {shapes.length !== 0 &&
            shapes.map((SquareShape, i) => <Draggable 
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}           
            >
              <Square id={i} className="handle">
                <div className="tr-transform__scale-point--br"></div>
              </Square>
            </Draggable>)}  
            {Ball.length !== 0 &&
            Ball.map((BallShape, i) => <Draggable
            id="Ball"
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}
            position={null} 
            grid={[1, 1]}
            scale={1} 
            >
            <BallDot className="handle" id="Ball">
            </BallDot>          
          </Draggable>
            )}  
                </Court>
                <>
                {jugada ? (
                <ReactPlayer url={jugada.videoFile} playing={true} controls={true}  width='100%' height='100%'/>
              ): ( 
                <p>no hay video</p>
                )}     
              </>
          <div></div>
          <AnimatorBar>
            <p>Controles</p>
            <AnimatorBarContainer
            onClick={this.play}
            >
              <img src="/Assets/Play-icon.svg" />
            </AnimatorBarContainer>
            <AnimatorBarContainer>
              <p>2X</p>
            </AnimatorBarContainer>
            <AnimatorBarContainer>
              <img src="/Assets/FullScreen-icon.svg"/>
            </AnimatorBarContainer>
            <AnimatorBarContainer id="positions-container"></AnimatorBarContainer>
            <div className="lastContainers"> 
              <p>Agregar posicion de la animaci??n -- </p>
            </div>
            <div className="lastContainers"               
            onClick={this.handlePositionClick} >
              <img src="/Assets/AddPos-icon.svg"/>
            </div>
          </AnimatorBar>
        </Container>
        </>
      )
   }
}

export default EdicionContainer

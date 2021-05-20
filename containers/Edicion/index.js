//import React from 'react';
import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import { Canvas } from '../../components';
import FreeTransform from 'react-free-transform'
import { ReactVideo } from "reactjs-media";



import {Container,
Court,
Sidebar,
RedDot,
AnimatorBar,
Square
} from './styled'


const Widget = () => <Draggable
id="0"
handle=".handle"
defaultPosition={{x: 0, y: 0}}
//position={this.position}
grid={[1, 1]}
scale={1}
//onStop={(event, data) => this.handleMovUpdate(1, event)}
onStop={(event, data) => this.handleStop(1, event)}
>
<RedDot className="handle">
  <p>{i}</p>
</RedDot>          
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
      components: [],
      shapes: [],
      positions: []
      };
  }  
  //--------BASE DE OBTENER LAS POSICIONES DE LOS CIRCULOS--------------

//    getTranslateValues () {
//     console.log("probando: ");

//     var name = document.getElementById("0");
//     const style = window.getComputedStyle(name)
//     const matrix = style['transform'] || style.webkitTransform || style.mozTransform
  
//     // No transform property. Simply return 0 values.
//     if (matrix === 'none') {
//       return {
//         x: 0,
//         y: 0,
//         z: 0
//       }
//     }
  
//     // Can either be 2d or 3d transform
//     const matrixType = matrix.includes('3d') ? '3d' : '2d'
//     const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ')
  
//     // 2d matrices have 6 values
//     // Last 2 values are X and Y.
//     // 2d matrices does not have Z value.
//     if (matrixType === '2d') {
// //--------GUARDAR X E Y EN STATE-----------
//       const newPos = {
//         posx: Math.round(matrixValues[4]),
//         posy: Math.round(matrixValues[5])
//       }
     
//         this.setState({movimientos0: [...this.state.movimientos0, newPos]});
       


//       // return {
//       //   x: matrixValues[4],
//       //   y: matrixValues[5],
//       //   z: 0
//       // }
//       console.log(this.state.movimientos0);
//     }
//     //console.log("transform values: " + x,y);

//     // 3d matrices have 16 values
//     // The 13th, 14th, and 15th values are X, Y, and Z
//     // if (matrixType === '3d') {
//     //   return {
//     //     x: matrixValues[12],
//     //     y: matrixValues[13],
//     //     z: matrixValues[14]
//     //   }
//     // }
//   }

//--------FIN DE LA BASE DE OBTENER LAS POSICIONES DE LOS CIRCULOS--------------

  renderWidget() {
    if(this.state.components.length < 5)     {
    console.log("I was clicked");

    const newComponents = [...this.state.components, Widget];

    this.setState({
      components: newComponents
    });
    }else{
      alert("no more players"); 
    }  
  }

  renderSquare() {
    console.log("Square was clicked");

    const newShapes = [...this.state.shapes, SquareShape];

    this.setState({
      shapes: newShapes
    });
   console.log(this.state.shapes);
  }

  handlePositions() {

    //setInterval para la animacion
    const newPositions = [...this.state.positions];

    this.setState({
      positions: newPositions
    });  
    console.log(positions);
  }
  handleStop(event, data) {
    console.log("handle stop data: "+ data)
    //console.log(this.id)
    //console.log(id +" pos: " + data.x + " ," + data.y);
  }

   handleMovUpdate = (move, event) => {
var player = document.getElementById(move);
const style = window.getComputedStyle(player)
const matrix = style['transform'] || style.webkitTransform || style.mozTransform

// No transform property. Simply return 0 values.
if (matrix === 'none') {
  return {
    x: 0,
    y: 0,
    z: 0
  }
}

// Can either be 2d or 3d transform
const matrixType = matrix.includes('3d') ? '3d' : '2d'
const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ')

// 2d matrices have 6 values
// Last 2 values are X and Y.
// 2d matrices does not have Z value.
if (matrixType === '2d') {
//--------GUARDAR X E Y EN STATE-----------
  const newPos = {
    posx: Math.round(matrixValues[4]),
    posy: Math.round(matrixValues[5])
  }

    switch (move) {
        case 0:
         this.setState({movimientos0: [...this.state.movimientos0, newPos]});
        break;
        case 1:
          this.setState({movimientos1: [...this.state.movimientos1, newPos]});
          break;
        case 2:
          this.setState({movimientos2: [...this.state.movimientos2, newPos]});
            break;
        case 3:
          this.setState({movimientos3: [...this.state.movimientos3, newPos]});
            break;
        case 4:
          this.setState({movimientos4: [...this.state.movimientos4, newPos]});
            break;
    
        default:
            break;
    }  
  }
    console.log(this.state.movimientos0);

}
//animacion de los jugadores
 play = () => {
  const intervaloMov = 3000;
  console.log('--------Play mode!-------')
  var player0 = document.getElementById("0");
  var player1 = document.getElementById("1");
  var player2 = document.getElementById("2");
  var player3 = document.getElementById("3");
  var player4 = document.getElementById("4");


  this.state.movimientos0.forEach((movimiento,index) => {
      setTimeout(() => {
          console.log("0 === POS X: ", movimiento.posx, "POS Y", movimiento.posy );
          player0.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
        }, intervaloMov * (index + 1));
  });
  console.log('------Movimientos: ----' + this.state.styleMovimientos0); 

  this.state.movimientos1.forEach((movimiento,index) => {
    setTimeout(() => {
        console.log("1 === POS X: ", movimiento.posx, "POS Y", movimiento.posy );
        player1.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
      }, intervaloMov * (index + 1));
});

console.log('------Movimientos: ----' + this.state.styleMovimientos1); 

this.state.movimientos2.forEach((movimiento,index) => {
  setTimeout(() => {
      console.log("2 === POS X: ", movimiento.posx, "POS Y", movimiento.posy );
      player2.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
    }, intervaloMov * (index + 1));
});
this.state.movimientos3.forEach((movimiento,index) => {
  setTimeout(() => {
      console.log("3 === POS X: ", movimiento.posx, "POS Y", movimiento.posy );
      player3.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
    }, intervaloMov * (index + 1));
});
this.state.movimientos4.forEach((movimiento,index) => {
  setTimeout(() => {
      console.log("4 === POS X: ", movimiento.posx, "POS Y", movimiento.posy );
      player4.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
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

   render(){
    const { components, shapes} = this.state;

    return(
        <Container>
          <Sidebar>
            <div
            onClick={this.renderWidget.bind(this)}
            >
              <img src="/assets/Player-icon.png" />
            </div>
            <div
            onClick={this.createPlayer}
            >
              <img src="/assets/Ball-icon.png" />
            </div>
            <div>
              <img src="/assets/Line-icon.png" /> 
            </div> 
            <div onClick={this.renderSquare.bind(this)}>
              <img src="/assets/Shape-icon.png" />
            </div>
          </Sidebar> 
          <Court>
            {/* {components.length !== 0 &&
              components.map((Widget, i) => <Widget key={i} />)}  */}
              {components.length !== 0 &&
              components.map((Widget, i) => <Draggable 
              id="0"
              handle=".handle"
              defaultPosition={{x: 0, y: 0}}
              //position={position}
              position={null} 
              grid={[1, 1]}
              scale={1} 
              onStop={(event, data) => this.handleMovUpdate(i, event)} 
              //onStop={(event, data) => this.getTranslateValues(i, data)} 
              >
              <RedDot className="handle" id={i}>
                <p>{i+1}</p>
              </RedDot>          
            </Draggable>)}  
             {/* {shapes.length !== 0 &&
            shapes.map((SquareShape, i) => <Square id={i}/>)}   */}
            {shapes.length !== 0 &&
            shapes.map((SquareShape, i) => <Draggable 
            handle=".handle"
            defaultPosition={{x: 0, y: 0}}           
            >
              <Square id={i} className="handle">
                <div className="tr-transform__scale-point--br"></div>
              </Square>
            </Draggable>)}  
            
                  {/* base del draggable  
                  <Draggable
                  id="0"
                  handle=".handle"
                  defaultPosition={{x: 0, y: 0}}
                  position={this.position}
                  grid={[1, 1]}
                  scale={1}
                  onStop={(event, data) => this.handleMovUpdate(1, event)}
                  >
                  <RedDot className="handle"></RedDot>          
                </Draggable>*/}
{/* 
<FreeTransform    
    x={0}
    y={0}
    width={100}
    height={100}
    scaleX={1}
    scaleY={1}
    angle={0}
    onUpdate={({x, y, scaleX, scaleY}) => {}}
    classPrefix="tr"
    disableScale={false}
 >
 </FreeTransform> */}

            
                </Court>
          <div></div>
          <AnimatorBar>
            <p>Controles</p>
            <div
            onClick={this.play}
            >
              <img src="/assets/Play-icon.svg" />
            </div>
            <div>
              <p>2X</p>
            </div>
            <div>
              <img src="/assets/FullScreen-icon.svg"/>
            </div>
            <div>
              {/*<p>1</p>
               <img src="/assets/AnimPos-icon.svg"/> */}
               {/* {
              positions.map((Widget, i) => <p>1</p>)}  */}
            </div>
            <div>
              <p>Agregar posicion de la animación -- </p>
            </div>
            <div>
              <img src="/assets/AddPos-icon.svg"
              />
            </div>
          </AnimatorBar>
        </Container>
        
      ) 
 
   }
}

export default EdicionContainer
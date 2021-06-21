//import React from 'react';
import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import { Canvas } from '../../components';
import FreeTransform from 'react-free-transform'
import ReactPlayer from 'react-player'
import {Container,
Court,
Sidebar,
RedDot,
AnimatorBar,
Square,
Navbar,
SectorNav
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

 const SquareShape = () =>   <div class="resize both">Resize me!</div>


class EdicionTestContainer extends React.Component {
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
      positions: [],
      canvasState: "false",
      };
  }  
  
  renderWidget() {
    if(this.state.components.length < 5){
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
  }

   handleMovUpdate = (move, event) => {
var player = document.getElementById(move);
const style = window.getComputedStyle(player);
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
}
//fin de la animacion de los jugadores

//pasar la funcion del rectangulo
createRectangulo = () => {
  const r1Info = { x: 20, y: 30, w: 100, h: 50 };
  const r1Style = { borderColor: 'red', borderWidth: 10 };
 drawRect(r1Info, r1Style);
}





//PRUBAS DE GRABACION DE VIDEO

// handleClick = () =>{
// //   var canvas =  document.createElement("canvas");
// //    document.getElementById("court").appendChild(canvas);
// //    canvas.setAttribute('id','canvas');


// // var x = 0;
// // this.anim();
// // this.startRecording();
// console.log("apreto boton");
// navigator.mediaDevices.getUserMedia({
//   video: true,
//   audio: true
// }).then(async function(stream) {
//   console.log("async function");
//   let recorder = RecordRTC(stream, {
//       type: 'video'
//   });
//   console.log("empezo la grabacion");
//   recorder.startRecording();

//   const sleep = m => new Promise(r => setTimeout(r, m));
//   await sleep(3000);

//   recorder.stopRecording(function() {
//       let blob = recorder.getBlob();
//       invokeSaveAsDialog(blob);
//   });
// });

// }
//  startRecording = () =>{
//   const chunks = []; // here we will store our recorded media chunks (Blobs)
//   const stream = canvas.captureStream(); // grab our canvas MediaStream
//   const rec = new MediaRecorder(stream); // init the recorder
//   // every time the recorder has new data, we will store it in our array
//   rec.ondataavailable = e => chunks.push(e.data);
//   // only when the recorder stops, we construct a complete Blob from all the chunks
//   rec.onstop = e => this.exportVid(new Blob(chunks, {type: 'video/webm'}));
  
//   rec.start();
//   setTimeout(()=>rec.stop(), 3000); // stop recording in 3s
// }

//  exportVid = (blob) =>{
//   const vid = document.createElement('video');
//   vid.src = URL.createObjectURL(blob);
//   vid.controls = true;
//   document.body.appendChild(vid);
//   const a = document.createElement('a');
//   a.download = 'myvid.webm';
//   a.href = vid.src;
//   a.textContent = 'download the video';
//   document.body.appendChild(a);
// }

//  anim = () =>{
//   //console.log("guardado");
//    //const ctx = canvas.getContext('2d');
//   // var x = 0;
//   // x = (x + 1) % canvas.width;
//   // ctx.fillStyle = none;
//   // ctx.fillRect(0,0,canvas.width,canvas.height);
//   // ctx.fillStyle = 'red';
//   // ctx.fillRect(x - 20, 0, 40, 40);
//   // requestAnimationFrame(this.anim);


//    const ctx = canvas.getContext('2d');


//    const intervaloMov = 3000;

//    var player0 = document.getElementById("0"); 
  
//   this.state.movimientos0.forEach((movimiento,index) => {
//     setTimeout(() => {
//       console.log("guardado");
//         console.log("0 === POS X: ", movimiento.posx, "POS Y", movimiento.posy );
//         player0.style.transition= "transform 0.5s linear";
//         //player0.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
        
//         ctx.fillStyle = 'red';
//         ctx.fillRect(0, 0, 15, 15);
//         ctx.translate(`${movimiento.posx}px`, `${movimiento.posy}px`);
//         console.log(ctx);
//       }, intervaloMov * (index + 1));
// });



// // // Moved square
// // ctx.translate(110, 30);
// // ctx.fillStyle = 'red';
// // ctx.fillRect(0, 0, 80, 80);

// // // Reset current transformation matrix to the identity matrix
// // ctx.setTransform(1, 0, 0, 1, 0, 0);

// // // Unmoved square
// // ctx.fillStyle = 'gray';
// // ctx.fillRect(0, 0, 80, 80);
  
// }

 handleClick = () =>{
 var canvasCreator =  document.createElement("canvas");
document.getElementById("court").appendChild(canvasCreator);
canvasCreator.setAttribute('id','canvas');
  var canvas = document.querySelector("canvas");

  // Optional frames per second argument.
  var stream = canvas.captureStream(25);
  var recordedChunks = [];
  var x =0;

  
  var options = { mimeType: "video/webm; codecs=vp9" };
  const mediaRecorder = new MediaRecorder(stream, options);
  
  mediaRecorder.ondataavailable = handleDataAvailable;
  mediaRecorder.start();
  this.anim();
  
  function handleDataAvailable(event) {
    console.log("data-available");
    if (event.data.size > 0) {
      recordedChunks.push(event.data);
      console.log(recordedChunks);
      download();
    } else {
      // ...
    }
  }
  function download() {
    var blob = new Blob(recordedChunks, {
      type: "video/webm"
    });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    a.href = url;
    a.download = "test.webm";
    a.click();
    window.URL.revokeObjectURL(url);
  }
  
  // demo: to download after 9sec
  setTimeout(event => {
    console.log("stopping");
    mediaRecorder.stop();
  }, 9000);
  
}

 anim = () => {
  var x = this.state.movimientos0;
  console.log(x);
  const intervaloMov = 3000;
  console.log('--------Play mode!-------')
  var player0 = document.getElementById("0");

  this.state.movimientos0.forEach((movimiento,index) => { 
      setTimeout(() => {
          console.log("0 === POS X: ", movimiento.posx, "POS Y", movimiento.posy );
          //player0.style.transition= "transform 0.5s linear";
          //player0.style.transform = "translate("+movimiento.posx+"px, "+ movimiento.posy+"px)";
          var ctx = canvas.getContext("2d");
          ctx.beginPath();
          ctx.arc(movimiento.posx, movimiento.posy, 5, 0, 2 * Math.PI, false); 
          ctx.stroke();
          ctx.fillStyle = '#C4342C';
          ctx.fill();
          ctx.lineWidth = 0; 
          ctx.strokeStyle = '#C4342C';
          ctx.stroke();
          //ctx.moveTo(70, 70);
          requestAnimationFrame(this.anim);
        }, intervaloMov * (index + 1)); 
  });


  // var ctx = canvas.getContext("2d");
  // ctx.beginPath();
  // ctx.arc(100, 75, 5, 0, 2 * Math.PI);
  // ctx.stroke();
  // ctx.fillStyle = '#C4342C';
  // ctx.fill();
  // ctx.lineWidth = 0;
  // ctx.strokeStyle = '#C4342C';
  // ctx.stroke();
  // requestAnimationFrame(anim);
}

//FIN DE PRUEBAS DE GRABACION DE VIDEO




// recordAnimation = () => {
//   this.play();
//   if (navigator.mediaDevices.getUserMedia) {
//     var constraints = { audio: false, video: true };
//     var chunks = [];
  
//     var onSuccess = function(stream) {
//       var options = {
//         videoBitsPerSecond : 2500000,
//         mimeType : 'video/mp4'
//       }
//       var mediaRecorder = new MediaRecorder(stream,options);
//       m = mediaRecorder;
//       mediaRecorder.ondataavailable = e => chunks.push(e.data);
//       //mediaRecorder.onstop = e => exportVid(new Blob(chunks, {type: 'video/webm'}));
//       mediaRecorder.onstop = e => console.log("chunks");
//       mediaRecorder.start();
//       setTimeout(()=>mediaRecorder.stop(), 3000); // stop recording in 3s
//       console.log(chunks);
//     }
//     console.log(chunks);
//   }
// }
 handleSaveClck = () => {
  // const savePlay = [
  //   this.state.movimientos0,
  //   this.state.movimientos1,
  //   this.state.movimientos2,
  //   this.state.movimientos3,
  //   this.state.movimientos4
  // ]

 
  startRecording();
  recordAnimation();
  console.log(savePlay);
  //---------HACER PUSH DE LA JUGADA A FIREBASE-----------------
}

//  getTranslateX() {
//   var style = window.getComputedStyle(myElement);
//   var matrix = new WebKitCSSMatrix(style.transform);
//   console.log('translateX: ', matrix.m41);
// }

handlePositionClick = () =>{
console.log("poisiton click");
const self = this;
let stateUpdates = {};
this.state.components.forEach((player,i) => {
  var player = document.getElementById(i);
  var style = window.getComputedStyle(player);
  var matrix = new WebKitCSSMatrix(style.transform);
  let posy = matrix.f;
  let posx = matrix.m41;
  stateUpdates = {posy,posx}
  console.log('translateX: ', matrix.m41);
  console.log('translateY: ', matrix.f);
  //guardar las posiciones en el state  
  //self.setState({movimientos0: [...self.state.movimientos0, stateUpdates]}); 
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
console.log(this.state.movimientos0);
console.log(stateUpdates);
}

   render(){
    const { components, shapes} = this.state;
    const jugada = this.props.jugada;
    console.log(jugada);
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
                    <SectorNav onClick={this.handleClick} id="savebutton">
                        <img src="/Assets/Save-icon.png"/>
                        <p>Guardar</p>
                    </SectorNav>
                </div>
            </Navbar>
        <Container>
          <Sidebar>
            <div
            onClick={this.renderWidget.bind(this)}
            >
              <img src="/Assets/Player-icon.png" />
            </div>
            <div
            onClick={this.createPlayer}
            >
              <img src="/Assets/Ball-icon.png" />
            </div>
            <div>
              <img src="/Assets/Line-icon.png" /> 
            </div> 
            <div onClick={this.renderSquare.bind(this)}>
              <img src="/Assets/Shape-icon.png" />
            </div>
          </Sidebar>           
          <Court id="court">
              {components.length !== 0 &&
              components.map((Widget, i) => <Draggable
              id="0"
              handle=".handle"
              defaultPosition={{x: 0, y: 0}}
              position={null} 
              grid={[1, 1]}
              scale={1} 
              // onStop={(event, data) => this.handleMovUpdate(i, event)} 
              >
              <RedDot className="handle" id={i}>
                <p>{i+1}</p>
              </RedDot>          
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
            <div
            onClick={this.play}
            >
              <img src="/Assets/Play-icon.svg" />
            </div>
            <div>
              <p>2X</p>
            </div>
            <div>
              <img src="/Assets/FullScreen-icon.svg"/>
            </div>
            <div>
              {/*<p>1</p>
               <img src="/Assets/AnimPos-icon.svg"/> */}
               {/* {
              positions.map((Widget, i) => <p>1</p>)}  */}
            </div>
            <div>
              <p>Agregar posicion de la animación -- </p>
            </div>
            <div              
           onClick={(event) => this.handlePositionClick(event)} 
            //onClick={(event, data) => this.handleMovUpdate(0, event)} 
            >
              <img src="/Assets/AddPos-icon.svg"/>
            </div>
          </AnimatorBar>
        </Container>
        </>
      )
   }
}

export default EdicionTestContainer;

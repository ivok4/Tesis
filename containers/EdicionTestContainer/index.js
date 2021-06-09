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
startRecording () {
   
  // const chunks = []; // here we will store our recorded media chunks (Blobs)
   var canvas = document.querySelector("canvas");

   const stream = canvas.captureStream(); // grab our canvas MediaStream


  // const rec = new MediaRecorder(stream); // init the recorder
  // //mediaRecorder.requestData();
  // rec.start();
  // // every time the recorder has new data, we will store it in our array
  // rec.ondataavailable = e => chunks.push(e.data);
  // // only when the recorder stops, we construct a complete Blob from all the chunks
  
  
  // console.log(rec.state);
  // rec.onstop = e => this.exportVid(new Blob(chunks, {type: 'video/webm'})); 

  // setTimeout(()=>rec.stop(), 3000); // stop recording in 3s

//   console.log(chunks);
//   //console.log(canvas instanceof HTMLCanvasElement) para saber si hay canvas


if (navigator.mediaDevices.getUserMedia) {
  var constraints = { audio: false, video: true };
  var chunks = [];
  console.log("succes media");


  //var onSuccess = function(stream) {
    console.log("succes");
    var options = {
      audioBitsPerSecond : 0,
      videoBitsPerSecond : 2500000,
      mimeType : 'video/webm'
    }
    var mediaRecorder = new MediaRecorder(stream,options);
    //m = mediaRecorder;
    mediaRecorder.start();
    mediaRecorder.ondataavailable = function(e) {
      chunks.push(e.data);
    }

    mediaRecorder.onstop = function(e) {
      console.log("data available after MediaRecorder.stop() called.");
      var blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
      const vid = document.createElement('video'); 
      vid.src = URL.createObjectURL(blob);
      vid.controls = true;
      document.body.appendChild(vid);
      const a = document.createElement('a');
      a.download = 'myvid.webm'; 
      a.href = vid.src;
      a.textContent = 'download the video';
      document.body.appendChild(a);
      console.log("recorder stopped");
    };    
    setTimeout(()=>mediaRecorder.stop(), 3000); // stop recording in 3s
  }
//}

} 

exportVid  (blob)  {
  //  console.log(URL.createObjectURL(blob));
  //original
  var associatedBlob = BlobEvent.data
  console.log(associatedBlob)
  const vid = document.createElement('video'); 
  vid.src = URL.createObjectURL(blob);
  vid.controls = true;
  document.body.appendChild(vid);
  const a = document.createElement('a');
  a.download = 'myvid.webm'; 
  a.href = vid.src;
  a.textContent = 'download the video';
  document.body.appendChild(a);
}

recordAnimation = () => {
   var canvas =  document.createElement("canvas");
   document.getElementById("court").appendChild(canvas);
   canvas.setAttribute('id','canvas')

  this.play();
  this.startRecording();
  //$(div).remove();


  //   let isRecording= false,
  //    options= { mimeType: "video/webm; codecs=vp9" }
  //   const displayOptions= {
  //   video: {
  //     cursor: "always"
  //   },
  //   audio: false,

  //   },
  //   mediaRecorder= {},
  //   stream= {},
  //   recordedChunks= []
  

  //  const getStream = async() =>{
  //   try {
  //       this.stream =  await navigator.mediaDevices.getDisplayMedia(this.displayOptions);
  //       this.mediaRecorder = new MediaRecorder(this.stream, this.options);
  //       this.mediaRecorder.ondataavailable = this.handleDataAvailable;
  //       this.mediaRecorder.start();
  //       this.isRecording = true
  //       console.log(isRecording);
  //       //rec.onstop = e => this.exportVid(new Blob(chunks, {type: 'video/webm'})); 
  //       //setTimeout(()=>this.mediaRecorder.stop(), 3000); // stop recording in 3s

  //     } catch(err) {
  //       this.isRecording = false
  //       alert(err);
  //     }
  //   }
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
                    <SectorNav onClick={this.recordAnimation} id="savebutton">
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
              onStop={(event, data) => this.handleMovUpdate(i, event)} 
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
            <div>
              <img src="/Assets/AddPos-icon.svg"/>
            </div>
          </AnimatorBar>
        </Container>
        </>
      )
   }
}

export default EdicionTestContainer;

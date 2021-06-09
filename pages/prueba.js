import {Layout} from '../containers'
import React from "react";



export default function prueba() {

//     let isRecording= false,
//      options =  { mimeType: "video/webm; codecs=vp9" },
//     displayOptions= {
//     video: {
//       cursor: "always"
//     },
//     audio: {
//         echoCancellation: false,
//         noiseSuppression: false,
//         sampleRate: 44100
//       }
//     },
//     mediaRecorder= {},
//     stream= {},
//     recordedChunks= []
//   }

//   const downloadFunction =() =>{
//         var blob = new Blob(this.recordedChunks, {
//         type: "video/webm"
//       });
//     var url = URL.createObjectURL(blob);
//     var a = document.createElement("a");
//     document.body.appendChild(a);
//     a.style = "display: none";
//     a.href = url;
//     var d = new Date();
//     var n = d.toUTCString();
//     a.download = n+".webm";
//     a.click();
//     window.URL.revokeObjectURL(url);
//     this.recordedChunks = []
//     this.showNotification()
//     }
//     const  showNotification =()=> {
//       var img = '/logo.png';
//       var text = 'If you enjoyed this product consider donating!';
//       navigator.serviceWorker.getRegistration().then(function(reg) {
//         reg.showNotification('Screen Recorder', { body: text, icon: img, requireInteraction: true,
//         actions: [
//             {action: 'donate', title: 'Donate',icon: 'logo.png'},
//             {action: 'close', title: 'Close',icon: 'logo.png'}
//             ]
//               });
//       });
//     }
//     const handleDataAvailable = (event) =>{
//       if (event.data.size > 0) {
//         this.recordedChunks.push(event.data);
//         this.isRecording = false
//         this.download();
//       } else {
//         // ...
//       }
//     }
//     const  stopStream=()=> {
//       this.mediaRecorder.stop()
//     }
//     const getStream = async () => {
//     try {
//         this.stream =  await navigator.mediaDevices.getDisplayMedia(this.displayOptions);
//         this.mediaRecorder = new MediaRecorder(this.stream, this.options);
//         this.mediaRecorder.ondataavailable = this.handleDataAvailable;
//         this.mediaRecorder.start();
//         this.isRecording = true
//       } catch(err) {
//         this.isRecording = false
//         alert(err);
//       }
//     }
  

const boton = () => {

const canvas =  document.getElementById("canvas");
const ctx = canvas.getContext('2d');
var x = 0;
anim();
startRecording();

function startRecording() {
  const chunks = []; // here we will store our recorded media chunks (Blobs)
  const stream = canvas.captureStream(); // grab our canvas MediaStream
  const rec = new MediaRecorder(stream); // init the recorder
  // every time the recorder has new data, we will store it in our array
  rec.ondataavailable = e => chunks.push(e.data);
  // only when the recorder stops, we construct a complete Blob from all the chunks
  rec.onstop = e => exportVid(new Blob(chunks, {type: 'video/webm'}));
  
  rec.start();
  setTimeout(()=>rec.stop(), 5000); // stop recording in 3s
}

function exportVid(blob) {
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

function anim(){ 
  x = (x + 1) % canvas.width;
  ctx.fillStyle = 'white';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = 'black';
  ctx.fillRect(x - 20, 0, 40, 40);
  requestAnimationFrame(anim);
}

}
  return (
    <>
    <Layout>

        
      hola
      <button onClick={boton}></button>
      <canvas id="canvas"></canvas>

    </Layout>
    </>
  )
  
}
import React, { useState, useEffect } from "react";
import {Container,
  Grid,
  Sidebar,
  CreateProyectPopUp
} from './styled'
import { Cards } from '../../components';
import firebase from '../../lib/fire';
import {useAppContext} from '../../contexts/Auth';

const Grilla = () => {

  const [isActive, setShowPopUp] = useState('false');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [participantes, setParticipantes] = useState('');
  const [description, setDescription] = useState('');
  const [goals, setGoals] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [proyects, setProyects] = useState([]);
  const [playID, setPlayID] = useState(0);
  const [loader, setLoader] = useState(0);
  const  userInfo  = useAppContext();
  console.log(userInfo);


//HANDLE INPUTS DATA
const handleClickNewProyect = () =>{
  setShowPopUp('true');
}

const handleClickExitProyect = () =>{
  setShowPopUp('false');
}

const handleChangeName = (value) =>{
  setName(value);
}

const handleChangeCategory = (value) =>{
  setCategory(value);
}
const handleChangeParticipantes = (value) =>{
  setParticipantes(value);
}

const handleDescripcion = (value) =>{
  setDescription(value);
}
const handleChangeGoals = (value) =>{
  setGoals(value);
}

//----------GET PROYECTS FROM DATABSE-----------
useEffect(() => {
      const fetchData = async () => {
          try {
              const { data } = await firebase.database().ref('/users/0/' + userInfo.id).once('value').then((snapshot) => {
                var username = (snapshot.val())|| 'Anonymous';               
                setProyects(username);
                setIsLoading(false);
              }); 
              
          } catch (error) {
              console.error("este es mi error", error);
          }
      };
      fetchData();
  }, []);
//--------END PLAYS FROM DATA BASE-----------


//function to save file
function uploadFile(){
// Create a root reference
var storageRef = firebase.storage().ref();

// Create a reference to 'mountains.jpg'
var mountainsRef = storageRef.child(`${name}.mp4`);

// Create a reference to 'images/mountains.jpg'
var mountainImagesRef = storageRef.child('file.mp4');

//get the input file.
var file = document.getElementById('files').files[0];
//uploade the input file.
var uploadTask = storageRef.child(`${name}.mp4`).put(file, file);

uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
  function(snapshot) {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    setLoader(progress);
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function(error) {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
  
      case 'storage/canceled':
        // User canceled the upload
        break;

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
    }
  },  function() {
    // Upload completed successfully, now we can get the download URL
    if(proyects.plays != null) var PlayID = proyects.plays.length;
    else PlayID= 0;
    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
      console.log('File available at', downloadURL);
      firebase.database().ref(`/users/0/${userInfo.id}/plays/${PlayID}`).set({  //actualiza la data.  
        name: name,
      category: category,
      participantes : participantes,
      description: description,
      goals: goals,
        videoFile: downloadURL,
        });    
      resetForm();
      window.location.replace(`/editions/${PlayID}`); //go to edicion page
      });
  });
    //onSubmit();
    var loaderDiv = document.getElementById("Loader").style.display = "block";
}
//console.log(proyects.plays.length);

const onSubmit = () =>{
  var PlayID = proyects.plays.length;
  setPlayID(PlayID) ;
  //console.log(PlayID);
  //hace push de la jugada
    firebase.database().ref(`/users/0/${userInfo.id}/plays/${PlayID}`).set({  //actualiza la data.  
      name: name,
      category: category,
      participantes : participantes,
      description: description,
      goals: goals,
      videoFile: videoUrl,
      });
      resetForm();
      window.location.replace(`/editions/${PlayID}`); //go to edicion page
  }

//reseta los valores del state del formulario
function resetForm() {
  setShowPopUp('false');
  setName('');
  setCategory('');
  setParticipantes('');
  setDescription('');
  setGoals('');
  setVideoUrl('');
}

     return(
     <>
     <Container>  
          <CreateProyectPopUp className={isActive === 'true' ? "active" : "unactive"}>
              <div className="BlackBackground"/>
              <div className="PopUpContent">
              <div id="Loader" className="Loader">
                <p>Cargando: {loader}%</p>
              </div>
                <div className="PopUpTitle">
                  <h1>Nuevo ejercicio</h1>
                  </div>
                  <div className="PopUpContainer">
                    <p>Nombre</p>
                    <input className="inputName"
                        onChange={e => handleChangeName(e.currentTarget.value)}
                        />
                    <div className="dobleSection">
                      <div>
                        <p>Categoría</p>
                        <input
                          onInput={e => handleChangeCategory(e.currentTarget.value)}
                        />
                      </div>
                      <div>
                        <p>Participantes</p>
                        <input
                          onInput={e => handleChangeParticipantes(e.currentTarget.value)}
                        />
                      </div>
                      <div>
                        <p>Select video</p>
                        <label>                      
                        <input type="file" name="video" id="files" name="files[]" />
                        </label>
                      </div>
                    </div>
                  <p>Descripción</p>
                  <input className="inputDescription"
                    onInput={e => handleDescripcion(e.currentTarget.value)}
                  />
                  <p>Objetivos</p>
                  <input className="inputGoals"
                    onInput={e => handleChangeGoals(e.currentTarget.value)}
                  />
                  <div className="buttonSection">
                    <button onClick={handleClickExitProyect}>Atrás</button>
                    <button onClick={uploadFile}>Siguiente</button>
                  </div>
                </div>
              </div>
            </CreateProyectPopUp>
            <h1 className="titulo">Proyectos</h1>
          <Grid>
             <div className="NewProyect" onClick={handleClickNewProyect}>
                <p className="PlusIcon">+</p>
                <p>Proyecto nuevo</p>
             </div>
             {!proyects.plays ? ( 
              <p>Empeza a atrabajar</p>
             ):(
               <Cards/>
             )}
          </Grid>
        </Container>
        </>
        
    )
}

export default Grilla
import React, { useState } from "react";
import {Layout} from '../../containers'
import PropTypes from 'prop-types';
import firebase from '../../lib/fire';


import {Container,
    Grid,
    CreateProyectPopUp
  } from './styled'



export default function HomeContainer() {
  const [isActive, setShowPopUp] = useState('false');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [participantes, setParticipantes] = useState('');
  const [description, setDescription] = useState('');
  const [goals, setGoals] = useState('');
  const [videoFile, setVideoFile] = useState('');

  var userId = firebase.auth().currentUser.uid;

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

//------ PARA GUARDA LA JUGADA  1----------

// const onSubmit = (name, animalKey) =>{
//   //hace push
//   console.log(id +" id"); //id del place
//   console.log(nombre + " array"); //nuevo valor       
 
// var ref =  firebase.database().ref('places/'+ id + "/animals"); //conecta con la base segun en que "place" se encuentra y dentro de eso busca en animals 

// var blast = ref.child(animalKey); //recibe el valor de iteracion, que es igual al id del "animal" en la base de datos
//    blast.update({ //actualiza la data.
//   "animalName": nombre,
//   "description": descripcion
//   });
//   setcontentEditable('false');
// }


//------ FIN PARA GUARDA LA JUGADA 1----------

//------ PARA GUARDA LA JUGADA 2----------
// handleSubmit = (event: any) => {
//   event.preventDefault();
//   const formData = new FormData();
//   const { selectedFile } = this.state;
//   formData.append('inputFile', selectedFile);
//   fetch('/api/upload', {
//       method: 'POST',
//       body: formData,
//   });
// };

//------ FIN PARA GUARDA LA JUGADA 2----------



//------ TEST CLICKS----------
const test = () =>{
  console.log(name);
  console.log(category);
  console.log(participantes);
  console.log(description);
  console.log(goals);
}


// function addTestFile() {
//   var storageRef = firebase.storage().ref();

  
//   //const storageRef = firebase.storage().ref()
//   const fileRef = storageRef.child('test.txt')
//   return fileRef
//     .putString('Some File Contents')
//     .then((snap) => console.log('upload successful', snap))
//     .catch((err) => console.error('error uploading file', err))
// }

const onChangeHandle = (data) =>{
  setVideoFile(data);
}

const onSubmitHandle = (data) =>{

 
}

function writeUserData() {
    firebase.database().ref('/users/0/' + userId).push({
      name: {name},
      category: {category},
      participantes : {participantes},
      description: {description},
      goals: {goals},
      videoFile: {videoFile}
  });
}
// function writeUserData(userId, name, email, imageUrl) {
//   firebase.database().ref('users/' + userId).set({
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }
 console.log(videoFile);

  return (
        <Container>
            <CreateProyectPopUp className={isActive === 'true' ? "active" : "unactive"}>
              <div className="BlackBackground"/>
              <div className="PopUpContent">
                <div className="PopUpTitle">
                  <h1>Nuevo ejercicio</h1>
                  </div>
                  <div className="PopUpContainer">
                    <p>Nombre</p>
                    <input className="inputName"
                        onInput={e => handleChangeName(e.currentTarget.value)}
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
                        <input type="file" name="file" onChange={e => onChangeHandle(e.currentTarget.value)}/>
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
                    <button onClick={writeUserData}>Siguiente</button>
                  </div>
                </div>
              </div>
            </CreateProyectPopUp>
            <Grid>
              <div className="Titles">
                <h1>Proyectos</h1>
                <p>Proyectos actuales</p>
              </div>
            <div className="NewProyect" onClick={handleClickNewProyect}>
                <p className="PlusIcon">+</p>
                <p>Proyecto nuevo</p>
             </div>
             <div className="Titles">
                <h1>Proyectos</h1>
                <p>Proyectos compartidos</p>
              </div>
              <div className="ProyectCard">
                <img src="https://i.ytimg.com/vi/lLsj3_ddGck/hqdefault.jpg" /> 
                <h2>Flex</h2>
                <p>La jugada mundial</p>
             </div>
             </Grid>
             
        </Container>
  )
}

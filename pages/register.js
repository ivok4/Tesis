import React, { useState, useEffect } from "react";
import {Layout, Register as RegisterContainer} from '../containers'
import firebase from '../lib/fire';



export default function Register() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () =>{
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user)
      setUser(user)
      setUpUserDataBase();
      window.location.replace(`/login`); //go to edicion page
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });  
  }

  const clearInputs = () =>{
    setEmail('');
    setPassword('');
  }
  
  const setUpUserDataBase = () =>{
      // firebase.database().ref(`/users/0`).push({  //crea la posicion del usuario en la base de datos 
      //     name : "Ivo Krivzov",
      //     email: email,
      //     plays: [],
      //     }
      //   );
      var ref =  firebase.database().ref(`users/0/${user.uid}`).set({ //crea la posicion del usuario en la base de datos 
        name:user.uid,
        plays:[{}],
      });
    }

  //   const onSubmit = () =>{
  //     //hace push
      
  //   var ref =  firebase.database().ref('places/').push({ //actualiza la data.   
  //       "name":place,
  //       animals:[{
  //         "animalName":animalName,
  //         "description":description,
  //         "id":id
  //       }
  //       ]
  //     });
  //     resetForm();
  // }
  
  return (
    <Layout>
      <RegisterContainer 
      handleRegister={handleRegister}
      email={email} 
      setEmail={setEmail} 
      password={password} 
      setPassword={setPassword}
      />
    </Layout>
  )
}
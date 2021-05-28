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
      window.location.replace(`http://localhost:3000/login`); //go to edicion page
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
import {Layout, Login as LoginContainer} from '../containers'
import React, { useState, useEffect } from "react";
import firebase from '../lib/fire';
import { useRouter } from 'next/router'
import {Grilla} from '../components'



export default function Login({}) {
//cambio de paginas 
const router = useRouter()

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount ] = useState(true);

const clearInputs = () =>{
  setEmail('');
  setPassword('');
}

const clearErrors = () =>{
  setEmailError('');
  setPasswordError('');
}
  const handleLogin = () =>{
    clearErrors();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(err => {
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
        }
      })
  }
  const handleLogout = () =>{
    console.log("log out");
    firebase.auth().signOut();
  }
  const authListener = () =>{
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        clearInputs();
        setUser(user);
      }
      else{
        setUser('');        
      }
    })
  }
  useEffect(() => {
    authListener();
  }, [])
  
  return (
    <>
       {user ? (
        <Layout handleLogout={handleLogout}>
          <Grilla />
        </Layout>
      ): ( 
      <>
        <LoginContainer 
          email={email} 
          setEmail={setEmail} 
          password={password} 
          setPassword={setPassword} 
          handleLogin={handleLogin}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
          />
        </>
       )} 
    </>
  )
  
}


export async function getServerSideProps(ctx) {
  const data = await getUserData(ctx);
  return { props: data };
}

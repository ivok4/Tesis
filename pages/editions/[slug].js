import React, { useState, useEffect } from "react";
import {LayoutEdicion, Edicion as EdicionContainer} from '../../containers'
import firebase from '../../lib/fire';
import {useAppContext} from '../../contexts/Auth'

export default function Editions({slug}) {
  const [jugada, setJugada] = useState([]);
  const [usuario, setUserId] = useState();
  const  userInfo  = useAppContext();
  //console.log(userInfo);
  let playId = slug;

  const authListener = () =>{
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        getCollectionBySlug(user);
        setUserId(user.uid);
      }
      else{
        setUser('');        
      }
    })
  }
  useEffect(() => {
    authListener();
  }, []);
  

 const getCollectionBySlug = async (userId) => {
   if(userId){
    try {
      const { data } = await firebase.database().ref(`/users/0/${userId.uid}/plays/${playId}`).once('value').then((snapshot) => {
        var username = (snapshot.val())|| 'Anonymous';               
        setJugada(username);
      }); 
    } catch (error) {
      console.error(error);
    }
   }
  };
  return (
    <LayoutEdicion>
         <EdicionContainer jugada={jugada} playId={playId} userId={usuario}/>  
    </LayoutEdicion>
  )
}

export async function getServerSideProps({ res, params }) {
  const { slug } = params;
  const data = slug;
  return { props: {slug} }
}



import React, { useState, useEffect } from "react";
import {LayoutEdicion, VideoPlayer} from '../../containers'
import firebase from '../../lib/fire';
import {useAppContext} from '../../contexts/Auth'

export default function Editions({slug}) {
  const [jugada, setJugada] = useState([]);
  const [usuario, setUserId] = useState();
  const  userInfo  = useAppContext();
  let playId = slug;
  console.log(playId);

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
  }, [])
  

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
  console.log(jugada)
  return (
    <LayoutEdicion>
         <VideoPlayer jugada={jugada}/>
    </LayoutEdicion>
  )
}

export async function getServerSideProps({ res, params }) {
  const { slug } = params;
  const data = slug;
  return { props: {slug} }
}



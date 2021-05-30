import React, { useState, useEffect } from "react";
import {LayoutEdicion, Edicion as EdicionContainer} from '../../containers'
import firebase from '../../lib/fire';

export default function Editions({data}) {
  const [jugada, setJugada] = useState([]);
  const [usuario, setUserId] = useState('');
  let PlayId = data;
  console.log(usuario.uid);

  const authListener = () =>{
    firebase.auth().onAuthStateChanged(user => {
      if(user){       
        setUserId(user.uid);
      }
      else{
        setUserId('');     
      }
    })
  }

  const fetchData = async () => {
    try {
          const { data } = await firebase.database().ref(`users/0/${usuario}/plays/${PlayId}`).once('value').then((snapshot) => {
          var username = (snapshot.val())|| 'Anonymous';               
          console.log(username);
          setJugada(username);
        }); 
    } catch (error) {
        console.error("este es mi error", error);
    }
};

  useEffect(() => {
    console.log("imprimir usuairo" + usuario);
    authListener();
    fetchData();
}, []);

//console.log(jugada);

  return (
    <LayoutEdicion>
         {/* <EdicionContainer data={data}/>  */}
         <p>{jugada.name}</p>
    </LayoutEdicion>
  )
}
export async function getServerSideProps({ res, params }) {
  const { slug } = params;
  const data = slug;
  return { props: {data} }
}



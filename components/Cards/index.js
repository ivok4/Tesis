import { Container } from './styled'
import React, { useState, useEffect } from "react";
import firebase from '../../lib/fire';
import {useAppContext} from '../../contexts/Auth';

const Cards = () =>{
  
  const [proyects, setProyects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const  userInfo  = useAppContext();


  //------------ GET USERS PLAYS FROM DATABASE -------------
  useEffect(() => {
    const fetchData = async () => {
        try {
            const { data } = await firebase.database().ref(`/users/0/${userInfo.id}`).once('value').then((snapshot) => {
              var username = (snapshot.val())|| 'Anonymous';               
              setProyects(username);
              setIsLoading(false);
              //console.log(username);
            }); 
            
        } catch (error) {
            console.error("este es mi error", error);
        }
    };
    fetchData();
}, []);

const handleProjectClick = (PlayID) =>{
  console.log("click");
  console.log(PlayID);
  window.location.replace(`/playVideos/${PlayID}`); //go to playVideo page
}
const handleClick = value => () => {
  console.log(value);
  console.log("click");
};
  //------------ END GET USERS PLAYS FROM DATABASE -------------
  //color de fondo de la imagen de la pelota
  //#54D7AB

    return( <>
        
             { !isLoading &&
             proyects.plays.map((play,i)  => 
              <Container key={i}  onClick={() => {handleProjectClick(i);}}> 
                <div className="ProyectCard" id={i}  >
                  <div>
                    <img src="/Assets/Ball-img.png" />
                    <h2>Nombre</h2>
                    <p>{play.name}</p>
                  </div>
                  <h2 className="TitleDesciprion">Descripción</h2>
                  <p>{play.description}</p>
              </div>
              </Container>
                )}    
            </>
        )
}

export default Cards
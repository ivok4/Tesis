import { Container } from './styled'
import React, { useState, useEffect } from "react";
import firebase from '../../lib/fire';


  

const Cards = () =>{
  
  const [proyects, setProyects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  var userId = firebase.auth().currentUser.uid;


  //------------ GET USERS PLAYS FROM DATABASE -------------
  useEffect(() => {
    const fetchData = async () => {
        try {
            const { data } = await firebase.database().ref('/users/0/' + userId).once('value').then((snapshot) => {
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

  //------------ END GET USERS PLAYS FROM DATABASE -------------
  //color de fondo de la imagen de la pelota
  //#54D7AB

    return( <>
        
             { !isLoading &&
             proyects.plays.map((play,i)  => 
              <Container key={i}> 
                <div className="ProyectCard" id={i}>
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
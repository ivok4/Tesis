import React, { useState, useEffect } from "react";
import firebase from '../../lib/fire';
import { useRouter } from 'next/router';
import {Container} from './styled';
import {useAppContext} from '../../contexts/Auth';


const Navbar = ({handleLogout}) => {
    const  userInfo  = useAppContext();
    const handleLogin =() =>{
        window.location.replace(`/login`); //go to edicion page
    }
    return(
        <Container>
            <a href="./">
                <img src="/Assets/Logo.png"/>
            </a>
            <ul>
                <li><a href="./login">Proyectos</a></li>
                <li><a href="./ediciones">Ediciones</a></li>
                <li><a href="./libreria">Libreria</a></li>
                <li><a href="#">Configuracion</a></li>
            </ul>
                <button className={userInfo.userActive === true ? "unactive" : "active"}
                onClick={handleLogin}>Iniciar sesion</button>
                <button className={userInfo.userActive === true ? "active" : "unactive"}
                onClick={handleLogout}>Cerrar sesion</button>
        </Container>
    )
}

export default Navbar
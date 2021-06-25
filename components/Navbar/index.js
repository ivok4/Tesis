import React, { useState, useEffect } from "react";
import firebase from '../../lib/fire';
import { useRouter } from 'next/router';
import {Container} from './styled';


const Navbar = ({handleLogout, isUser}) => {
    console.log(isUser);
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
                <li><a href="./login">Libreria</a></li>
                <li><a href="#">Configuracion</a></li>
            </ul>
            {/* cambir por un buscador propio 

            <form>
                <input type="text" name="search" placeholder="Search.."></input> 
            </form>*/}
                <button className={isUser === 'true' ? "unactive" : "active"}
                onClick={handleLogin}>Iniciar sesion</button>
                <button className={isUser === 'true' ? "active" : "unactive"}
                onClick={handleLogout}>Cerrar sesion</button>
        </Container>
    )
}

export default Navbar
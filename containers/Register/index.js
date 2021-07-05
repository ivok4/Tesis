import React, { useState, useEffect } from "react";
import {Container,
    MainContainer,
    SideContainer,
    FormLogin
  } from './styled'

const RegisterContainer = (props) =>{
  const { email,
    setEmail,
    password,
    setPassword,
    handleRegister,
    } = props;
  
    return(
        <Container>  
        <SideContainer>
        <a href="/"><img src="/Assets/Logo.png" alt="Logo guias inmersivas" /></a>
          <h1>Registrase</h1>
          <p>Ya tenés una cuenta? <a href="/login"><strong>Inicia sesion</strong></a></p>
          <FormLogin>
            <div>
              <input
                className="input"
                name="email"
                type="email"
                placeholder="Usuario"
                id="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              {/* <p>emailError</p> */}
            </div>
            <div>
              <input
                className="input"
                name="email"
                type="password"
                placeholder="Contraseña"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
                {/* <p>error de contraseña</p> */}
            </div>
          <button onClick={handleRegister}>
             <a href="#"> REGISTRASE </a>
          </button>            
          </FormLogin>
        </SideContainer>
        <MainContainer>
          <h2>Analiza todas las jugadas de tu equipo</h2>
          <p>Empieza a crear tus analisis personales. Tanto de las jugadas de tu equipo como de los rivales.</p>
          <img src="/Assets/court-3d.png" alt="3d basketball court" />
        </MainContainer>
      </Container>
        )
}

export default RegisterContainer

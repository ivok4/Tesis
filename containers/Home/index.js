import React, { useState } from "react";


import {Container
  } from './styled'



export default function HomeContainer() {
  return (
   
        <Container>
          <div>
            <h1>Conocé analisis proyectados, la plataforma de videoanalisis para deportes.</h1>
            <p>Empeza a desarrollar los analisis que deseas proyectar para tu equipo.</p>
            <button>
              <a href="/login">Comenzar</a>
            </button>
          </div>
        </Container>
  )
}

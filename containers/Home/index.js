import React, { useState } from "react";

import {Container
  } from './styled'



export default function HomeContainer() {
  return (
   
        <Container>
          <div>
            <h1>Conocé análisis proyectados, la plataforma de video análisis para deportes.</h1>
            <p>Empezá a desarrollar los análisis que deseas proyectar para tu equipo.</p>
            <button>
            <a href="/login">Comenzar</a>
            </button>
          </div>
        </Container>
  )
}

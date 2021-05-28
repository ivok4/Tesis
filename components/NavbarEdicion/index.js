import React from 'react'
import {Container,
        Navbar,
        SectorNav
} from './styled'


const NavbarEdicion = () => {

    return(

        <Container>
            <Navbar>
                <div>
                    <img src="/Assets/Menu-icon.png" href='../index' />
                    <a href="/login"><img src="/Assets/BackArrow.png" href='../index' /></a>
                    <h1>Tacticas</h1>
                </div>
                <div className="buttons">
                    <SectorNav>
                    <img src="/Assets/Share-icon.png" />
                    <p>Compartir</p>
                    </SectorNav>
                    <SectorNav>
                    <img src="/Assets/Save-icon.png"/>
                    <p>Guardar</p>
                    </SectorNav>

                </div>
            </Navbar>
        </Container>
    )
}

export default NavbarEdicion
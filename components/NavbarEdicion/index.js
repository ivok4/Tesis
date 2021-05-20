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
                    <img src="/assets/Menu-icon.png" href='../index' />
                    <img src="/assets/BackArrow.png" href='../index' />
                    <h1>Tacticas</h1>
                </div>
                <div className="buttons">
                    <SectorNav>
                    <img src="/assets/Share-icon.png" />
                    <p>Compartir</p>
                    </SectorNav>
                    <SectorNav>
                    <img src="/assets/Save-icon.png"/>
                    <p>Guardar</p>
                    </SectorNav>

                </div>
            </Navbar>
        </Container>
    )
}

export default NavbarEdicion
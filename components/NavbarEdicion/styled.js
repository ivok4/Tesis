import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
`

export const Navbar = styled.nav`
    width:100%;
    height:50px;
    display:grid;
    grid-template-columns:50% 50%;
    align-items:center;
    background-color:#2A2A2A;
    color:#FFF;
    div{
        height:fit-content; 
       display:flex;
       align-items:center;
       width:auto;
       padding:0 2%;
       img{
           width:4%;
           //height:fit-content;
           margin-left:3%;
       }
       h1{
           margin:0;
           font-size:20px;
           margin-left:3%;
       }
       p{
           margin:0;
       }
    }
    .buttons{
        display:flex;
        justify-content:flex-end;
        img{
            width:fit-content;
        }
    }
`

export const SectorNav = styled.div`
    display:flex;
    flex-direction:row;
    width:20%;
    p{
            width:auto;
            height:fit-content;
            margin:0;
        }
`
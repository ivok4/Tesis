import styled from 'styled-components'

const Container = styled.div`
background-color: #000;
border-radius:10%;
margin:2%;

.ProyectCard{
    color: #FFF;
    width:100%;
    height:100%;
    display:block;
    img{
    width:40%;
    height:100px;
    display:flex;
    float:left;
    margin:5%;
    }
    div{
        height:140px;
    }
    h2{
    display:flex;
    color:#9094A2;
    margin-top:5%;
    }
    p{
        display:block;
        color:#9094A2;
        padding-left:6%;
        margin:0;
    }
    .TitleDesciprion{
        display:block;
        padding-left:6%;
        margin:0;
    }
}

`

export {Container}


import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';


export const Container = styled.div`
  min-height: 80vh;
  max-height:95vh;
  width:100%;
  display: flex;
  grid-template-rows: auto 1fr auto;
  div{
    display:flex;
    background: url("/Assets/Home-background-02-2.jpg"); 
    width:100%;
    height:100%;
    background-size: 100%;
    color:#FFF;
    display:flex;
    flex-direction:column;
    h1{
        width:45%;
        font-size:40px;
        margin:10% 0 0 5%;
       
    }
    p{
        width:45%;
        font-size:30px;
        margin-left:5%;
    }
    button{
    background-color: #FF6A00;
    width: 20%;
    height: 40px;
    border-radius: 25px;
    border-style:none;
    color: #FFF;
    margin-left: 5%;
    font-size: 20px;
    }
  }
`
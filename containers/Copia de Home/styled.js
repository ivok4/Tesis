import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';


export const Container = styled.div`
  min-height: 80vh;
  display: flex;
  grid-template-rows: auto 1fr auto;
  background-color: #FFF;
  .unactive{
      display:none;
    }
  .active{
      display:flex;
    }
`

export const Grid = styled.div`
    display:grid;
    background-color: #F3F7FA;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 17% 30% 17% 30%;
    width:100%;
    height:auto;
    padding: 0 2%;
    .Titles{
        width:100%;
        display:inline-block;
        grid-column-start: 1;
        grid-column-end: five;
        p{
            color:#9094A2;    
        }
    }
    img{
    width:30%;
    display:inline-flex;
    }
    .NewProyect{
        background-color: #000;
        width:70%;
        height:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        border-radius:25px;
        .PlusIcon{
            font-size:40px;
            display:inline-block;
            margin:0;
            
        }
        p{
            font-size:20px;
            margin:0;
        }
    }
    .ProyectCard{
        background-color: #000;
        width:70%;
        height:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        border-radius:25px;
    }
    h2{
        display:inline-flex;
        color:#FFF;
    }
    p{
        color:#9094A2;
    }
`

export const CreateProyectPopUp = styled.div`
   min-height: 88vh;
   width:100%;
   position:absolute;
   grid-template-rows: auto 1fr auto;
   justify-content:center;
   align-content:center;
   .BlackBackground{
    width:100%;
    height: 88vh;
   display: flex;
   position:absolute;
   grid-template-rows: auto 1fr auto;
    background-color: #000;
    opacity: 0.5;
   }
   .PopUpContent{
    position:absolute;
    display:flex;
    align-self:center;
    justify-self:center;
    flex-direction:column;
    background-color: #F5F7FD;
    height:70%;
    width:60%;
   }
   .PopUpTitle{
        display:flex;
        width:100%;
        height:10%;
        background-color:#E7701F;
        margin:0;
        justify-content:center;
        h1{
            font-size:20px;
            font-style:regular;
        }
      }
      .PopUpContainer{
          width:90%;
          align-self:center;
      }
      .inputName{
          width:60%;
      }
      .dobleSection{
        display:flex;
        div{
            width:30%;
            height:100%;
        }
        p{
            width:100%;
        }
        input{
            width:90%;
            height:30px;
        }
      }
      .inputDescription{
          width:100%;
          height:70px;
      }
      .inputGoals{
          display:flex;
          width:100%;
          height:70px;
      }
      .buttonSection{
          width:100%;
          height:auto;
          display:flex;
          flex-direction:row;
          justify-content:space-between;
        button{
          background-color:#000;
          color:#FFF;
          border:0;
          width:fit-content;
          height:30px;
          margin:10px;
          &:nth-child(2) {
            background-color:#E7701F;
            color:#000;
            margin-right:0;
            }
        }
      }
      
 `
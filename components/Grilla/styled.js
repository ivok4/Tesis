import styled from 'styled-components'

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
    grid-template-rows: 15% 35% 15% 35%;
    width:100%;
    height: 88vh;
    padding: 0 2%;
    .titulo{
        grid-column: 1 / span 4;
        display: grid;
        grid-template-columns: 50% 50%;
        height: fit-content;
        border-bottom:1px solid;
        margin-bottom:40%;
        h1{
            width:fit-content;
            font-family: 'Blanco Regular';
        }
        p{
            width:fit-content;
            font-family: 'Blanco Regular';
        }
        button{
        background-color: #FF6A00;
        width: 25%;
        height: 40px;
        border-radius:10px;
        border-style:none;
        color:#FFF;
        display:flex;
        align-self:center;
        justify-self:end;
        justify-content:center;
        align-items:center;
        margin-right:5%;
        }
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
        color:#FFF;
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
    
`
export const Sidebar = styled.div`
    background-color:#000;
    height: 100%;
    width:20%;
    padding: 2% 3% 0 3%;
    h1{
        color:#CCC;
        font-size:20px;
        font-family: 'Comic Neue Bold';
    }
    p{
        color:#FFF;
        font-size:16px;
        font-family: 'Comic Neue Bold';
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
    position: relative;
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
    .Loader{
    display: none;
    position: absolute;
    top: 50%;
    width: 100%;
    background-color: black;
    opacity: 0.5;
    color: #FFF;
    text-align: center;
    }
      
 `
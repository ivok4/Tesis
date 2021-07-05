import styled from 'styled-components'


export const Container = styled.div`
    display:grid;
    background-color: #000000;
    grid-template-columns: repeat(1, 3fr);
    height: 100vh;
    width:100%;
    @media (min-width: 1024px) {
    display:flex;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;   
    justify-content:start;
    } 
    @media (min-width: 1920px) {
    }
`
export const MainContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:70%;
    height:100%;
    justify-content:center;
    background-color:#000;
    align-items:center;
    color:#FFF;
    p{
        font-family: 'Blanco Regular';
        font-size:20px;
        width:40%;
    }
    img{
      width:90%;
    }
    @media(min-width: 468px) {
    }
      
    @media(min-width: 1024px) {
    }
    @media(min-width: 1112px) {
        border-radius:20px 0 0 20px;
    }
`
export const SideContainer = styled.div`
display:flex;
flex-direction:column;
width:30%;
height:100%;
justify-content:center;
background-color:#FFF;
align-items:center;
a{
  width:20%;
  img{
    width: 100%;
  }
}
button{
    background-color: #FF6A00;
    width: 50%;
    height: 40px;
    border-radius: 25px;
    border-style:none;
    a{
        list-style:none;
        color: #FFF;
        text-decoration: none;
        }
    }
    h1{
      height:fit-content;
      width:52%;
    }
    
@media(min-width: 468px) {
}
  
@media(min-width: 1024px) {

}
@media(min-width: 1112px) {
}
`

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height:40%;
  padding: 20px 0;
  div{
    display:inline;
    width:80%;
    justify-content:center;
    align-items:center;
    margin-bottom:1%;
    img{
      width:10%;
      height: 60%;
      margin-right:5%;
    }
  }
  input {
    width: 100%;
    background: none;
    border: 0.5px solid #000;
    padding: 15px 10px;
    margin: 5px 0px;
  }
  input::placeholder {
    color:#000;
    font-weight:bold;
    font-size:20px;
  }
 
`;
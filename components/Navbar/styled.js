import styled from 'styled-components'

const Container = styled.nav`
height: 9vh;
width:1382px;
padding:1% 2%;
background-color: #000;
display: flex;
justify-content: space-between;
align-items: center;
ul{
    margin:0;
    padding: 0 2%;
    display:inline;
}
li{
    display: inline;
    margin:10px;
    color:#FFF;

}
li a{
    text-decoration:none;
    color:#FFF;
}
form{
    display:inline;
}
input[type=text] {
    width: 20%;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 40px;
    font-size: 16px;
    background-color: white;
    background-image: url('searchicon.png');
    background-position: 10px 10px; 
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
    margin-top:1%;
    margin-left:30%;
  }
  button{
        background-color:#000;
        border-radius:10px;
        border-color:#FF6A00;
        color: #FFF;
        height:100%;
        width:10%;
    }
    img{
        width: 20%;
    }
  
`

export{Container}
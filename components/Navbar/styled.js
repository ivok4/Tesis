import styled from 'styled-components'

const Container = styled.nav`
height:5vh;
width:1382px;
padding:1% 2%;
margin-bottom: 2%;
background-color: #000;
position:relative;

img {
    height:90%;
    position:absolute;
    display:inline;
}
ul{
 
    margin:2% 5%;;
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
  h2{
    width:20%;
    background-color:#FFF;
}
  h2.img{
      width:20%;
      background-color:#FFF;
  }
  
`

export{Container}
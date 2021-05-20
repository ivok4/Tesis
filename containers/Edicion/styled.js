import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 3.8fr;
  grid-template-rows: 1.9fr 0.1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". ."
    ". .";

`
export const Court = styled.div`
    display:flex;
    background: url("/Assets/Court-background2.png");
    width:100%;
    height:100%;


    .tr-transform__rotator {
    top: -45px;
    left: calc(50% - 7px);
}

.tr-transform__rotator,
.tr-transform__scale-point {
    background: #fff;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    cursor: pointer;
}
.tr-transform__rotator:hover,
.tr-transform__scale-point:hover{
    background: #F1F5F8;
}
.tr-transform__rotator:active,
.tr-transform__scale-point:active{
    background: #DAE1E7;
}
.tr-transform__scale-point {

}

.tr-transform__scale-point--tl {
    top: -7px;
    left: -7px;
}

.tr-transform__scale-point--ml {
    top: calc(50% - 7px);
    left: -7px;
}

.tr-transform__scale-point--tr {
    left: calc(100% - 7px);
    top: -7px;
}

.tr-transform__scale-point--tm {
    left: calc(50% - 7px);
    top: -7px;
}

.tr-transform__scale-point--mr {
    left: calc(100% - 7px);
    top: calc(50% - 7px);
}

.tr-transform__scale-point--bl {
    left: -7px;
    top: calc(100% - 7px);
}

.tr-transform__scale-point--bm {
    left: calc(50% - 7px);
    top: calc(100% - 7px);
}

.tr-transform__scale-point--br {
    left: calc(100% - 7px);
    top: calc(100% - 7px);
}
    
`
export const Sidebar = styled.div`
    background-color:#2A2A2A;
    width:100%;
    height:auto;
    padding: 0 3% 0 3%;
    display:flex;
    flex-direction:column;
    align-items:center;
    div{
        width:100%;
        height:10%;
        border: 2px solid;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    img{
        width:fit-content;
        height:fit-content;
        margin: 5% 0;
    }
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
export const RedDot = styled.div`
    height:50px;
    width:50px;
    border-radius:50px;
    background-color:#C4342C;
`
export const AnimatorBar = styled.div`
    height:100%;
    width:100%;
    display:flex;
    flex-direction:row;
    color:#FFF;
    div{
        width:50px;
        height:100%;
        background-color:#2A2A2A;
        margin:0 1px 0 1px;
        display:flex;
        justify-content:center;
        align-items:center;        
        img{
            width:60%;
        }
        &:nth-child(6) {
            width:fit-content;
            display:flex;
            background-color:#000;     
            margin-left: auto;  
        }                   
    }
`

export const Square = styled.div`
    width:100px;
    height:100px;
    border: 2px solid red;
    overflow:auto;
    //resize: both;
.tr-transform__rotator:hover,
.tr-transform__scale-point:hover{
    background: #F1F5F8;
}
.tr-transform__rotator:active,
.tr-transform__scale-point:active{
    background: #DAE1E7;
}
.tr-transform__scale-point {

}

.tr-transform__scale-point--tl {
    top: -7px;
    left: -7px;
}

.tr-transform__scale-point--ml {
    top: calc(50% - 7px);
    left: -7px;
}

.tr-transform__scale-point--tr {
    left: calc(100% - 7px);
    top: -7px;
}

.tr-transform__scale-point--tm {
    left: calc(50% - 7px);
    top: -7px;
}

.tr-transform__scale-point--mr {
    left: calc(100% - 7px);
    top: calc(50% - 7px);
}

.tr-transform__scale-point--bl {
    left: -7px;
    top: calc(100% - 7px);
}

.tr-transform__scale-point--bm {
    left: calc(50% - 7px);
    top: calc(100% - 7px);
}

.tr-transform__scale-point--br {
    background: #fff;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    cursor: pointer;
    left: calc(100% - 7px);
    top: calc(100% - 7px);
}
    `
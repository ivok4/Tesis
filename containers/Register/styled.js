import styled from 'styled-components'

export const Container = styled.div`
    display:grid;
    background-color: #FFF;
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
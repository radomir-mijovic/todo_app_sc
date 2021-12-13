import styled from "styled-components";
import backgroundImg from '../assets/todo_background.jpg'

export const StyledContainer = styled.div`
  background: linear-gradient(#06beb6, #48b1bf);
  background-size: 100%;
  //background-repeat: no-repeat;
  display: flex;
  //grid-template-rows: repeat(2, 1fr);
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 0 20rem;
  height: 100vh;
  
  @media (max-width: 400px) {
    padding: 0;
  }
`
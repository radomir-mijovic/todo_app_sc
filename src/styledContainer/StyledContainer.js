import styled from "styled-components";

export const StyledContainer = styled.div`
  background: linear-gradient(#06beb6, #48b1bf) repeat;
  background-size: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 10rem 20rem;
  height: 100vh;
  min-height: 100%;
  
  @media (max-width: 1000px) {
    padding: 10rem;
  }
  
  @media (max-width: 800px) {
    padding: 5rem;
  }
  
  @media (max-width: 600px) {
    padding: 2rem;
  }
`
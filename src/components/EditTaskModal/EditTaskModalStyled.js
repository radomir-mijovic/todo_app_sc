import styled from "styled-components";

export const EditTaskModalStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, .4);
  display: grid;
  place-items: center;
  
  > img {
    cursor: pointer;
    position: absolute;
    top: 5rem;
    right: 5rem;
    height: 4rem;
    
  }

  > form {
    height: 50rem;
    width: 50rem;
    background: #FFFF;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    border-radius: 1rem;
    font-size: 1.6rem;
    text-align: center;

    > div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      
      > input {
        width: 80%;
        height: 2.5rem;
        outline: none;
        border: none;
        border-bottom: 1px solid black;
        padding: 1rem;
      }
      
      > textarea {
        width: 80%;
        resize: none;
        height: 6rem;
        outline: none;
        border: none;
        border-bottom: 1px solid black;
        padding: 1rem;

      }
    }
  }
  
  .priority {
    display: flex;
    
    > h2 {
      cursor: pointer;
      font-size: 1.6rem;
    }
    
    > ul {
      z-index: 3;
      
      > li {
        cursor: pointer;
        margin: .5rem 0;
      }
    }
  }
  
  @media (max-width: 600px) {
    > form {
      width: 32rem;
    }
  }
`

export const UpdateButton = styled.button`
  background: #0583D2;
  padding: 1em;
  border-radius: 16px;
`
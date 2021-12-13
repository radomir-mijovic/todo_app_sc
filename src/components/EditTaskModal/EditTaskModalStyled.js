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
      }
      
      > textarea {
        width: 80%;
        resize: none;
        height: 6rem;
        outline: none;

      }
    }
  }
  
  .priority {
    position: relative;
    
    > h2 {
      cursor: pointer;
    }
    
    > ul {
      position: absolute;
      z-index: 3;
      
      > li {
        cursor: pointer;
      }
    }
  }
  
  //.date {
  //  height: 30rem;
  //}
`
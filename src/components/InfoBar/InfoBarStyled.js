import styled from "styled-components";

export const InfoBarStyled = styled.div`
  width: 100%;
  height: 2.5rem;
  background: #FFFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  margin: 2rem 0;
  border-radius: 6px;
  
  .title-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    > img {
      height: 1rem;
      margin-left: .5rem;
    }
  }

  .title {
    cursor: pointer;
  }
`

export const H1Styled = styled.h1`
  margin-top: 5rem;
`
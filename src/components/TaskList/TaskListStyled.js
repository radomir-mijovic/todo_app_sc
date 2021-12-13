import styled from "styled-components";

export const TaskListStyled = styled.div`
  border-radius: 6px;
  box-shadow: 0 35px 50px -15px rgba(194, 195, 214, 0.5);
  background: #FFFF;
  width: 100%;

  > ul {
    > li {
      list-style: none;
      padding: 2.5rem;
      border-bottom: 1px solid black;
      display: flex;
      align-items: center;
      justify-content: space-between;


      :last-child {
        border-bottom: none;
      }

      > div {
        width: 5rem;
        display: flex;
        justify-content: space-between;

        > img {
          cursor: pointer;
          height: 1.5rem;
          width: 1.7rem;
        }
      }
    }
  }
`

export const H2Styled = styled.h2`
  font-size: 1.6rem;
  cursor: pointer;
  color: ${props => props.completed ? 'grey' : 'black'};
  text-decoration: ${props => props.completed ? 'line-through' : undefined}
`
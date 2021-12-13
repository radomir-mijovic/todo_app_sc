import React from "react";
import {StyledContainer} from "./styledContainer/StyledContainer";
import TaskList from "./components/TaskList/TaskList";
import {AddNewTaskStyled} from "./components/AddNewTask/AddNewTaskStyled";

function App() {
  return (
    <StyledContainer>
        <AddNewTaskStyled/>
      <TaskList/>
    </StyledContainer>
  );
}

export default App;

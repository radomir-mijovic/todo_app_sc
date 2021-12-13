import React from "react";
import {StyledContainer} from "./styledContainer/StyledContainer";
import TaskList from "./components/TaskList/TaskList";
import AddNewTask from "./components/AddNewTask/AddNewTask";

function App() {

    return (
        <StyledContainer>
            <AddNewTask/>
            <TaskList/>
        </StyledContainer>
    );
}

export default App;

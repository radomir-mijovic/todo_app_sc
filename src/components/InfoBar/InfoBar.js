import React, {useState} from 'react';
import {H1Styled, InfoBarStyled} from "./InfoBarStyled";
import {useTaskContext} from "../../context/task_context";
import arrowUp from '../../assets/icons/icon-arrow-up.svg'
import arrowDown from '../../assets/icons/icon-arrow-down.svg'

const InfoBar = () => {
    const {sortByTitle, tasks} = useTaskContext()
    const [isUp, setIsUp] = useState(true)
    const [sortValue, setSortValue] = useState(true)

    const sortHandler = () => {
        setIsUp(prevState => !prevState)
        setSortValue(prevState => !prevState)
        sortByTitle(sortValue)
    }

    if (tasks.length === 0) {
        return <H1Styled>Your task list is empty</H1Styled>
    }

    return (
        <InfoBarStyled>
            <div className='title-info'>
                <h2 onClick={sortHandler} className='title'>Sort by Title</h2>
                {isUp ? <img src={arrowDown} alt="arrow down"/> : <img src={arrowUp} alt='arrow up'/>}
            </div>
            <h2>Update/Delete</h2>
        </InfoBarStyled>
    );
};

export default InfoBar;
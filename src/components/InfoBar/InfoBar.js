import React from 'react';
import {InfoBarStyled} from "./InfoBarStyled";

const InfoBar = () => {
    return (
        <InfoBarStyled>
            <h2 className='title'>Sort by Title</h2>
            <h2>Update/Delete</h2>
        </InfoBarStyled>
    );
};

export default InfoBar;
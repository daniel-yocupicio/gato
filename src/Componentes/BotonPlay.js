import React, {Fragment} from 'react';
import styled from '@emotion/styled';

const Boton = styled.a`
    background-color: #AD4F3B;
    font-size: 16px;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;
    text-decoration: none;

    &:hover {
        background-color: #F59782;
        cursor: pointer;
        padding: 1.1rem;
    }

`;

const BotonPlay = ({texto,url}) => {
    return (
        <Fragment>
            <Boton type="submit" href={url}>{texto}</Boton>
        </Fragment>
    )
}


export default BotonPlay;

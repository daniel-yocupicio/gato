import React from 'react';
import styled from '@emotion/styled';

const ContenedorHeader = styled.header`
    background-color: #B84343;
    padding: 10px;
    font-weight: bold;
    color: #FFF;
`;

const TextoHeader = styled.h1`
    font-size:2rem;
    margin:0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;

const IA = (props) => {

    return (
        <ContenedorHeader>
            <TextoHeader>jugador: {props.Jugador}</TextoHeader>
        </ContenedorHeader>
    )

}

export default IA;

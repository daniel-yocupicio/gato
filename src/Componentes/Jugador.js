import React from 'react';
import styled from '@emotion/styled';

const ContenedorHeader = styled.header`
    background-color: #AD4F3B;
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

const Jugador = (props) => {

    return (
        props.Jugador === 'A' ?
            <ContenedorHeader>
                <TextoHeader>Jugador: {props.Jugador}</TextoHeader>
            </ContenedorHeader>
            :
            <ContenedorHeader>
                <TextoHeader>Jugador: {props.Jugador}</TextoHeader>
            </ContenedorHeader>
    )

}

export default Jugador;

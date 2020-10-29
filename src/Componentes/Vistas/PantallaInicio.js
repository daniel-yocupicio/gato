import React, { Fragment } from 'react';
import styled from '@emotion/styled';

import BotonPlay from '../BotonPlay';
import logo from './img/tictactoe.png';
import './CSS/index.css';

//Estilos css utilizando emotion/styled para mis componentes

const TextoHeader = styled.h1`
    font-size:4rem;
    margin:0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
    color: #AD4F3B;
    margin-top:2em;
`;


const PantallaInicio = () => {

    return (
        <Fragment>
            <div className="App">
                <TextoHeader>Tic-Tac-Toe!</TextoHeader>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <BotonPlay
                        texto={"Jugar Contra maquina"}
                        url={'/Gato'}
                    />
                    <BotonPlay
                        texto={"Jugador A vs Jugador B"}
                        url={'/Gato2'}
                    />
                </header>
            </div>
        </Fragment>
    )

}


export default PantallaInicio;

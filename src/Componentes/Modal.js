import React, { Fragment } from 'react';  //import de framework react
import styled from '@emotion/styled';   //import de estilos 
import Modal from 'react-modal';    //import de componente modal

import corona from './Vistas/img/corona.png';
import pacman from './Vistas/img/pacman.png';
import BotonPlay from './BotonPlay';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

//emotion/styled
const TextoHeader = styled.h1`
    font-size:4rem;
    margin:0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
    color: #AD4F3B;
    margin-top:2em;
`;

const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const ModalE = (props) => {
    return (
        <Fragment>
            <Modal
                isOpen={props.show}
                style={customStyles}
            >
                {
                    props.win ?
                        <Header>
                            <TextoHeader>El ganador es el jugador {props.ganador}</TextoHeader>
                            <img src={corona} className="App-logo2" alt="logo" />
                            <br></br>
                            <BotonPlay
                                texto={"Jugar otra vez"}
                                url={'/Gato2'}
                            />
                            <br></br>
                            <BotonPlay
                                texto={"Regresar"}
                                url={'/'}
                            />
                            <br></br><br></br>
                        </Header>
                        :
                        <Header>
                            <TextoHeader>¡ Empate !</TextoHeader>
                            <img src={pacman} className="App-logo2" alt="logo" />
                            <br></br>
                            <BotonPlay
                                texto={"Jugar otra vez"}
                                url={'/Gato2'}
                            />
                            <br></br>
                            <BotonPlay
                                texto={"Regresar"}
                                url={'/'}
                            />
                            <br></br><br></br>
                        </Header>
                }

            </Modal>
        </Fragment>
    );
}

export default ModalE;

/*

<div className="App">
                    <header className="App-header">
                        {win ?
                            <div>
                                <TextoHeader>El ganador es el humano</TextoHeader>
                                <img src={corona} className="App-logo2" alt="logo" />
                                <br></br><br></br>
                                <BotonPlay
                                    texto={"Jugar otra vez"}
                                    url={'/Gato'}
                                />
                                <br></br><br></br><br></br>
                                <BotonPlay
                                    texto={"Regresar"}
                                    url={'/'}
                                />
                                <br></br><br></br>
                            </div>
                            :
                            loser ?
                                <div>
                                    <TextoHeader>Perdiste!.. La IA es mejor</TextoHeader>
                                    <img src={pacman} className="App-logo2" alt="logo" />
                                    <br></br><br></br>
                                    <BotonPlay
                                        texto={"Jugar otra vez"}
                                        url={'/Gato'}
                                    />
                                    <br></br><br></br><br></br>
                                    <BotonPlay
                                        texto={"Regresar"}
                                        url={'/'}
                                    />
                                    <br></br><br></br>
                                </div>

                                :
                                empate ?
                                    <div>
                                        <TextoHeader>¡ Empate !</TextoHeader>
                                        <img src={pacman} className="App-logo2" alt="logo" />
                                        <br></br><br></br>
                                        <BotonPlay
                                            texto={"Jugar otra vez"}
                                            url={'/Gato'}
                                        />
                                        <br></br><br></br><br></br>
                                        <BotonPlay
                                            texto={"Regresar"}
                                            url={'/'}
                                        />
                                        <br></br><br></br>
                                    </div>
                                    :
                                    <div>
                                        <TextoHeader>¡ Empate !</TextoHeader>
                                        <img src={pacman} className="App-logo2" alt="logo" />
                                        <br></br><br></br>
                                        <BotonPlay
                                            texto={"Jugar otra vez"}
                                            url={'/Gato'}
                                        />
                                        <br></br><br></br><br></br>
                                        <BotonPlay
                                            texto={"Regresar"}
                                            url={'/'}
                                        />
                                        <br></br><br></br>
                                    </div>
                        }
                    </header>
                </div>

*/

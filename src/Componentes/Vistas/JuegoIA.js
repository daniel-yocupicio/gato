import React, { useState, Fragment } from 'react';
import styled from '@emotion/styled';
import Modal from 'react-modal';
import Jugador from '../Jugador';
import Tablero from '../Tablero';
import corona from './img/corona.png';
import pacman from './img/pacman.png';
import BotonPlay from '../BotonPlay';

const TextoHeader = styled.h1`
    font-size:4rem;
    margin:0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
    color: #AD4F3B;
    margin-top:2em;
`;

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


const JuegoIA = () => {

    const [loser, guardarLoser] = useState(false);
    const [win, guardarWin] = useState(false);
    const [empate, guardarEmpate] = useState(false);
    const [openM, guardarOpenM] = useState(false);

    return (
        <Fragment>
            <div className="App">
                <div>
                    <Jugador
                        Jugador={'Humano'}
                    />
                </div>
                <div style={{ marginLeft: '32%', marginTop: '2%' }}>
                    <Tablero
                        guardarOpenM={guardarOpenM}
                        guardarWin={guardarWin}
                        guardarLoser={guardarLoser}
                        guardarEmpate={guardarEmpate}
                    />
                </div>
            </div >

            <Modal
                isOpen={openM}
                style={customStyles}
            >
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

            </Modal>

        </Fragment>
    );
}

export default JuegoIA;

/*

                        <div>{win  ? <Jugador Jugador={'Humano'} /> : <IA Jugador={'B'} />}</div>
                        <img src={corona} className="App-logo2" alt="logo" />
                        <BotonPlay
                            texto={"Jugar otra vez"}
                            url={'/Gato'}
                        />

*/
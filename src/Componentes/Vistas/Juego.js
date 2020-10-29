//React imports
import React, { useState, Fragment } from 'react';  //import de framework react
//Files de los programas
import Board from '../Board'; //Componentes externos todos estos de aca
import './CSS/index.css';
import Jugador from '../Jugador';
import IA from '../IA';
import ModalE from '../Modal';

//Return de todos los datos
const Juego = () => {

    //Hooks para mis datos para no utilizar useState
    const [history, guardarHistory] = useState(
        [
            {
                squares: Array(9).fill(null)
            }
        ]
    );

    const [stepNumber, guardarStepNumber] = useState(
        0
    );

    const [xIsNext, guardarXIsNext] = useState(
        true
    );

    const [win, guardarWin] = useState(false);

    const [empate, guardarEmpate] = useState(false);

    const [show, guardarShow] = useState(false);

    const [ganador, guardarGanador] = useState()

    //CONST para los valores
    const history2 = history;
    const current = history2[stepNumber];

    //Esta función si se utiliza para calcular al ganador
    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    //Función para cuando se le de clik a una celda
    function handleClick(i, v) {
        const history2 = history.slice(0, stepNumber + 1);
        const current2 = history2[history.length - 1];
        const squares2 = current2.squares.slice();

        if (calculateWinner(squares2) || squares2[i]) {
            return;
        }

        squares2[i] = xIsNext ? "X" : "O";

        guardarStepNumber(history2.length);
        guardarXIsNext(!xIsNext);
        guardarHistory(history.concat([
            {
                squares: squares2
            }
        ]));

        if(calculateWinner(squares2) == 'X'){
            guardarGanador('A');
            guardarWin(true);
            guardarShow(true);
        }else if(calculateWinner(squares2) == 'O'){
            guardarGanador('B');
            guardarWin(true);
            guardarShow(true);
        }else if(
            squares2[0]!=null &&
            squares2[1]!=null &&
            squares2[2]!=null &&
            squares2[3]!=null &&
            squares2[4]!=null &&
            squares2[5]!=null &&
            squares2[6]!=null &&
            squares2[7]!=null &&
            squares2[8]!=null
        ){
            guardarEmpate(true);
            guardarShow(true);
        }

    }

    return (

        <Fragment>
            <div className="App">
                <div>{xIsNext ? <Jugador Jugador={'A'} /> : <IA Jugador={'B'} />}</div>
                <div style={{ marginLeft: '32%', marginTop: '2%' }}>
                    <Board
                        squares={current.squares}
                        onClick={(i, v) => handleClick(i, v)}
                    />
                </div>
            </div >

            <ModalE 
                show={show}
                win={win}
                empate={empate}
                ganador={ganador}
            ></ModalE>

        </Fragment >

    )

}


export default Juego;
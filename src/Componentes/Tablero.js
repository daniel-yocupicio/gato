import React  from 'react';
import Casilla from './Casilla';

const Tablero = (props) => {

    function renderSquare(i) {
        return (
            <Casilla posicion={i}
                guardarOpenM={props.guardarOpenM}
                guardarWin={props.guardarWin}
                guardarLoser={props.guardarLoser}
                guardarEmpate={props.guardarEmpate}
            />
        );
    }

    return (

        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>

    );
}

export default Tablero;
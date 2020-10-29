import React from 'react';
import styled from '@emotion/styled';

// Primer intento de que sea IA
//import { observer } from 'mobx-react';
//import DatosTicTacToe from './DatosTicTacToe';
//import { observer } from 'mobx-react';

const Boton = styled.button`
    background: #fff;
    border: 4px solid #AD4F3B;
    float: left;
    font-size: 30px;
    font-weight: bold;
    line-height: 34px;
    height: 5em;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    width: 5em;
    transition: background-color .3s ease;

    &:hover {
        background-color: #F59782;
        cursor: pointer;
    }

`;

const Boton2 = styled.button`
    background: #AD4F3B;
    border: 4px solid #AD4F3B;
    float: left;
    font-size: 30px;
    font-weight: bold;
    line-height: 34px;
    height: 5em;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    width: 5em;
    transition: background-color .3s ease;
`;

const Boton3 = styled.button`
    background: #fff;
    border: 4px solid #AD4F3B;
    float: left;
    font-size: 30px;
    font-weight: bold;
    line-height: 34px;
    height: 5em;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    width: 5em;
    transition: background-color .3s ease;
`;

const Square = ({posicion,value,onClick,modificarValor}) => {

    //let simbolo = DatosTicTacToe.obtenerValor(posicion);
    //let etiqueta = value;
    //let estilo = '';


    return (
        <div>
            {value == null ?
                <Boton onClick={onClick}>
                    {value}
                </Boton>
                :
                value === "X" ?
                    <Boton2 onClick={onClick}>
                        {value}
                    </Boton2>
                    :
                    <Boton3 onClick={onClick}>
                        {value}
                    </Boton3>
            }
        </div>
    );
}

export default Square;

/*
El siguiente código tiene algo que ver con lo que se esta realizando, se tomo para saber como se tiene
que hacer

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
}
*/
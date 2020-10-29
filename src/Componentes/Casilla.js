import React from 'react';
import DatosTicTacToe from './DatosTicTacToe';
import { observer } from 'mobx-react';
import styled from '@emotion/styled';


const Boton = styled.button`
    background: #fff;
    border: 4px solid #AD4F3B;
    float: left;
    font-size: 30px;
    font-weight: bold;
    line-height: 0px;
    height: 5em;
    margin-right: 0px;
    margin-top: 0px;
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

const Casilla = (props) => {

    function hacerClick(posicion) {

        let simboloOld = DatosTicTacToe.obtenerValor(posicion);
        let ultimoSimbolo = DatosTicTacToe.getUltimoValorIntroducido();
        let simboloGanador = DatosTicTacToe.obtenerGanador();

        if (simboloOld == null && simboloGanador == null) {

            if (ultimoSimbolo == 'X') {
                DatosTicTacToe.modificarValor(posicion, 'O')
            } else {
                DatosTicTacToe.modificarValor(posicion, 'X')
            }

            //logica para jugador2MiniMAX
           
            DatosTicTacToe.lanzarJugador2();
                        
        }

        if(DatosTicTacToe.obtenerGanador() == 'X'){
            props.guardarWin(true);
            props.guardarOpenM(true);
        }else if(DatosTicTacToe.obtenerGanador() == 'O'){
            props.guardarLoser(true)
            props.guardarOpenM(true);
        }else if(
            DatosTicTacToe.obtenerValor(0)!=null &&
            DatosTicTacToe.obtenerValor(1)!=null &&
            DatosTicTacToe.obtenerValor(2)!=null &&
            DatosTicTacToe.obtenerValor(3)!=null &&
            DatosTicTacToe.obtenerValor(4)!=null &&
            DatosTicTacToe.obtenerValor(5)!=null &&
            DatosTicTacToe.obtenerValor(6)!=null &&
            DatosTicTacToe.obtenerValor(7)!=null &&
            DatosTicTacToe.obtenerValor(8)!=null
        ){
            props.guardarOpenM(true);
            props.guardarOpenM(true);
        }

    }

    let simbolo = DatosTicTacToe.obtenerValor(props.posicion);
    let etiqueta = '';


    if (simbolo != null) {
        etiqueta = simbolo;

    }

    return (
        simbolo == null ?
            <Boton
                onClick={hacerClick.bind(this, props.posicion)}
            > {etiqueta} </Boton>
            : simbolo === 'X' ?
                <Boton2
                    onClick={hacerClick.bind(this, props.posicion)}
                >
                    {etiqueta}
                </Boton2>
                :
                    <Boton3
                        onClick={hacerClick.bind(this, props.posicion)}
                    >
                        {etiqueta}
                    </Boton3>
    );

}
export default observer(Casilla);
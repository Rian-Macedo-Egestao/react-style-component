import React from "react";
import { Box } from "../../assets/UI";
import {extratoLista} from "../../info";
import { Botao } from "../../assets/UI";
import Itens from "../Itens";

const Extrato = () => {
    return <Box>
        {
            extratoLista.updates.map(
                ({id, type, value, date, from}) =>{
                    return (
                        <Itens id={id} type={type} value={value} date={date} from={from}></Itens>
                    );
                }

            )
        }
        <Botao>Ver Mais</Botao>
    </Box>
}

export default Extrato
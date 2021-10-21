import React from 'react';
import alimentacao from '../assets/images/alimentacao.svg';
import outros from '../assets/images/outros.svg';
import saude from '../assets/images/saude.svg';
import transporte from '../assets/images/transporte.svg';
import utilidades from '../assets/images/utilidades.svg';
import {Icone} from '../assets/UI'

export default ({type}) => {
    const Imagens = {
        Restaurante : <Icone src={alimentacao} alt="Restaurante"></Icone>,
        Utilidades : <Icone src={utilidades} alt="Utilidades"></Icone>,
        Saude : <Icone src={saude} alt="Saude"></Icone>,
        Transporte : <Icone src={transporte} alt="Transporte"></Icone>,
        Default : <Icone src={outros} alt="Outros"></Icone>
    }

    return (Imagens[type] )||(Imagens.Default) 
}




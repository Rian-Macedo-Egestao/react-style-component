import React from 'react';
import alimentacao from '../assets/images/alimentacao.svg';
import outros from '../assets/images/outros.svg';
import saude from '../assets/images/saude.svg';
import transporte from '../assets/images/transporte.svg';
import utilidades from '../assets/images/utilidades.svg';
import {IconeTema} from '../assets/UI'

export default ({type}) => {
    const Imagens = {
        Restaurante : <IconeTema src={alimentacao} alt="Restaurante"></IconeTema>,
        Utilidades : <IconeTema src={utilidades} alt="Utilidades"></IconeTema>,
        Saude : <IconeTema src={saude} alt="Saude"></IconeTema>,
        Transporte : <IconeTema src={transporte} alt="Transporte"></IconeTema>,
        Default : <IconeTema src={outros} alt="Outros"></IconeTema>
    }

    return (Imagens[type] )||(Imagens.Default) 
}




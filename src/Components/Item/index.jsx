import React from 'react';
import styled from 'styled-components';

const Itens = styled.div`
display: flex;
flex-direction: column;

.bold {
    font-weight: bold;
}
`

export default ({type, from, value}) => {

    return (
        <Itens>
            <span className="bold">{type}</span>
            <span>{from}</span>
            <span>{value}</span>
        </Itens>
    )
}
import React from "react";
import styled from "styled-components";
import Item from "../Item";
import ImageFilter from "../ImageFilter";

const Itens = styled.div`
box-shadow: 0,0,0,0.1;
border-radius: 10px;
margin: 2px, 0;
display: flex;
align-items: center;
justify-content: space-around;
padding: 10px;
font-size: 12px;
`;

export default (props) => { 
    console.log({...props})
    return (
    <Itens>   
        <ImageFilter type={props.type}></ImageFilter>
        <Item {...props}></Item>
        <span>{props.date}</span>
    </Itens>
    )
} 

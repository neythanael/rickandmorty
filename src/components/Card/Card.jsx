import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardStyled = styled.div`
color: white;
border-top: 10px solid rgb(230,14,214);
border-right: 5px double rgb(230,14,214);
border-bottom: 10px solid rgb(230,14,214);
border-left: 5px double rgb(230,14,214);
background: black;
border-radius:18px;
width: fit-content;
padding: 0px;
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
display: flex;
flex-direction: column;
margin: 0 auto;
transition: 0.8s;

`;
export const Boton = styled.button`
border-radius: 5px;
border:3px;
width: fit-content;
heigth:fit-countent;
transition: 1.0s;
:hover{
    background-color: red;
    box-shadow: -3px -3px 80px 6px rgba(0,0,0,1);
    `
    export const Caractrs = styled.h2`
    background-color:#8615ba;
    display: inline;
    font-size: 35px;
    color: black;
    border-radius:18px;
    `

export default function Card(props) {
   return (
      <CardStyled>
         <Boton onClick={props.onClose}>X</Boton>
         <Link to={ `/detail/${props.id}`}><Caractrs>{props.name}</Caractrs></Link>
         <Caractrs>{props.species}</Caractrs>
         <Caractrs>{props.gender}</Caractrs>
         <img src={props.image} alt="una imagen" />
      </CardStyled>
   );
}

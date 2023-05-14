import { Link } from "react-router-dom";
import styled from "styled-components";
import { connect } from 'react-redux';
import { addFav, removeFav} from '../../redux/actions';
import React, { useState, useEffect } from "react";



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
  border: 3px;
  width: fit-content;
  height: fit-content;
  transition: 1.0s;
  :hover {
    background-color: red;
    box-shadow: -3px -3px 80px 6px rgba(0, 0, 0, 1);
  }
`;

 function Card ({id,name,species,gender,image,onClose,addFav,removeFav,myFavorites}) {
  

   const [isFav, setIsFav] = useState(false);
   
   
   const handleFavorite = () => {

    if (isFav) {
      setIsFav(false);
      removeFav(id);
      
    } else {
      setIsFav(true);
      addFav({id,species,gender,image,onClose,name});
    }
  };
  
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);
  

   return (
     <CardStyled>
      
       <Boton onClick={onClose}>X</Boton>
       <Link to={`/detail/${id}`}>
         <CardStyled>{name}</CardStyled>
       </Link>
       <CardStyled>{species}</CardStyled>
       <CardStyled>{gender}</CardStyled>
       <img src={image} alt="una imagen" />
       {
    isFav ? (
      <button onClick={handleFavorite}>❤️</button>
    ) : (
      <button onClick={handleFavorite}>🤍</button>
    )
  }
  
     </CardStyled>
   );
 }
 
 const mapDispatchToProps = (dispatch) => {
   return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
   };
 };
 const mapStateToProps = state =>{ 
  return {
  myFavorites: state.myFavorites
};}
 
 export default connect(mapStateToProps, mapDispatchToProps)(Card);
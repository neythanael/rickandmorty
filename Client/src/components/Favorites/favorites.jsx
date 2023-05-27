import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card.jsx';
import './favorites.css';
import styled from 'styled-components';
const DivCard = styled.div`
display: flex;
justify-content: space-evenly;
`;

const Favorites = ({ myFavorites }) => {
  return( 
    <div className="favorites-container">
      <h1>My Favorites</h1>
    
      <DivCard>
            {myFavorites?.map(({id, name, species, gender, image})=>(
                <Card
                id={id}
                key={id}
                name={name}
                species={species}
                gender={gender}
                image={image}
                />
            ))}
        </DivCard>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};


export default connect(mapStateToProps, null)(Favorites);
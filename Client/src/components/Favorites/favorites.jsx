import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card.jsx';
import './favorites.css';


const Favorites = ({ myFavorites }) => {
  return (
    <div className="favorites-container">
      <h1>My Favorites</h1>
      <div className="favorites-list">
        {myFavorites.map((character) => (
          <Card 
          key={character.id}
          character={character} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
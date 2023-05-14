import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card.jsx';
import './favorites.css';


const Favorites = ({ myFavorites }) => {
  return( 
    <div className="favorites-container">
      <h1>My Favorites</h1>
    
      <div>
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
        </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};


export default connect(mapStateToProps, null)(Favorites);
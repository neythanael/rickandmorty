import {ADD_FAVORITE, REMOVE_FAVORITE } from "../redux/actions";

const initialState = {
    myFavorites:[],
};
const rootReducer = (state= initialState, action) => {
        switch (action.type) {
          case ADD_FAVORITE:
            return { ...state, myFavorites: payload, allCharacters: payload };
              case REMOVE_FAVORITE:
                return{
                    ...state,
                    myFavorites: state.myFavorites.filter(character => character.id !== action.payload.id)
                }
                default:
                    return state;
    }

}

export default rootReducer;

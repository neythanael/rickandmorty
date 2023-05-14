import { ADD_FAV, REMOVE_FAV } from "./actions";

const initialState = {
  myFavorites: [],
  allcharacters:[]
};
const rootReducer = (state = initialState, {type,payload}) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: payload, 
        allcharacters: payload
      };
    case REMOVE_FAV:
      return {
        ...state,
      myFavorites: payload
      };
    default:
      return state;
  }
};
export default rootReducer;

import axios from 'axios';

export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';

export function addFav(character) {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
     try {
       const response = await axios.post(endpoint, character);
       return dispatch({
         type: ADD_FAV,
         payload: response.data,
       });
     } catch (error) {
       console.log("Error:", error);
     }
   };
 };
 
 
  
 export function removeFav(id) {
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   return async (dispatch) => {
     try {
       const response = await axios.delete(endpoint);
       return dispatch({
         type: REMOVE_FAV,
         payload: response.data,
       });
     } catch (error) {
       console.log("Error:", error);
     }
   };
 };
 
//express
const axios = require ("axios");

const url= "https://rickandmortyapi.com/api/character/"

const getCharById = (req, res) =>{
  const {id} = req.params
  axios.get(url + id)
  .then(response => {
    const { id, status, name, species, origin, image, gender } = response.data;
    res.status(200).json({ id, status, name, species, origin, image, gender });
  })
  .catch(error => {
    if (error.response && error.response.status === 404) {
      res.status(404).send('Not found');
    } else {
      res.status(500).send({ message: error.message });
    }
  });
}




module.exports =getCharById;












/*
SIN EXPRESS
AXIOS
const axios = require('axios')
const getCharById = (id) => {
    let url = "https://rickandmortyapi.com/api/character/";
    return axios.get(url+id)
      .then(data => {
        let {id, name, gender, species, origin, image, status}= data.data
        let charObj = {
          id,
          name,
          gender, 
          species,
          origin,
          image,
          status
        }
        return charObj;
      })
      .catch(err => {
        console.error(err);
        throw err;
      });
  };


module.exports = getCharById;
*/
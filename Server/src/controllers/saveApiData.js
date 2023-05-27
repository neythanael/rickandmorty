const axios = require("axios")
const { character } = require('../DB_connection.js');


const getApiData = async ()=>{
    
try {
    let characterInfoApi = [];
    for(let i = 1; i < 6; i++){
        const apiData = await axios(`https://rickandmortyapi.com/api/character?page=${i}`)
        characterInfoApi.push(apiData);
    }
    characterInfoApi = await Promise.all(characterInfoApi);
    let characterInfoApi2 = characterInfoApi.map(response => response.data.results.map(charac =>{
        return {
            id:charac.id,
            name: charac.name,
            species: charac.species,
            status: charac.status,
            origin:charac.origin.name,
            gender:charac.gender,
            image:charac.image
        }
    }))
 
    let allCharacters = characterInfoApi2.flat()
    return allCharacters;
    
} catch (error) {
    return {error: error.message}
    
}
}

const saveApiData = async ()=>{
    try {
        const characterall = await getApiData();
        await character.bulkCreate(characterall);
    } catch (error) {
        return {error: error.message}
    }
}

module.exports = saveApiData;
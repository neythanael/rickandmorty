

let myFavorites = [];


function postFav (req, res) {
    console.log(req.body)
//const {character}  = req.body;

    myFavorites.push(req.body);
    return res.status(200).json(myFavorites);
};
const deleteFav = (req,res)=>{
    let {id} = req.params
    myFavorites = myFavorites.filter(char=> char.id !== +id)
    res.status(200).json(myFavorites)
}


module.exports = { postFav, deleteFav }
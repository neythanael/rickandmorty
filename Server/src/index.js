//EXPRESS

const express = require('express');
const server = express();
const PORT = 3001;
const saveApiData = require('./controllers/saveApiData.js');
const {sequelize,} = require('./DB_connection')
const router = require ("../src/routes/index.js")

server.use(express.json())
//server.listen(PORT, () => {
  // console.log('Server raised in port: ' + PORT);
//});
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});
 sequelize.sync({force: true}).then(async()=>{
   await saveApiData();
   server.listen(PORT, () => {
      console.log('Server raised in port: ' + PORT);
   });
 })
server.use("/rickandmorty", router)

module.exports= (server)





















//http
//const http = require('http');
//const characters = require("./utils/data");
//const getCharById = require("./controllers/getCharById");

//const PORT = 3001;
//
//http.createServer((req, res)=>{
 //   console.log(`server raised port ${PORT}`);
//    res.setHeader('Access-Control-Allow-Origin', '*');
 //   let {url} =req;
//    if (url.indexOf("/rickandmorty/character")>=0){
//      const id = parseInt(url.split("/").pop())
 //     //let found = characters.find((character)=>character.id===urlId)
 //     getCharById(id)
 //     .then((response)=>{
 //       if (response){
 //       res.writeHead(200, {"Content-Type": "application/json"})
 //       res.end(JSON.stringify(response));
  //    } else {
  //      res.writeHead(500, {"Content-Type": "application/json"})
   //     res.end(JSON.stringify(response));
//
   //   }
   //   })
   //   
   // }
//}).listen(PORT,"localhost")
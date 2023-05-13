//EXPRESS

const express = require('express');
const server = express();
const PORT = 3001;
const router = require ("../src/routes/index")

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
server.use(express.json())
server.use("/rickandmorty", router)
server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});




















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
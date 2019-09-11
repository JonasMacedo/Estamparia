const express = require('express');
const routes = express.Router();

routes.get("/",(req,res)=>{
    return res.send('Rota ativa');
});


module.exports = routes;
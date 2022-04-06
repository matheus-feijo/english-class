const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.listen(3333);

app.get("/teste",(req,res)=>{
    res.status(200)
    .send({mensagem:"ESTOU APENAS TESTANDO"})
});

module.exports = app;
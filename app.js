const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('app');
const path = require('path');

const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,"/public/")));

app.get("/", (req,res) =>{
    res.send('Hello worlds');
})

app.listen(port, ()=>{
    debug("Listening on port %d",port);
})
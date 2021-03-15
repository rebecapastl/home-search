const express = require('express');
const app = express();

const connection = require('./db/connection');

//const Home = require('./models/Home');

app.use(express.static('public'));
app.use(express.json());

connection.once('open', ()=>{

    console.log('connected to db');

        const server = app.listen(8080, ()=>{
        console.log('listening on 8080');
    });
});

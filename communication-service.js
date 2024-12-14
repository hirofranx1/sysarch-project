const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const port = 3003;
//const axios = require('axios');

const app = express();
app.use(express.json());
//to download
//http proxy middleware

const sequelize = new Sequelize('CRM', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});


sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.')})
    .catch(error => 
        {console.error('Unable to connect to the database:', error)});

    







app.listen(port, () => {
    console.log(`Order service listening at http://localhost:${port}`)
});
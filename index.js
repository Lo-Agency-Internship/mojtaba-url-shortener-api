require("dotenv").config();
const {Logger} = require('@lo-agency/logger');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const apiPrefix = '/api/v1';
const PORT = process.env.PORT || 3000;

// routes

app.all('*', (req, res) => {
    Logger.http(`route: url '${req.url}' not found`);
    res.status(404).send('route not found');
});

app.listen(PORT, () => Logger.info(`Listening on port ${PORT}`));
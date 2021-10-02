const { Logger } = require('@lo-agency/logger');
require('dotenv').config();
const fs = require('fs');
const db = require('./db-connection');

const path = 'src/database/migration/urls.sql';


// read the file with a sync function
fs.readFile(path, 'utf-8', function (err, data) {
    if(err){
        return Logger.error(err.message);
    }
    try {
        db.exec(data);
        Logger.info('Table urls was created successfully.');
    } catch (err) {
        Logger.error(err.message);
    }
});
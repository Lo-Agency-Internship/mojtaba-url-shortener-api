require('dotenv').config();
const { Logger } = require('@lo-agency/logger');
const db = require('./db-connection');
const fs = require('fs');
const path = 'src/database/migration/urls.sql';


// read the file with a sync function
fs.readFile(path, 'utf-8', function (err, data) {
    if(err){
        return Logger.error(err.message);
    }
    try {
        db.exec(data);
        Logger.info('Table was created successfully.');
    } catch (err) {
        Logger.error(err.message);
    }
});
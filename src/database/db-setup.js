require('dotenv').config();
const { Logger } = require('@lo-agency/logger');
const fs = require('fs');
const db = require('./db-connection');

// Path to the file which contains our create command to create the table urls
const path = 'src/database/migration/01_urls.sql';

/**
 * Reads the file from above path and executes the data
 *
 */
fs.readFile(path, 'utf-8', function (err, data) {
	if (err) {
		Logger.error(err.message);
		return;
	}
	try {
		db.exec(data);
		Logger.info('Table urls was created successfully.');
	} catch (err) {
		Logger.error(err.message);
	}
});
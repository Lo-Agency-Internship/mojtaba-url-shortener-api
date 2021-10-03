require("dotenv").config();
const DB = require("better-sqlite3");
module.exports = new DB(process.env.DB_PATH || `${__dirname}/store.db`);
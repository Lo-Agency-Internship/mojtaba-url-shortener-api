const db = require('./db-connection');

/**
 * get all data from database
 * @param {String} tableName    - the name of the table in database
 * @param {string} properties   - the properties(colums) of the table
 * @returns                     - the return value is an array of row objects,
 *                                if no rows are found, the array will be empty,
 *                                if execution of the statement fails, an Error is thrown
 */
const getAllData = function (tableName, properties) {
    const statement = db.prepare(`SELECT ${properties} FROM ${tableName}`);
    return statement.all();
}


/**
 * get single row from a table of database
 * @param {String} tableName                    - the name of the table in database
 * @param {String} properties                   - the properties(colums) of the table
 * @param {String} whereProperty                - the property that we want to get data based on it
 * @param {(String|Number)} wherePropertyValue  - the value of property that we want to get data based on it
 * @param {String} orderby                      - keyword is used to sort the result-set in ascending or descending order
 * @returns                                     - the return value is an array of row objects,
 *                                                if no rows are found, the array will be empty,
 *                                                if execution of the statement fails, an Error is thrown
 */
const getData = function (tableName, properties, whereProperty, wherePropertyValue, orderby = 'id ASC'){
    return db.prepare(`SELECT ${properties} FROM ${tableName} 
        WHERE ${whereProperty} = ? ORDERBY ${orderby}`).all(wherePropertyValue);
}


/**
 * add a new record into table
 * @param {*} tableName         - the name of the table in database
 * @param {*} data              - data that we want to insert to table
 * @param {*} properties        - the properties(colums) of the table
 * @returns                     - an info object describing any changes made: (info.changes & info.lastInsertROWID)
 */
const insertData = function (tableName, data, properties){
    const statement = db.prepare(`INSERT INTO ${tableName} (${properties.join(", ")}) VALUES (@${properties.join(", @")})`);
    return statement.run(data);
}
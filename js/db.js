const sqlite3 = require('sqlite3').verbose();
const { createTable } = require('./createTable');

module.exports = () => {
    return new Promise ( (resolve,reject) => {
    new sqlite3.Database('lootbag.sqlite', () => {
        createTable()
            .then(data => {
                resolve(data);
            })
            .catch(err => {
                console.log('oops', err)
                reject(err);
            });
        });
    });
};
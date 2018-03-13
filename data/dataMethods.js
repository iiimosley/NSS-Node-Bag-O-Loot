"use strict"

const sqlite = require('sqlite3').verbose();

module.exports.sqlite;

module.exports.db = new sqlite.Database('lootbag.sqlite', (err) => {
    if (err) return console.log(err, "db not werk");
    console.log("Connection successful");
}); 
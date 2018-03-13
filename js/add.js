"use strict"

const { sqlite, db } = require('../data/dataMethods');

module.exports = ({name, toy}) => { 
    return new Promise((resolve, reject) => {
        db.run(`INSERT INTO loot VALUES(null, "${name}", "${toy}", 0)`, function (err) {
            resolve({id: this.lastID});
            reject(err => console.log("WOOPS, not adding to DB", err));
        });
    });
};
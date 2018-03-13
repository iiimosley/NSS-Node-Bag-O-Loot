"use strict"

const { sqlite, db } = require('../data/dataMethods');

module.exports = (name) => {
    return new Promise((resolve, reject) => {
        db.run(`UPDATE loot SET delivered=1 WHERE name="${name}"`, function (err) {
            if(err) return reject(err);
            resolve({changes: this.changes});        
        });
    });
}
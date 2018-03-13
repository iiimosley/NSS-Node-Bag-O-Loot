"use strict"

const { sqlite, db } = require('../data/dataMethods');

module.exports = ({name, toy}) => {
    return new Promise((resolve, reject) => {
        db.run(`DELETE FROM loot WHERE name="${name}" AND toy="${toy}"`, function (err) {
            if(err) return reject(err);
            // console.log("WOOPS, not adding to DB", err));
            resolve({changes: this.changes});
        });
    });
};
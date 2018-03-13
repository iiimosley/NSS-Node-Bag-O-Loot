"use strict"

const { sqlite, db } = require('../data/dataMethods');

module.exports = (name) => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM loot WHERE name="${name}"`, function (err, allGifts) {
            resolve(allGifts);
            reject(err => console.log("WOOPS, not getting selected loot from DB", err));
        });
    });
};
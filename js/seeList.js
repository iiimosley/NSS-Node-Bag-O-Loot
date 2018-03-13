"use strict"

const { sqlite, db } = require('../data/dataMethods');

module.exports = () => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM loot", function (err, allGifts) {
            resolve(allGifts);
            reject(err => console.log("WOOPS, not getting all loot from DB", err));
        });
    });
};
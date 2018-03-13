const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('lootbag.sqlite');
const { loot } = require('../data/lootContents');

module.exports.createTable = () => {
    return new Promise((resolve, reject) => {
        db.run('DROP TABLE IF EXISTS loot')
        .run('CREATE TABLE IF NOT EXISTS loot (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, toy TEXT, delivered INTEGER)', (err) => {
            if (err) return reject(err);
            resolve(insertRows());
        });
    });
};

const insertRows = () => {
    return Promise.all(loot.map(({ name, toy }) => {
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO loot VALUES (null, "${name}", "${toy}", 0)`, function (err) {
                if (err) return reject(err);
                resolve({id: this.lastID})
            });
        });
    }));  
};
const db = require('../js/db.js');
const { assert: { isFunction, isArray, isOk } } = require('chai');

describe("createDB", () => {
    it("should be a function", () => {
        isFunction(db);
    });
    it("should return an array", ()=>{
        return db()
        .then((data) => {
            isArray(data)
        });
    })
});
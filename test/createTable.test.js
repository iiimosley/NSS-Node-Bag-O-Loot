"use strict"
const { createTable } = require('../js/createTable.js');
const { assert: { isFunction, isArray, isObject, equal } } = require('chai');

describe("createTable", ()=>{
    it("should be a function", ()=>{
        isFunction(createTable);
    });
    it("should return an array", ()=>{
        return createTable()
        .then(data => {
            isArray(data);
            data.forEach(toy => {
               isObject(toy);
            });
        });
    });
    it("should return an array of objects", () => {
        return createTable()
        .then(data => {
            data.forEach(toy => {
                isObject(toy);
            });
        });
    });
});


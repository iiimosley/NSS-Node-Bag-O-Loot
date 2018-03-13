'use strict';

const {createTable} = require('../js/createTable');
const addGift = require('../js/add');
const { assert: { isFunction, isArray, isObject, deepEqual } } = require('chai');

let newKid = { name: "Tilda", toy: "stick" }

describe('add gift', ()=>{
    beforeEach(done => {
        createTable()
        .then(() => done());
    });
    it('should be a function', ()=>{
        isFunction(addGift);
    });
    it('should return an object', () => {
        return addGift(newKid)
        .then(data=>{
            console.log(data);
            isObject(data);
        });
    });
});
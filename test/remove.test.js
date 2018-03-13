'use strict';

const { createTable } = require('../js/createTable');
const addGift = require('../js/add');
const removeGift = require('../js/remove');
const { assert: { isFunction, isArray, isObject, deepEqual } } = require('chai');

let removeKid = { name: "Jimmy", toy: "yoyo" };

describe('remove gift', () => {
    beforeEach(done => {
        createTable()
        .then(() => addGift(removeKid))
        .then(()=>done());
    });
    it('should be a function', () => {
        isFunction(removeGift);
    });

    it('should return an object', () => {
        return removeGift(removeKid).then(data => {
            console.log(data);
            isObject(data);
            deepEqual(data, {changes: 1});
        });
    });
});

        // isObject(remove(removeKid));
        // deepEqual(remove(removeKid), removeKid);
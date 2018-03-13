'use strict';

const { createTable } = require('../js/createTable');
const allGifts = require('../js/seeList');

const { assert: { isArray, isObject, deepEqual } } = require('chai');

describe("allGifts", () => {
    beforeEach(done => {
        createTable()
            .then(() => done());
    });
    it('should return an array', () => {
        return allGifts()
            .then(data => isArray(data));
    });
    it('should return an array with nested objects', () => {
        return allGifts()
        .then(data => {
            data.forEach(gift => {
                isObject(gift);
            });
        });
    });
});
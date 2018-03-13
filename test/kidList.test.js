'use strict';

const { createTable } = require('../js/createTable');
const kidList = require('../js/kidList');

const { assert: { isArray, isObject, deepEqual } } = require('chai');

describe("selectKids", () => {
    beforeEach(done => {
        createTable()
            .then(() => done());
    });
    it('should return an array', () => {
        return kidList("Jack")
            .then(data => isArray(data));
    });
    it('should return an array with nested objects', () => {
        return kidList("Jack")
        .then(data => {
            data.forEach(kid => {
                isObject(kid);
            });
        });
    });
});
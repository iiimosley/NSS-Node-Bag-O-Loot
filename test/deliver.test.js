'use strict';

const { createTable } = require('../js/createTable');
const addGift = require('../js/add');
const deliver = require('../js/deliver');

const { assert: { isArray, isObject, deepEqual } } = require('chai');

let deliverKid = { name: "Todd", toy: "minecraft" };

describe("kidGifts", () => {
    beforeEach(done => {
        createTable()
        .then(()=> addGift(deliverKid))
        .then(() => done());
    });
    it('should return an object with changes noted', () => {
        return deliver(deliverKid.name)
            .then(data => {
                isObject(data);
                deepEqual(data, {changes: 1})
            });
    });
});
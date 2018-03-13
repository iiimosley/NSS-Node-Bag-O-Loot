'use strict';

const { loot } = require('../data/lootContents.js');
const { assert: { isArray, isObject } } = require('chai');

describe('get Loot (initial)', () => {
    it('should return an array', () => {
        isArray(loot);
    });
    it('should return an object', () => {
        loot.forEach(item => isObject(item));
    });
});
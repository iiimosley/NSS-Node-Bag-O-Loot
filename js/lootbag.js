#!/usr/bin/env node

'use strict';

const addGift = require('./add');
const removeGift = require('./remove');
const seeList = require('./seeList');
const kidList = require('./kidList');
const delivered = require('./deliver');

// const db = require('./db')();

let [,,...args] = process.argv;

let kidGift;

if (args[0] === "add") {
    kidGift = { name: `${args[1]}`, toy: `${args[2]}` };
    console.log(kidGift);
    return addGift(kidGift)
        .then(data=>console.log(`${kidGift.name}'s ${kidGift.toy} added to line ${data.id}`))
} else if (args[0] === "remove") {
    kidGift = { name: `${args[1]}`, toy: `${args[2]}` };
    removeGift(kidGift);
} else if (args.length === 1 && args[0] === "ls") {
    return seeList()
    .then(allGifts => {
        allGifts.forEach(gift => {
            console.log([gift]);
        });
    });
} else if (args.length === 2 && args[0] === "ls") {
    return kidList(args[1])
    .then(allGifts => {
        allGifts.forEach(gift => {
            console.log(gift);
        });
    });
} else if (args.length === 2 && args[0] === "delivered") {
    return delivered(args[1])
    .then(data => {
        !data.changes 
        ? console.log("no gifts to mark delivered")
        : console.log("delivered gifts:", data.changes);
    });
} else {
    console.log("please enter an appropriate command:\n •Add a gift to the loot bag by entering a name and toy: './js/lootbag.js add [name] [gift]'\n •Remove a gift from the loot bag by entering a name and toy: './js/lootbag.js remove [name] [gift]\n •To see all gifts from the lootbag, run the following; './js/lootbag.js ls'\n •To see all gifts from the lootbag for a specified name, run the following; './js/lootbag.js ls [name]'\n •To mark a gift as delivered for a particular name, run the following: './js/lootbag.js delivered [name]'");
}



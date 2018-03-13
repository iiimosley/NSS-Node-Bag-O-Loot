# NSS: Santa's Lootbag 
#### Exercise in Modularity and Test Driven Development via Node.Js Environment

### Goals
+ Execute SQL queries through SQLite and CLI argument manipulation
+ Build application following TDD process, incrementally building functionality with step-by-step testing, [Mocha](https://mochajs.org/) & [Chai](http://chaijs.com/)

### Directive
Santa's lootbag needed a database to keep track of all the gifts to be delivered on Christmas Eve. For ease of use, he needed to be able to interact with the database through the terminal's CLI. The following queries needed to be created for his submission to the database:
+ adding a gift to the lootbag
+ removing gifts from the bag, based on the name and gift
+ listing all gifts in the lootbag
+ listing all gifts for a particular name
+ updating gifts as 'delivered'

### Functionality
CLI can execute the necessary queries to the database with the following command line statements:
+ Adding a toy to the lootbag
```
$ ./js/lootbag.js add [name] [gift]
// i.e. ./js/lootbag.js add Suzy kite
```
+ Removing a gift
```
$ ./js/lootbag.js remove [name] [gift]
// i.e. ./js/lootbag.js remove Billy train
```
+ Listing all gifts in the lootbag
```
$ ./js/lootbag.js ls
```
+ Listing all gifts, per name
```
$ ./js/lootbag.js ls [name]
```
+ Updating gifts as delivered, per name
```
$ ./js/lootbag.js delivered [name]
```

#### Error handling
Proper error-handling/escaping implemented in conditional statements on command line arguments
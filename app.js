// npm - global command, comes with code
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (max)

// package.json - manifest file 
// manual approach (create package.json in the root)
// npm init (step by step, enter to skip)
// npm init -y (everythung default)

const _ = require('lodash');

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);

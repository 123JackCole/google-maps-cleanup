const fs = require('fs');

const mustTry = fs.readFileSync('NYC Must Try.csv', 'utf8').split('\n').map(line => line.split(',')[0]);
const ntt = fs.readFileSync('New York NTT.csv', 'utf8').split('\n').map(line => line.split(',')[0]);

const toRemove = ntt.filter(name => mustTry.includes(name));
console.log(JSON.stringify(toRemove));
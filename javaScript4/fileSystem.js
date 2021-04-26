let fs = require('fs');
let data = fs.readFileSync('abc.txt');
console.log(data.toString());

let wdata = 'This is krishna'
fs.writeFileSync('write.txt', wdata);
console.log(wdata);

fs.appendFileSync('abc.txt', "This is varun");
fs.unlinkSync('abc.txt');
fs.mkdirSync('other');
console.log(fs.existsSync('write.txt'));
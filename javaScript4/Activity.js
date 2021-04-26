let fs = require('fs');
let path = require('path');
let extension={
    'Images': ['.jpg', '.png', '.jpeg', '.gif'],
    'Audio': ['.mp3'],
    'Document': ['.pdf', '.doc', '.txt'],
    'Compressed': ['.zip', '.rar'],
    'Video': ['.mp4', '.mkv']
}

let input =  process.argv.slice(2);
console.log(input[0]);

let content = fs.readdirSync(input[0]);
// console.log(content);  // conyent shows in array form

for(let i=0; i<content.length; i++)
{
    console.log(content[i]);    //content show in data form index basis
    //extensions
    console.log(path.extname(content[i]));    
}
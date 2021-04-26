let fs = require("fs");
let input = process.argv.slice(2);
console.log("input",input);
let option = [];
let filePaths = [];
for(let i=0; i<input.length; i++){
    if(input[i]=="-s" || input[i]=="-b" || input[i]=="-n"){
        option.push(input[i]);
    }
    else{
        filePaths.push(input[i]);
    }
}

console.log("option", option);
console.log("filePaths", filePaths);

for(let i=0; i<filePaths.length; i++){
    let isFilePresent = fs.existsSync(filePaths[i]);
    if(isFilePresent ==false){
        console.log("filePaths", filePaths[i], "does not exist");
        return;
    }
}

let totalContent = "";
for(let i=0; i<filePaths.length; i++){
    let contentOfcurrent = fs.readFileSync(filePaths[i],"utf-8");
    totalContent = totalContent+contentOfcurrent + "\r\n"

}
// console.log(totalContent);

let isSoption = option.includes("-s");

if(isSoption == true){
    let contentArr = totalContent.split("\r\n");
    // console.log(contentArr);
    let tempArr=[];
    for(let i=0; i<contentArr.length; i++){
        if(contentArr[i]!==""){
            tempArr.push(contentArr[i]);
        }
    }
    totalContent = tempArr.join("\r\n");
}

let isN = option.includes("-n");
let isB = option.includes("-b");
let finalOpstion;
if(isN == true){
    if(isB == true){
        // the option that comes first that would be the final
        let idxN = option.indexOf("-n");
        let idxB = option.indexOf("-b");
        finalOpstion = idxB<idxN? "-b" : "-n";
    }
    else{
        finalOpstion = "-n;"
    }
}
    else if(isB == true){
        finalOpstion = "-b";
    }


// let isNoption = option.includes("-n");

if(finalOpstion = "-n"){
    let count = 1;
    let contentArr = totalContent.split("\r\n");
    // console.log(contentArr);
    for(let i=0; i<contentArr.length; i++){
        contentArr[i] = count+". " + contentArr[i];
        count++;
    }
    totalContent = contentArr.join("\n");
}

if(finalOpstion =  "-b"){
    let count = 1;
    let contentArr = totalContent.split("\r\n");
    // console.log(contentArr);
    for(let i=0; i<contentArr.length; i++){
    if(contentArr[i] != ""){
        contentArr[i] = count+". " + contentArr[i];
        count++;
    }
}
    totalContent = contentArr.join("\n");
}

console.log(totalContent);
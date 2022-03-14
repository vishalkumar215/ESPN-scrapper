const fs = require('fs');
const xlsx = require('xlsx')

let buffer = fs.readFileSync('./example.json')
// console.log(buffer)

let data = JSON.parse(buffer)
// console.log(data)

// we can also read or update our json file by directly require it
let jsonFile = require('./example.json')


//pushing new object in json file
jsonFile.push({
    "name":'thor',
    "last name" :"rock",
    "age":102,
    "friends":["vishal","tony","bruce"],
    "adress":{
        "city":"broklyn",
        "state":"new york"
    }
})
// console.log(data)

// to change into string
let stringdata = JSON.stringify(jsonFile);//
// console.log(stringdata)

//to create a new file
fs.writeFileSync("example2.json",stringdata)



//xlxs
let newWB = xlsx.utils.book_new();//creating new workbook
    let newWS = xlsx.utils.json_to_sheet(jsonFile);// to create a new worksheet     from json to sheet  or to rows an column
    xlsx.utils.book_append_sheet(newWB, newWS,'avenger');
    xlsx.writeFile(newWB,'abc.xlsx');


    // to read
    let wb = xlsx.readFile('abc.xlsx');
    let excelData = wb.Sheets['avenger'];
    let ans = xlsx.utils.sheet_to_json(excelData);
    console.log(ans)



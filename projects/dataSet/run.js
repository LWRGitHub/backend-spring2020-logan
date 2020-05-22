const fs = require('fs');
const filename = 'tab-film.tsv';

let dataset = fs.readFileSync(filename, 'utf8');

let datasetArray = dataset.split('\n');

let convertedEntriesArray = [];

for(let i = 0; i < datasetArray.length; i++){
    let currentEntry = datasetArray[i].split("\t");

    currentEntry.splice(8, 8);

    convertedEntriesArray.push(currentEntry);
}

class Statistic {
    constructor(entryArray){
        this.title = parseInt(entryArray[0]);
        this.reless = parseInt(entryArray[1]);
        this.locations = entryArray[2];
        this.funFact = entryArray[3];
        this.company = entryArray[4];
        this.distribution = entryArray[5];
        this.director = entryArray[6];
        this.witer = entryArray[7];
        this.actor1 = entryArray[8];
        this.actor2 = entryArray[9];
        this.actor3 = entryArray[10];
    }
}

let statisticArray = [];

for(let i = 0; i < convertedEntriesArray.length; i++){
    statisticArray.push(new Statistic(convertedEntriesArray[i]));
}

//console.log(statisticArray[5].locations);

let locations = {};

for(let i = 0; i < statisticArray.length; i++){
    //console.log(typeof statisticArray[i].locations);
    if(typeof statisticArray[i].locations === "string"){
        //console.log(statisticArray[i].company);
        if(!locations[statisticArray[i].company]){
            locations[statisticArray[i].company] = {
                adressCount: 0,
                company: statisticArray[i].company
            };
        }
        locations[statisticArray[i].company][statisticArray[i].locations] = statisticArray[i].locations;

        locations[statisticArray[i].company].adressCount++;
    }
}

let objKey = Object.keys(locations)

//console.log(objKey);

// let arrLocantioCount = [];

let largCount = 0;
let filmNameAnswer;

for(let i = 0; i < objKey.length; i++){

    if(locations[objKey[i]].adressCount > largCount){
        largCount = locations[objKey[i]].adressCount;
        if( locations[objKey[i]].company !== ''){
            filmNameAnswer = locations[objKey[i]].company;
        } 
    }
}

//console.log(locations);
console.log(largCount);
console.log(filmNameAnswer);

//console.log(Object.keys(locations).length);
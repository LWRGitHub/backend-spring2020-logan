//data
const fs = require('fs');
const filename = 'dataset_sample.csv';

let dataset = fs.readFileSync(filename, 'utf8');

let datasetArray = dataset.split('\n');

//let firstEntry = datasetArray[0].split(",");

let convertedEntriesArray = [];

for(let i = 0; i < datasetArray.length; i++){
    let currentEntry = datasetArray[i].split(",");

    currentEntry.splice(8, 8);

    convertedEntriesArray.push(currentEntry);
}

const dataHeadings = convertedEntriesArray.shift();
convertedEntriesArray.pop();

class Statistic {
    constructor(entryArray){
        this.year = entryArray[0];
        this.sex = entryArray[1];
        this.ageGroup = entryArray[2];
        this.race = entryArray[3];
        this.mechanism = entryArray[4];
        this.intention = entryArray[5];
        this.deaths = parseInt(entryArray[6]);
        this.pop = parseInt(entryArray[7]);
        this.rate = this.deaths / this.pop;
    }
}
let statisticArray = [];

//convert all array into statistics
for(let i = 0; i < convertedEntriesArray.length; i++){
    statisticArray.push(new Statistic(convertedEntriesArray[i]));
}
// let testStatisticObject = new Statistic(convertedEntriesArray[7]);

// console.log(testStatisticObject.deaths + " for year " + testStatisticObject.year, "POP: " + testStatisticObject.pop);

let filteredStatistecArray = [];

for(let i = 0; i < statisticArray.length; i++){

    if(statisticArray[i].ageGroup === "All Ages" || statisticArray[i].sex === "Both sexes" || statisticArray[i].race === "All races" || statisticArray[i].mechanism === "All Mechanisms" || statisticArray[i].intention === "All Intentions"){
        continue;
    } else  {
        filteredStatistecArray.push(statisticArray[i]);
    }
}

// Question 1 START
console.log("Q) What race has the majority of the mortal injuries?");

let allInjuriesTotal = [];

for(let i = 1; i < filteredStatistecArray.length; i++){

    let currentStat = filteredStatistecArray[i];
    let createNewObject = true;

    for(let e = 0; e < allInjuriesTotal.length; e++){
        if(allInjuriesTotal[e].race === currentStat.race){
            allInjuriesTotal[e].totalDeaths = allInjuriesTotal[e].totalDeaths + currentStat.deaths;

            createNewObject = false;

            break;
        } 
    }
    if(createNewObject) {
        let newTotalObject = {
            race: currentStat.race,
            totalDeaths: currentStat.deaths
        };

        allInjuriesTotal.push(newTotalObject);
    }
}

let highestDeathObject = allInjuriesTotal[0];

for(let i = 0; i < allInjuriesTotal.length; i++){
    if(highestDeathObject.totalDeaths < allInjuriesTotal[i].totalDeaths){
        highestDeathObject = allInjuriesTotal[i];
    }
}

console.log("A) The highest deaths based on the data is " + highestDeathObject.race + " with a total of " + highestDeathObject.totalDeaths + " deaths.");

//Question 1 END

//Qestion 2
// console.log("Q) What percetage of injuries where confirmed accidents?");

// let accidents = 0;
// let nonAccidents = 0;
// let undetermined = 0;

// for(let i = 0; i < filteredStatistecArray.length; i++){

//     let currentStat = filteredStatistecArray[i];

//     if(currentStat.intention === "Unintentional"){
//         accidents += currentStat.deaths;
//     } else if(currentStat.intention === "Undetermined"){
//         undetermined = undetermined + currentStat.deaths;
//     } else {
//         nonAccidents = nonAccidents + currentStat.deaths;
//     }


// }

// let accidentPercentage = (accidents / (nonAccidents + accidents)) * 100;
// accidentPercentage = number.toFixed(2);

// console.log("A) The percentage of accidents is " + accidentPercentage + "%, ignoring undetermined deaths. (Leagal intervention/war considered intentional)");

//Q 2 END

//Q3 

console.log("Q) For makes, which age group has the highest suicide rate?");

let ageGroupDeathTotals = [];

for(let i = 0; i < filteredStatistecArray.length; i++){

    let currentStat = filteredStatistecArray[i];

    if(currentStat.sex === "female"){
        continue;
    }

    let createObject = true;
    
    for(let e = 0; e < ageGroupDeathTotals.length; e++){
        if(currentStat.ageGroup === ageGroupDeathTotals.ageGroup){
            ageGroupDeathTotals[e].deathTotals = ageGroupDeathTotals[e].deathTotals + currentStat.deaths;

            createObject = false;
            break;
        }
    }

    if(createObject){
        ageGroupDeathTotals.push({
            ageGroup: currentStat.ageGroup,
            deathTotals: currentStat.deaths
        });
    }
}

console.log()

//Q3 END
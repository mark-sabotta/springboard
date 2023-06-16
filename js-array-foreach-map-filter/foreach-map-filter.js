
function doubleValues(arr){
    let newArr = [];
    arr.forEach(function(value, index, array){
        newArr.push(value*2);
    });
    return newArr;
}

function onlyEvenValues(arr){
    let newArr = [];
    arr.forEach(function(value, index, array){
        if(value%2 === 0){
            newArr.push(value);
        }
    });
    return newArr;
}


function showFirstAndLast(arr){
    let newArr = [];
    arr.forEach(function(value, index, array){
        
        let firstLast = value[0] + value[value.length-1];
        newArr.push(firstLast);
    });
    return newArr;
}

function addKeyAndValue(arr,key,value){
    arr.forEach(function(val){
        val[key] = value;
    });
    return arr;
}

function vowelCount(str){
    //I know this solution is significantally worse than the solution provided. I glanced at it, and I want to try to reproduce it on my own from memory later
    let vowelArray = [0, 0, 0, 0, 0];
    let arr = Array.from(str);
    arr.forEach(function(value, array){
        let char = value.toLowerCase();
        if(char === 'a'){
            vowelArray[0]++;
        }
        if(char === 'e'){
            vowelArray[1]++;
        }
        if(char === 'i'){
            vowelArray[2]++;
        }
        if(char === 'o'){
            vowelArray[3]++;
        }
        if(char === 'u'){
            vowelArray[4]++;
        }
    });
    let newObj = {};
    if(vowelArray[0]){
        newObj.a = vowelArray[0];
    }
    if(vowelArray[1]){
        newObj.e = vowelArray[1];
    }
    if(vowelArray[2]){
        newObj.i = vowelArray[2];
    }
    if(vowelArray[3]){
        newObj.o = vowelArray[3];
    }
    if(vowelArray[4]){
        newObj.u = vowelArray[4];
    }
    return newObj;
}

function doubleValuesWithMap(arr) {
    const newArr = arr.map(function(value, index, array){
        return value*2;
    })
    return newArr;
}


function valTimesIndex(arr){
    //this should have been a map
    const newArr = [];
    arr.forEach(function(value, index, array){
        newArr.push(value*index);
    })
    return newArr;
}


function extractKey(arr, key){
    return arr.map(function(value){
        return value[key];
    });
}


function extractFullName(arr){
    
    return arr.map(function(value) {
        return value.first + " " + value.last;
    })
}

function filterByValue(arr, key) {
    let newArr = arr.filter(function(val) {
        return val[key] !== undefined;
    });
    return newArr;
}


function find(arr, searchValue) {
    let result = arr.filter(function(value){
        return value === searchValue;
    });
    return result[0];
}

function findInObj(arr, key, searchValue) {
    
    let winner = arr.filter(function(val){
        return val[key] === searchValue;
    });
    return winner[0];
}


function removeVowels(str) {
    
    str = str.toLowerCase();
    let arr = str.split("");
    newArr = arr.filter(function(value){
        return 'aeiou'.indexOf(value) === -1;
    })
    //I was unaware of split and join when I did this, so I added the split from the solution but left my original "join" work.
    let newStr = "";
    newArr.forEach(function(value){
        newStr = newStr + value;
    })
    return newStr;
}

function doubleOddNumbers(arr) {
    return arr.filter(function(val){
        return val%2 === 1;
    }).map(function(value){
        return value*2;
    });
}

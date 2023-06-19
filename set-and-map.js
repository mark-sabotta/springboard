//1. new Set([1,1,2,2,3,4]) returns {1,2,3,4}
//2. [...new Set("referee")].join("") returns "ref"
//3.  let m = new Map();
//m.set([1,2,3], true);
//m.set([1,2,3], false); returns m with m = {[1,2,3], false}

const hasDuplicate = arr => new Set(arr).size !== arr.length;

const vowelMap = function(word) {
    let vowels = new Map();
    let chars = Array.from(word);
    chars.forEach( function(val){
        let value = val.toLowerCase();
        if('aeiou'.indexOf(value) !== -1){
            if(vowels.has(value)){
                vowels.set(value, vowels.get(val) + 1);
            }else{
                vowels.set(value, 1);
            }
        }
    });
    return vowels;
}
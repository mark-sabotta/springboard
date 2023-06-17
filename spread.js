const filterOutOdds = (...nums) => nums.filter(val => val % 2 === 0)

const findMin = (...nums) => Math.min(nums)

const mergeObj = (objOne, objTwo) => ({objOne, objTwo})

const doubleAndReturnArgs = (arr, ...args) => ([...arr, ...args].map(val => val*2))

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx+1)];
}

const extend = (array1, array2) => {
    return [...array1, ...array2];
}

const addKeyValue = (obj, key, val) => {
    return {...obj, [key] : val};
}

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

//update is just the addKeyValue function
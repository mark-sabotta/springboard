const double = arr => arr.map(val => val*2);

const squareAndFindEvens = num => (num.map(val => val**2)).filter(square => square % 2)

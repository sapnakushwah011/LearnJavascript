// forEach() method 

const numbers = [ 45, 4, 9, 16, 25 ];
var values = numbers.forEach(( item ) => console.log(item)
)

console.log(values);

//filter() method 

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = number.filter((num) => {
    return num > 4;
})

console.log(result);

// map()

let myNumbers = numbers.map((num) => num + 10 );
console.log(myNumbers);

myNumbers = numbers.map((num) => num + 10 ).map((num) => num * 2);
console.log(myNumbers);

// reduce()

let res = numbers.reduce((preValue, currentValue) => {
    console.log(preValue);
    return  preValue + currentValue;
});

console.log(res);
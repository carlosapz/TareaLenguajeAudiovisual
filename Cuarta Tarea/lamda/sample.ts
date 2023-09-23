let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(n: number): boolean {
    return n % 2 === 0;
}

let evenNumbers = numbers.filter(isEven);
console.log(evenNumbers); // [2, 4, 6, 8, 10]


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers.filter(n => n % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

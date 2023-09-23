function recursiveSum(arr: number[], index: number = 0): number {
    if (index === arr.length) return 0;
    return arr[index] + recursiveSum(arr, index + 1);
}

const numbers = [1, 2, 3, 4, 5];
const result = recursiveSum(numbers);
console.log(result); // 15

///////////////////////////
function sumNumbers(arr: number[]): number {
    return arr.reduce((acc, num) => acc + num, 0);
}

const numbers = [1, 2, 3, 4, 5];
const result = sumNumbers(numbers);
console.log(result); // 15

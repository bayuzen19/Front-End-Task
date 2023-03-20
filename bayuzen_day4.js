// Q1 : Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array.
numbers = [1,2,3,4,5];

function sumArray(numbers){
    let sum = 0;
    for (x=0;x < numbers.length;x++){
        sum = sum + numbers[x]
    };
    return sum
};

console.log(sumArray(numbers));

// Question 2 : Write a function that takes an array of numbers as an argument and returns the largest number in the array

numbers = [1,2,3,4,5]

function findLargestNumber(numbers) {
    numbers.sort((a, b) => a - b);
    let largestNumber = numbers[0];
    for (let i=1;i<numbers.length;i++){
        if(numbers[i] > largestNumber){
            largestNumber =  numbers[i];
        }
    }
    return largestNumber;
}

console.log(findLargestNumber(numbers));


// Question 3 : write a function that takes an array of numbers as an argument and returns a new array with only the even numbers from the original array
numbers = [1,2,3,4,5];

function filterEvenNumbers(numebrs) {
    let evenNumbers = [];
    for (let i=0;i<numbers.length;i++) {
        if(numbers[i]%2==0){
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}

console.log(filterEvenNumbers(numbers));

// Question 4 : Write a function that takes an array of strings as an argument and returns a new array with the lenght of each string in the original array.

words = ["hello","world"];

function getLengthsOfString(strings){
    let lenghts = [];
    for (let i=0;i<strings.length;i++){
        lenghts.push(strings[i].length);
    }
    return lenghts;
}

console.log(getLengthsOfString(words));

// Q5 : Write a function that takes an arrau of numbers as an argument and returns  a new arrau with the same numbers in reverse order.
numbers = [1,2,3,4,5]

function reverseArray(numbers) {
    return numbers.sort((a, b) => b - a);
}

console.log(reverseArray(numbers));

// Q6 : write a function that takes an array of numbers as an argument and returns the second smallest number in the array
numbers = [1,2,3,4,5]
function findSecondSmallestNumber(numbers) {
    let secondSmalletNumber = numbers.sort((a, b) => a -b);
    return secondSmalletNumber[1];
}

console.log(findSecondSmallestNumber(numbers));

// Q 7 : write a function that takes an array of strings as an argument and returns a new array with only the strings that start with the letter "a"

words = ["apple","banana","avocado"];

function filterStringsWithA(strings) {
    let filteredStrings = [];
    for (i=0;i<strings.length;i++){
        check = strings[i][0];
        if(check == "a") {
            filteredStrings.push(strings[i]);
        }
    }
    return filteredStrings;
}

console.log(filterStringsWithA(words));

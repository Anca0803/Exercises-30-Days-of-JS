
/* const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']  /*

// Iterate 0 to 10 using for loop, do the same using while and do while loop  

for (let i = 0; i <= 10; i++) {
    console.log(i)
}  

let a = 0

while (a <= 10) {
    console.log(a)
    a++
}

let b = 0
do {
    console.log(b)
    b++

} while (b <= 10)  

// Iterate 10 to 0 using for loop, do the same using while and do while loop

for (let i = 10; i >= 0; i--) {
    console.log(i)
}

let a = 10

while (a >= 0) {
    console.log(a)
    a--
}

let b = 10
do {
    console.log(b)
    b--

} while (b >= 0)


// Iterate 0 to n using for loop

const ps = require("prompt-sync")  // I needed to import Prompt to node
const prompt = ps();               // I needed to import Prompt to node
et n = prompt("enter number: ");

for (let i = 0; i <= n; i++) {
    console.log(i);
}


// Write a loop that makes the following pattern using console.log():


let str = ""
for (let i = 0; i < 7; i++) {
    str += "#"
    console.log(str)
}

    #
    ##
    ###
    ####
    #####
    ######
    #######
    
// Use loop to print the following pattern:


for (let i = 0; i <= 10; i++) {
    console.log(`${i}*${i} = ${i * i}`)
}
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100

// Using loop print the following pattern

for (i = 0; i <= 10; i++) {
    console.log(`${i}  ${i * i}  ${i ** 3}`)
}

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
 
// Use for loop to iterate from 0 to 100 and print only even numbers

for (i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

//Use for loop to iterate from 0 to 100 and print only odd numbers

for (i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

// Use for loop to iterate from 0 to 100 and print only prime numbers

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Loop through numbers from 0 to 100 and print the prime numbers
for (let i = 0; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}



// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (let i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum)



// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let evenSum = 0
let oddsSum = 0

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        evenSum += i
    } else {
        oddsSum += i
    }
}
console.log(evenSum)
console.log(oddsSum)



//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        evenOddSum[0] += i
    } else {
        evenOddSum[1] += i
    }
}
console.log(evenOddSum)
 
// Develop a small script which generate array of 5 random numbers

let randomArr = [];
for (let i = 0; i < 5; i++) {
    randomArr.push(Math.floor(Math.random() * 101));
}
console.log(randomArr)

// Develop a small script which generate array of 5 random numbers and the numbers must be unique

let randomUniqueArr = [];
for (let i = 5; randomUniqueArr.length < i;) {
    let random = Math.floor(Math.random() * 101);
    if (randomUniqueArr.indexOf(random) === -1) {
        randomUniqueArr.push(random);
    }
}
console.log(randomUniqueArr)


//Develop a small script which generate a six characters random id:


let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
let result = ""
for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * str.length)
    result += str[random]
}

console.log(result)

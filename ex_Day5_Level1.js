/* Exercise: Level 1
const countries = [
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
  'MongoDB'  */

]
// Declare an empty array;

const arr =[]
console.log(arr)

// Declare an array with more than 5 number of elements
const numbers = [1,2,3,4,5]
console.log(numbers)

// Find the length of your array
console.log(numbers.length)

// Get the first item, the middle item and the last item of the array

console.log(numbers[0], numbers[2], numbers[4])

// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

let mixedDataTypes = [5, 'Anca', true, 8.57, [2,-1], 'JS is fun']
console.log(mixedDataTypes.length)
                      
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', ' and Amazon']

// Print the array using console.log()

console.log(itCompanies)

// Print the number of companies in the array

console.log(itCompanies.length)

// Print the first company, middle and last company

console.log(itCompanies[0], itCompanies[3], itCompanies[itCompanies.length-1])  

// Print out each company
console.log(itCompanies.join())

// Change each company name to uppercase one by one and print them out
let stringCompanies = itCompanies.join()
console.log(stringCompanies.toUpperCase())

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.


console.log(itCompanies.join(', ')+ " are big IT companies")


// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found



// Filter out companies which have more than one 'o' without the filter method


// Sort the array using sort() method


// Reverse the array using reverse() method


// Slice out the first 3 companies from the array


// Slice out the last 3 companies from the array


// Slice out the middle IT company or companies from the array


// Remove the first IT company from the array


// Remove the middle IT company or companies from the array


// Remove the last IT company from the array

// Remove all IT companies

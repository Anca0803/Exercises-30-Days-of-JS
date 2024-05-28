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

let check = itCompanies.indexOf("Facebook")

if (check !==-1){
  console.log("Facebook");
} else {
  console.log("company is not found")
}


// Filter out companies which have more than one 'o' without the filter method
  if (itCompanies[0].includes('oo')){
  console.log(itCompanies[0]);
}
  else if (itCompanies[1].includes('oo')){
  console.log(itCompanies[1]);
}
   else if (itCompanies[2].includes('oo')){
  console.log(itCompanies[2]);
}
    else if (itCompanies[3].includes('oo')){
  console.log(itCompanies[3]);
}      
   else if (itCompanies[4].includes('oo')){
  console.log(itCompanies[4]);
        
}   
 else if (itCompanies[5].includes('oo')){
  console.log(itCompanies[5]);
}     
  else if (itCompanies[6].includes('oo')){
  console.log(itCompanies[6]);
}     
else{
  console.log("no companies with double o")}  HERE I AM NOT SURE HOW WOULD BE THE BEST APPROACH


//FROM internet - SOLUTIUON FOUND BELOW:

let OCompanies = []

for (let index = 0; index < itCompanies.length; index++) {
// get individual element of the array
const company = itCompanies[index];
// using split method, you can split the string based on the delimeter 'o'. you can then use length method of the array to determine the number of occurances 
const count = company.split('o').length - 1;
// check if the company contains more than one 'o'
if (count > 1) {
  // use push method to add elements to the OCompanies array
  OCompanies.push(company)
}
}

console.log(OCompanies) // ['Facebook', 'Google', 'Microsoft']



// Sort the array using sort() method

itCompanies.sort()
console.log(itCompanies)

// Reverse the array using reverse() method

itCompanies.reverse()
console.log(itCompanies)

// Slice out the first 3 companies from the array

console.log(itCompanies.slice(0,3))
            

// Slice out the last 3 companies from the array

console.log(itCompanies.slice(4,7)) or
console.log(itCompanies.slice(itCompanies.length - 3))


// Slice out the middle IT company or companies from the array
      HERE I NEED HELP PLEASE

// Remove the first IT company from the array

console.log(itCompanies.shift())

// Remove the middle IT company or companies from the array

 HERE I NEED HELP PLEASE

// Remove the last IT company from the array

console.log(itCompanies.pop())

// Remove all IT companies

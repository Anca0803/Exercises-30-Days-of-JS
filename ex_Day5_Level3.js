// The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

// Sort the array and find the min and max age

ages.sort()
console.log(ages[0])
console.log(ages[ages.length-1])

// Find the median age(one middle item or two middle items divided by two)

let size = ages.length;
let middle = size/2;
size%2 === 0 ? console.log((ages[middle -1] + ages[middle])/2) : console.log(ages[middle]);

// Find the average age(all items divided by number of items)
let total = 0
ages.forEach(age=> total+= age)
let average = total/ages.length
console.log(average)


// Find the range of the ages(max minus min)

let result = ages[ages.length-1]-ages[0]

console.log(result)


// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array

let MinAverage  =(Math.min(...ages)-average);
let MaxAverage = (Math.max(...ages)-average);

console.log(Math.abs(MinAverage));
console.log(Math.abs(MaxAverage));

//  Find the middle country(ies) in the countries array
//  Find the middle country(ies) in the countries array

//  Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.

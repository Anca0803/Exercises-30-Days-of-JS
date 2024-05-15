/* Using console.log() print out the following statement:

The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another. */

 let quote = "'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another"
 console.log(quote);

/*Using console.log() print out the following quote by Mother Teresa:
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead." */

let newQuote= '\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"'
console.log(newQuote);


//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

typeof "10"  //check => string
let num = '10'
let numInt = Number(num)
typeof(numInt) ===typeof(10);


//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let num = '9.8';
let numFloat = parseFloat(num);
parseFloat(num)===10;
let numInt =parseInt(num)+1;
numInt===10;



/* Check if 'on' is found in both python and jargon
I hope this course is not full of jargon. Check if jargon is in the sentence. */

let searchOnPython = "python";
let searchOnJargon ="jargon";
searchOnPython.includes("on");
searchOnJargon.includes("on");



//Generate a random number between 0 and 100 inclusively.

Math.floor(Math.random()*101);


//Generate a random number between 50 and 100 inclusively.
Math.floor(Math.random()*51)+50

//Generate a random number between 0 and 255 inclusively.


//Access the 'JavaScript' string characters using a random number.


/* Use console.log() and escape characters to print the following pattern.

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125 */

//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

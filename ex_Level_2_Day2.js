/* Using console.log() print out the following statement:

The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another. */

 let quote = "'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another"
 console.log(quote);

/*Using console.log() print out the following quote by Mother Teresa:
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead." */

let newQuote= '\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"'
console.log(newQuote);


//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

console.log(typeof "10" === typeof 10);
console.log(typeof Number("10") === typeof 10);


//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

console.log(parseFloat("9.8")===10);
console.log(Math.round(parseFloat("9.8"))===10);


/* Check if 'on' is found in both python and jargon
I hope this course is not full of jargon. Check if jargon is in the sentence. */

let searchOnPython = "python";
let searchOnJargon ="jargon";
searchOnPython.includes("on");
searchOnJargon.includes("on");


//Generate a random number between 0 and 100 inclusively.

Math.floor(Math.random()*101);


//Generate a random number between 50 and 100 inclusively.

Math.floor(Math.random()*51)+50;

//Generate a random number between 0 and 255 inclusively.

Math.floor(Math.random()*256);

//Access the 'JavaScript' string characters using a random number.

let word ="JavaScript";
word.charAt(Math.floor(Math.random()*word.length));

/* Use console.log() and escape characters to print the following pattern.

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125 */

pattern ="1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125";
console.log(pattern);

//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
CONTINUE FROM HERE

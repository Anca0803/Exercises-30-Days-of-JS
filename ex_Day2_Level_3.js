
/*'Love is the best thing in this world. Some found their love and some are still looking for their love.' 
Count the number of word love in this sentence. */


let string2 ="'Love is the best thing in this world. Some found their love and some are still looking for their love.' "
let patternTwo = /love/gi;
console.log(string2.match(patternTwo));

// Use match() to count the number of all because in the following sentence:  'You cannot end a sentence with because because because is a conjunction'

let string3 = "'You cannot end a sentence with because because because is a conjunction'";
let patternThree = /because/gi;
console.log(string3.match(patternThree));


/* Clean the following text and find the most frequent word (hint, use replace and regular expressions).

    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching' */

HERE I NEED HELP, PLEASE

    
/*  Calculate the total annual income of the person by extracting the numbers from the following text. 
'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'   */
let text = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month." ;
let regEx = /\d+/g ;
console.log(text.match(regEx));
    

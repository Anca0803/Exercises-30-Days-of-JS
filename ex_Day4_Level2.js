/* Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F  */

let score = prompt("Enter your score:");

if (score >= 80 && score <= 100) {
    console.log("A");
} else if (score >= 70 && score <= 89) {
    console.log("B");
} else if (score >= 60 && score <= 69) {
    console.log("C");
    console.log("b");
} else if (score >= 50 && score <= 59) {
    console.log("D");
} else (console.log("F"))


/* Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer   */


let season = prompt("What is the current month?")
if(season == "September"||season == "October" ||season == "November" ){
    console.log('the season is Autumn');
}
else if(season == "December"||season == "January" ||season == "February" ){
    console.log('the season is Winter');
}
else if(season =="March"||season == "April" ||season == "May" ){
    console.log('the season is Spring');
}
else if(season == "June"||season == "July" || season == "August" ){
    console.log('the season is Summer');
}
else
{console.log("please write down the correct month")}



/* Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.  

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.  */

let dayInput = prompt('What day is today ?')
let day = dayInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Monday is a working day')
    break
  case 'tuesday':
    console.log('Tuesady is a working da')
    break
  case 'wednesday':
    console.log('Wednesday is a working day')
    break
  case 'thursday':
    console.log('Thursday is a working day')
    break
  case 'friday':
    console.log('Friday is a working day')
    break
  case 'saturday':
    console.log('Saturday is a weekend')
    break
  case 'sunday':
    console.log('Sunday is a weekend')
    break
  default:
    console.log('It is not a week day.')
}






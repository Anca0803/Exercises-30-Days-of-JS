/* Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.  */

  let monthInput =prompt("Enter a month:");
  let month = monthInput.toLowerCase();
  
  switch (month) {
    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':   
    case 'december':
        console.log(`${month} has 31 days`)
         break
    case "april":
    case "june":
    case "september":
    case "november":
        console.log(`${month} has 30 days`)
        break;
    case "febuary":
        console.log(`${month} has 29 days`)
         break;
    default:
        console.log("please enter a valid month");
        }  

    
Write a program which tells the number of days in a month, now consider leap year.

let month = prompt("Enter a month:");
let year = parseInt(prompt("Enter a year:"));
month = month[0].toUpperCase() + month.slice(1).toLowerCase();
switch (month) {
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    console.log(`${month} has 31 days in ${year}.`);
    break;
  case "April":
  case "June":
  case "September":
  case "November":
    console.log(`${month} has 30 days in ${year}.`);
    break;
  case "February":
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      console.log(`${month} has 29 days in ${year}.`);
      break;
    } else {
      console.log(`${month} has 28 days in ${year}.`);
      break;
    }
  default:
    alert("Please enter a valid month name!");
    break;
}

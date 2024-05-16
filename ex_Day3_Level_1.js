

 //  Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "John";
let lastName = "Morris";
let country ="USA";
let city = "Chicago";
let age = 30;
let isMarried = true;
let year = 2024;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);


// Check if type of '10' is equal to 10
console.log(typeof "10"==10);


//   Check if parseInt('9.8') is equal to 10

console.log(parseInt('9.8') == 10);

  //  Boolean value is either true or false.
        Write three JavaScript statement which provide truthy value.
           10 =="10";
           5! = 4;
         4**5 ===1024;
          

        Write three JavaScript statement which provide falsy value.
           10 ==="10";
           25%5 === 1;
           let book


           
 /*  Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
        4 > 3  true
        4 >= 3  true
        4 < 3  false
        4 <= 3  false
        4 == 4  true
        4 === 4  true
        4 != 4  false
        4 !== 4  false
        4 != '4' false
        4 == '4' true
        4 === '4' false
        
Find the length of python and jargon and make a falsy comparison statement.  */ 

let lengthPython = "python".length;
let lengthJargon = "jargon".length;
lengthPython !== lengthJargon

           
 /*   Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
        4 > 3 && 10 < 12        true
        4 > 3 && 10 > 12        false
        4 > 3 || 10 < 12        true
        4 > 3 || 10 > 12        true
        !(4 > 3)                false
        !(4 < 3)                true
        !(false)                true
        !(4 > 3 && 10 < 12)     false
        !(4 > 3 && 10 > 12)     true
        !(4 === '4')            true
       
  There is no 'on' in both dragon and python  false  */ 
       let pattern = /on/gi
       console.log("dragon".match(pattern)) !==console.log("python".match(pattern));



    //  Use the Date object to do the following activities
        What is the year today?
            let now = new Date();
            console.log(now.getFullYear());
         
        What is the month today as a number?
            const month = new Date();
            console.log(now.getMonth());
         
        What is the date today?
          const todayDate = new Date();
           console.log(todayDate);
         
        What is the day today as a number?
          let now = new Date();
          console.log(now.getDay());
         
        What is the hours now?
          let now = new Date();
          console.log(now.getHours());
         
        What is the minutes now?
          let now = new Date();
          console.log(now.getMinutes());

        Find out the numbers of seconds elapsed from January 1, 1970 to now.
           let allSeconds = Date.now();
           console.log(allSeconds);

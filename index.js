//Exercise 1: For Loop - Print Numbers
console.log("Exercise 1: For Loop - Print Numbers");
function printNumber(n){
    for(let i = 1;i <= 5;i++){
        console.log(i);
    }
}
printNumber(5);

//Exercise 2: While Loop - Countdown
console.log("Exercise 2: While Loop - Countdown");
 function Countdown(n){
                while(n > 0){
                    console.log(n);
                    n--;
                }
 }
 Countdown(5);
 //Exercise 3: Do-While Loop - Repeat Input 
 console.log("Exercise 3: Do-While Loop - Repeat Input ")
 function repeatInput(num){
  let input = num;
    do{
        if( input > 0){
            console.log(input);
            break;
        }
      console.log("Enter number again");
      let newNumber = parseInt(prompt("Enter number"));
      input =num(newNumber)
    }while(true);
    
    
    }
    repeatInput(8);
    //Exercise 4: For...of Loop - Sum Array
    console.log("Exercise 4: For...of Loop - Sum Array");
    function sumArray(numbers){
        let total = 0;
        for(const number of numbers){
                total+=number;
        }
        return total;
    }
    console.log(sumArray([1, 2, 3, 4, 5]));
    //Exercise 5: For...in Loop - Iterate Object Properties
    console.log("Exercise 5: For...in Loop - Iterate Object Properties");
    function printObjectProperties(obj){
        for(const key in obj){
            console.log(`${key}:${obj[key]}`);
        }
    }
    printObjectProperties({ name: 'John', age: 30, city: 'New York' });
    //Exercise 6: Nested For Loop - Multiplication Table
    console.log("Exercise 6: Nested For Loop - Multiplication Table");
    function multiplicationTable(n){
        for(i=1;i<=n;i++){
            let row='';
            for(j=1;j<=n;j++){
                row  += (j*i)+'';
            }
            console.log(row.trim());
        }
        
    }
    multiplicationTable(5);
    //Exercise 7: Break Statement - Stop at Specific Number
    console.log("Exercise 7: Break Statement - Stop at Specific Number");

        function findNumber(numbers, target) {
            for (let index = 0; index < numbers.length; index++) {
                 if (numbers[index] === target) {
                         console.log(`Found index ${index}`);
            break;
        }
    }
}

findNumber([1, 2, 3, 4, 5], 3);
//Exercise 8: Continue Statement - Skip Even Numbers
console.log("Exercise 8: Continue Statement - Skip Even Numbers");
function  printOddNumbers(n){
    for(let i=1;i<=n;i++){
       if (i % 2 === 0) {
            continue;
        }
        console.log(i);
    }
}
printOddNumbers(7);
//Exercise 9: While Loop with Break - Sum Numbers
console.log("Exercise 9: While Loop with Break - Sum Numbers");
function sumNumber(n) {
    let total = 0;
    let current = 0;
    while (true) {
        if (current > n) {
            break;
        }
        total += current;
        current++;
    }
    return total;
}

console.log(sumNumber(5));
//Exercise 10: While Loop with Continue - Skip Negative Numbers 
console.log("Exercise 10: While Loop with Continue - Skip Negative Numbers");
function printPositiveNumbers(number){
    let index=0;
    while(index < number.length){
        if(number[index] < 0){
            index++;
            continue;
        }
        console.log(number[index]);
        index++;
    }

}
printPositiveNumbers([-2, 5, -9, 10, -3])
//Exercise 11: Do-While Loop with Break - Sum Input Numbers
console.log("Exercise 11: Do-While Loop with Break - Sum Input Numbers");
function sumInputNumbers() {
    let sum = 0;
    let number;

    do {
        number = parseFloat(prompt("Enter a number:"));
        if (number >= 0) {
            sum += number;
        }
    } while (number >= 0);

    return sum;
}


console.log(sumInputNumbers());
//Exercise 12: forEach Loop - Double Array Elements 
console.log("Exercise 12: forEach Loop - Double Array Elements ");
function doubleArray(numbers) {
    const result = [];
    // Iterate over each number in the array
    numbers.forEach(number => {
        result.push(number * 2);  // Double the number and add to result array
    });
    return result;
}

// Testing the function
console.log(doubleArray([1, 2, 3, 4]));
//Exercise 13: for...of Loop with Array of Strings
console.log("Exercise 13: for...of Loop with Array of Strings");
function capitalizeStrings(strings) {
    const result = [];

    for (const str of strings) {
       
        result.push(str.charAt(0).toUpperCase() + str.slice(1));
    }
    return result;
}


console.log(capitalizeStrings(['hello', 'world']));
//Exercise 13: for...of Loop with Array of Strings
console.log("Exercise 13: for...of Loop with Array of Strings");
function countProperties(obj) {
    let count = 0;
 
    for (const key in obj) {
        count++; 
    }
    return count;
}


console.log(countProperties({ name: 'John', age: 30, city: 'New York' }));  

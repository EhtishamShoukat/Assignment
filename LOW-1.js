//Write a JavaScript program to display "Hello, World!" on the console
console.log("Hello,World!");
//Write a JavaScript function to add two numbers.
function add(a,b){
    return a+b;
}
console.log(add(5,7));
//Write a JavaScript function to check if a number is even or odd.
function isEven(num){
    return num % 2 === 0;
}
        console.log(isEven(6));
        console.log(isEven(5));
//Write a JavaScript function to find the largest number in an array.
function largestNumber(arr){
    return Math.max(...arr);

}
console.log(largestNumber([3, 1, 7, 4]));
//Write a JavaScript function to reverse a string.
function reverseString(str){
    return str.split('').reverse('').join('');
}
console.log(reverseString("Hello"));


console.log("hey this is a console");
console.log("code is running....");

// VARIABLES:-
var a =5;
var b = 4;
console.log(a+b);

var _c="vinit";
console.log(_c);

console.log(typeof a,typeof b ,typeof _c);

// some variable names are invalid in js
// eg: var 55bin="vinit";


// IF-ELSE STATEMENT :-

let age=45;
if(age>18)
{
    console.log("you can drive the car");
}
else{
    console.log("you can't drive the car");
}


// -----------------------------
a=6;
b=8;

// if(a>b){
//     let c=a-b;
// }
// else{
//     let c=b-a;
// }

// alternative way for the above statement
let c = a > b ? (a-b) : (b-a)
console.log(c);





//Q4>

let goldenstr = "Annaas";

if ((goldenstr[0] == "a" || goldenstr[0] == "A") && (goldenstr.length > 5)) {
    console.log("Golden String");
}
else {
    console.log("not a golden string");
}



Q5>

let a = 5;
let b = 1;
let c = 7;

if (a > b) {
    if (a > c) {
        console.log(a, "is largest");
    }
    else {
        console.log(c, "is largest")
    }
}
else {
    if (b > c) {
        console.log(b, "is largest")
    }
    else {
        console.log(c, "is largest")
    }
}



//Q6>

let num1 = 32;
let num2 = 47852;

if (num1 % 10 == num2 % 10) {
    console.log(num1 % 10, "same last digit");
}
else {
    console.log("diffrent last digit");
}







// -------------------
// LOOPS :-
let l=0;

for(let i=0;i<10;i++){
    console.log(l+i)
}

// --
let obj={
    name:"vinit",
    role:"programmer" ,
    comapany:"goldmanschs"
}
for(const key in obj){
    console.log(key)
}

// --
let i=0;
while(i<6){
    console.log(i)
    i++;
}

// --

let p=0;
do{
    console.log(p)
    p++
}
while(p<6)






// q1> to check if user is eligible to vote or not


let agee = 21;
let citizen = true;
let registered = false;

if (agee >= 18) {
    if (citizen == true) {
        if (registered == true) {
            console.log("You are eligible to vote")
        }
        else {
            console.log("You are not eligible to vote due to registration status")
        }
    }
    else {
        console.log("you are not eligible to vote due to cititzenship")
    }
}
else {
    console.log("You are not eligible to vote due to age limit")
}




// to check if number is even or odd

var num = 7;
if (num % 2 == 0) {
    console.log("even")
}
else {
    console.log("odd")
}




// switch case problem statement

var areaofshape = "circle";
var r = 5;
var a = 5;
var b = 10;
var result;
switch (areaofshape) {

    case "square":
        result = a * a;
        console.log(result)
        break;

    case "rectangle":
        result = a * b;
        console.log(result)
        break;

    case "circle":
        result = 3.14 * r * r;
        console.log(result)
        break;

    default:
        console.log("no shape matches")
}






// while loop to count from 1 to 10

var num = 1;
while (num <= 10) {
    console.log(num);
    num++;
}


// do-while loop to print 1 to 10

var num = 1;
do {
    console.log(num);
    num++;
}
while (num <= 10)



// for loop to print 1 to 10

for (var num = 1; num <= 10; num++) {
    console.log(num);
}



// 5 ka table

var num = 1;
while (num <= 10) {
    console.log('5 *' + num + '=' + 5 * num)
    num++
}




//  to check if number is valid or not
//this will only orint output if number is positive number

let userinput;
let positivenumber;
do {
    userinput = prompt("enter any number");
    positivenumber = userinput;
}
while (isNaN(positivenumber) || positivenumber < 0);

console.log("you have entered a valid positie  number :", positivenumber);





// sum of first 10 nos

var sum = 0;
for (var num = 1; num <= 10; num++) {
    var sum = sum + num;
    console.log(sum);
}






// to check if prime or not

var num = 13
var isprime = true;

for (var i = 2; i < num; i++) {
    if (num % i == 0) {
        isprime = false;
        break;
    }
}

if (isprime) {
    console.log("prime");
}
else {
    console.log("not prime");
}






// ------------------------
// function :-




function sub(a,b){
    return a - b;
}
console.log("subtraction",sub(4,8))



function add(a, b) {
    return a + b;
}

console.log(add(10, 24))









// immediately invoked function expression (IIFE)
// : this function executes immediately when a page is loaded ,this function doesn't interfere with surrounding code and executes immediately.
// it is a normal function wrapped inside parenthesis ")" and there is no need to write a function name


(function (a, b) {
    console.log(a + b);
})

    (5, 7);









// let  ,  var   and  const
// var keyword is global level scope keyword it can be accessed inside and outside of any scope

if (true) {
    var name = " vinit"
    console.log(name);
}

console.log(name)

// whereas let is block scope it can only be accessed inside a block

if (true) {
    let name = " vinit"
    console.log(name);
}

console.log(name)

// const is an immutable keyword it can't be changed , it will throw error if tried to change

const pi = 3.14;
pi = 34;
console.log(pi);








// template literals
// template literals provides convenient way to create strings they are enclosed within
// backtick (``), we can use template literals to write multiline comment and preserve whitespaces.

let multilinestr = `
this is a
multi-line    string
using template literals`
console.log(multilinestr);


//string interpolation
//it is used to embed expressions directly into string , for this backtick is required !.

let firstn = "vinit";
let lastn = "gharat";

let fname = `${firstn} ${lastn}`;
console.log(fname);

let age = 20;
let message = `i am ${age} years old`;
console.log(message)







// defaut parameter
// default parameter are used if user does'nt inputs any value incase default specified values is used

function sum(a = 2, b = 4) {
    return a + b;
}
console.log(sum(3));
console.log(sum());
console.log(sum(6, 6));






// arrow function
// it is a compact alternative to a traditional function

// traditional

hello1 = function () {
    return "hellow";
}

// using arrow function

hello2 = () => "helloworld";
console.log(hello1, hello2);



//implicit return in arrow function
//if arrow function is assigned only single task then we dont write any keyword
//and here we dont use curly braces we use parenthesis !

const mul = (a, b) => a * b;

console.log(mul(2, 3));



// Calculator function

let Calculator = (num1, num2, operator) => {
    switch (operator) {
        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;

        case "*":
            return num1 * num2;

        case "/":
            return num1 / num2;

        default:
            return "no operator found";

    }
}

console.log(Calculator(5, 4, "+"));





// reverse a string without bulit in method

let isreverse = (str) => {
    for (let i = str.length; i >= 0; i--) {   //str.length indicates to last element !
        console.log(str[i]);
    }
};
isreverse("vinit");






// to check if string is palindroe

let ispalin = (str) => {
    let reverse = " ";
    for (let i = str.length; i >= 0; i--) {
        reverse = reverse + str[i];
    }
    if (str = reverse) {
        return true;
    }
    else {
        return false;
    }
};

console.log(ispalin("radar"));



// Arrays :-

let arr = [1,2,5,4,3,6,7]
console.log(arr)
console.log(arr.length)
console.log(arr[0])
//arrays are mutable
arr[1] = 0;

console.log(arr.toString())  //to print array as a string

console.log(arr.join("and"))  //adds and inplace os comma

// arr.pop()  //removes last element from array

// arr.push()     //adds element at last

// arr.shift()   //removes first element

// arr.unshift()  //adds at first

// delete a[6]  //removes value fromgiven index

// arr.splice(0,3)   //removes array of provided index

arr.sort()  //sorts array

arr.reverse() //reverse an array


// Array

let array1 = new Array('apple', 'orange', 'mango')
let array3 = ["apple", "orange", "mango"]
console.log(array1, array3);
console.log(array1[1]);

array1[1] = "kiwi";
console.log(array1);



// iterating using for-of loop
// using for-of  we can acess values of array

for (let items of array1) {
    console.log(items)
}
// this can be also done using normal for loop



// iterating using for-in loop
// using for-in we can access the indexes of the array

for (let items in array1) {
    console.log(items);
}


// for-each
// for-each calls function for every element, and the function
// can perform any kind of operation on that array(affects the original array)!

array1.forEach((curr, index, arr) => {
    console.log(`${curr} ${index}`);
});



// map
// map works same as for - each just the diffrence is operations
// performed on array doesn't affect the original array

array1.map((curr, index, arr) => {
    console.log(`${curr} ${index}`);
});

const favfruit = array1.map((curr, index, arr) => {
    return `my favourite fruit is ${curr}`;
});
console.log(favfruit);
console.log(array1);




// program to multiply every element with 2

const numbers = [1, 2, 3, 4, 5, 6];

numbers.forEach((currElem) => {
    console.log(currElem * 2)
})


//Array CRUD operation

let array = ["a", "b", "c", "d"];

//adds at end
console.log(array.push("e"));
console.log(array.push("f"));
console.log(array);
//removes from end
console.log(array.pop());
console.log(array);


//adds at start
console.log(array.unshift("e"));
console.log(array.unshift("f"));
console.log(array);
//removes from start
console.log(array.shift());
console.log(array);

// splice method
// splice method changes the content of an array by removing or replacing existing Elements
// syntax: .splice(index, indexof_item_tobedeleted, item_tobeinserted)

array.splice(2, 0, "A", "B");
console.log(array);

array.splice(1, 2);
console.log(array);

array.splice(1, 1, "gg");
console.log(array);


//index of method
// index of method returns index of element if found else returns -1
// syntax: .indexOf(search element, from index )


let aray1 = ['apple', 'orange', 'mango']

console.log(aray1.indexOf("apple"));
console.log(aray1.indexOf("apple", 2));


// lastIndexOf method
// returns index of array and if there are multiple occurences then gives index of last element

let aray2 = ['apple', 'orange', 'orange', 'orange', 'mango']
console.log(aray2.lastIndexOf("orange"));

// includes method
console.log(aray2.includes("orange"));


//find method : only returns single value

const nos = ["1", "2", "3", "4", "5"];

let result1 = nos.find((currelem) => {
    return currelem > 2;
});
console.log(result1);



//filter method: returns all values


let result = nos.filter((currelem) => {
    return currelem > 2;
});
console.log(result);


//find index method

let result2 = nos.findIndex((currelem) => {
    return currelem > 2;
});
console.log(result2);



// Q> filtering products by price
const products = [
    { name: "laptop", price: 1200 },
    { name: "phone", price: 800 },
    { name: "tablet", price: 300 },
    { name: "smartwatch", price: 150 },

];

const filterproducts = products.filter((currelem) => {
    return currelem.price >= 500;
})
console.log(filterproducts);


//sort method

let numb = [1, 2, 4, 3, 4, 7, 5, 6, 9, 8, 1, 7]
let res = numb.sort()
console.log(res);


//compare and sort

const sorted = numb.sort((a, b) => {
    if (a > b) {
        return 1;
    }
    else {
        return -1;
    }
})
console.log(numb);




//destructuring
//it is used to store values of array into multiple variables
let nam3 = ["tony", "bruce", "peter", "vinit", "steve"]

let [ironman, hulk, spidey, ...winterSoldiers] = nam3;

console.log(ironman);
console.log(spidey);
console.log(winterSoldiers);






//spread
//spread expands array into multiple single values and we can use it to iterate through this
//spread is defing using three dots (...)

arrAy = [0, 1, 2, 5, 2, 5, 8, 6, 8, 1, 4, 7, 0, 4, 63,]
console.log(...arrAy);

//using spread we can also use string methods

console.log(Math.min(...arrAy));
console.log(Math.max(...arrAy));





//Rest
//rest's syntax is similar to spread but it functons diffent than spread
// it allows a function to take infinite number of arguments and store them in an array

function test(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

console.log(test(5, 8, 6, 8, 9, 4, 5, 8, 5, 8, 6, 8, 9, 4, 5, 8));
console.log(test(5, 8));









//reduce method
// reduce method iterates over an array and applies fuction to each Element
// syntax: .reduce(function callback(accumulator, index, array) { })

const productsPrice = [100, 3400, 200, 150, 2000];

const totalPrice = productsPrice.reduce((accum, currElem) => {
    return accum + currElem;
});
console.log(totalPrice);




// Q> to check if numbers in array are multiples of 10 or not

let nums = [10, 20, 30, 40];

let ans = nums.every((el) =>
    el % 10 == 0
);

console.log(ans);


// Q> function to find a minimum number in an array

function getMin(nos) {
    let min = nos.reduce((min, el) => {
        if (min < el) {
            return min;
        } else {
            return el;
        }
    });
    return min;
}

let nos = [10, 20, 30, 40];
console.log(getMin(nos));







//Strings
//string can be written in " " as well as in ' '
const striing = "hello world"

// to add special characters in the string we use slash (\)
let string = " this is \"vinit\" , i am in \'India\' ,i play \/football\/ ";
console.log(striing, string);

console.log(striing.length);


//convert a string into array
let astring = "apple fruit";

let strArr = Array.from(astring)
console.log(strArr);
// string :-




let nam3="abhishek";
let sn="kumar";
console.log(nam3);
console.log(nam3[5]);

console.log(nam3.length)

console.log("his name is "+nam3+sn);
console.log(`his name is  $(nam3) $(sn)`) //template literal


console.log(nam3.toUpperCase)

console.log(nam3.slice(1,4))

console.log(nam3.replace("shek",("shake")))

console.log(nam3.concat(sn,"vinit","gharat"))

console.log(nam3.charAt(4))

console.log(nam3.indexOf("sh"))

console.log(nam3.startsWith("abhi"))



//Search methods

//index of method
// index of method returns index of element if found else returns -1
// syntax: .indexOf(search element, from index )

let str1 = "a is for apple"

console.log(str1.indexOf("apple"));
console.log(str1.indexOf("apple", 10));


// lastIndexOf method
// returns index of array and if there are multiple occurences then gives index of last element

let str2 = "a is for apple"
console.log(str2.lastIndexOf("for"));

// includes method
// returns true or false value if found
console.log(str2.includes("orange"));



//search method
// returns index number of first match found
let str3 = "a is for apple b is for ball"
let resultt = str3.search('for')
console.log(resultt);


//match method
// this method returns an array of the matched values and its info in array format
let str4 = "a is for apple b is for ball";

let result4 = str4.match("for")
console.log(result4);

//matchAll method
//this returns detailed info of the value
let str5 = "a is for apple b is for ball";

let result5 = str4.matchAll("for")
console.log(result4);


//startsWith and endsWith method
// returns true or false if starts or ends with specified value

let str15 = "a is for apple b is for ball";

let result15 = str15.startsWith("a")
let result6 = str15.endsWithWith("for")
console.log(result15, result6);


//string slicing
let str7 = "a is for apple b is for ball";
let result7 = str7.slice(0, 6)
console.log(result7);


//charAt method
// returns character at specified index

let str9 = "a is for apple b is for ball";
let result8 = str9.charAt(5);
console.log(result8);


//replace method
let str10 = "a is for apple b is for ball";
let newstr = str10.replace("apple", "avocado");
console.log(newstr);


//uppercase and lowercase method

let str11 = "a is for Apple b is for BALL";
let result11 = str11.toUpperCase();
let result12 = str11.toLowerCase();
console.log(result11, result12);




//General maths

const piValue = Math.PI;
const roundoffValue = Math.round(3.7);
const ceilValue = Math.ceil(3.7);
const floorValue = Math.floor(3.7);
const truncValue = Math.trunc(3.7);

console.log(piValue, roundoffValue, ceilValue, floorValue, truncValue);




//events

// <div class="inline Event">
// <h1>inline event</h1>
// <button onclick="alert('Welcome , welcome , welcome ! ')">
//   Gr33tings4u
// </button>
// <button ondblclick="alert('Welcome to u again')">Dblclick</button>
// <button onmouseover="alert('Welcome again')">Dblclick</button>
// </div>

//using DOM event handler
document.getElementById('btn1').onclick = function () {
    alert('swaagat nhi kroge hmara')
};


//using event listner
document.getElementById('btn2').addEventListener('click', function () {
    alert("welcomwwwwmwmwmwmm !!!")
});


//form events

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();  //prevents from going to next page (submitted)

    let user = document.querySelector("#user")
    let pass = document.querySelector("#pass")

    console.log(user.value);
    console.log(pass.value);
    alert(`${user.value} you have sucessfully registerd`)
})







//time based events

//setTimeout
//this function is used to execute a function after a specified time period in milliseconds

function delayedfunction() {
    console.log("this will be printed after 2000 milliseconda");
}

setTimeout(delayedfunction, 2000);

//setInterval
//setInetrval is used to repeatedly execute a function at aspecified time period

function repeatedfunc() {
    console.log("this will be printed repeatedly after every 3sec");
}

setInterval(repeatedfunc, 3000)

//clear timeout
// this is used to cancel a scheduled timeout before it ocuurs

const timeot = setTimeout(delayedfunction, 5000)
clearTimeout(timeot)





//Q> function that prints "hello wrold" every 2s for 5 times

let id = setInterval(() => {
    console.log("hello world");
}, 2000);

setTimeout(() => {
    clearInterval(id);
}, 10000)







//Objects
// in js object is a collection of key-value pairs where each key is a string and each value can be any data including other objects,strings & functions.

const prod = {
    id: 1,
    Name: "Laptop",
    Brand: "HP",
    price: 50000,
    isavailaible: true,
    Specs: function () {
        console.log("This product comes with following specs");
    },

};
console.log(prod);
console.log(prod.isavailaible);
console.log(prod.Specs());

//modifying
prod.Brand = "DELL";
prod.warranty = 3;
console.log(prod);



methods in objects
to access object values for methods we use this keyword
const student = {
    name: vinit,
    age: 21,
    eng: 98,
    math: 43,
    phy: 88,
    getAvg() {
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log("Average=", avg);
    }
}






// pass by value
// when passing using a value a copy of the value is created and
// passed to function, any changes made doesn't affect original value
let val = 10;

const modifyVal = (x) => (x = 20);
console.log(modifyVal(val));
console.log(val);

//pass by refrence
// a refrence to the memory location is passed to the function
//any changes made will affect original value

let val1 = val;
console.log(val1);
console.log(val);






Sync VS Async
javascript is syncronous in nature
synchronous code executes line by line blocking further execution untill wach line is completed
whereas in asynchronous code , other code is allowed to continue its execution while its waits for other code to be executed

//syncronous code
const fun2 = () => {
    console.log("func 2 starts and ends here");
};

const func1 = () => {
    console.log("func1  starts");
    fun2();
    console.log("func2 ends");
};

func1();


// asynchronous code
const funct2 = () => {
    setTimeout(() => {
        console.log("function 2 starts and ends");
    }, 2000)
};

const funct1 = () => {
    console.log("function 1 starts");
    funct2();
    console.log("function 1 ends");
};

funct1();






//Scope
//global scope : global scope has global visibility and can be accesed from anywhere in the code
//local scope : local scope has local visibility and it is limited only to the function block where it is declared

const globalvar = "this is a global variable";

function test() {
    //fucntion scope
    const funcScope = "this is a local variable 1";

    if (true) {
        //block scope
        const blockScope = "this is a local variable 2";

        console.log(globalvar);
        console.log(funcScope);
        console.log(blockScope);
    }
    console.log(blockScope);  //this will throw an error
}

test();






//event bubbling
// event bubbling is a phenomenon in which parent events gets invoked when child event is accessed
//to stop event bubbling we use "stopPropagation"


//here when we click on li the ul and div also get invoked
// so we add stopPropagation

let div = document.querySelector(".divevent");
let ul = document.querySelector("ul");
let lists = document.querySelectorAll("li");

div.addEventListener("click", function () {
    console.log("div was clicked");
});

ul.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("ul was clicked");
});

for (li of lists) {
    lists.addEventListener("click", function (event) {
        event.stopPropagation();
        console.log("li was clicked");
    })
}






//TODO app

let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {

    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbutton = document.createElement("button")
    delbutton.innerText = "delete";
    delbutton.classList.add("delete")

    ul.appendChild(item);
    ul.appendChild(delbutton);
    inp.value = "";     //to reset the string for placeholder
})

let delbutton = document.querySelectorAll(".delete")
for (delbutton of delbutton) {
    delbutton.addEventListener("click", function () {
        let par = this.parentElement;
        par.remove();
    })
}






//promise
//promise is an object for the future result or value,it allows you to handle asynchronous operations more easily
//it can be of three stages:
//1. pending
//2. resolved
//3. rejected


//here is a function which saves data and generates internet speed b/w 1-10
// and if speed is good then it saves and returns resolved and if not then return failure

function savetodb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;

        if (internetSpeed > 4) {
            resolve("sucess : Data was saved");
        }
        else {
            reject("failure: slow internet speed");
        }
    })
}
// savetodb("random data ....!");

//the then and catch method is used to handle sucessful resolution or rejection of promises
//we use then() and catch()

savetodb("new data").then(() => {
    console.log("promise resolve");
})
    .catch(() => {
        console.log("promise rejected");
    });




//so we can use promise to prevent callback hell

savetodb(" vinit").then(() => {
    console.log("Data 1 saved");
    return savetodb("this is a data")
})
    .then(() => {
        console.log("data 2 saved");
        return savetodb("this is another data")
    })
    .then(() => {
        console.log("data 3 saved");
        return savetodb(" data number 4")
    })
    .then(() => {
        console.log("data 4 saved");
    })
    .catch(() => {
        console.log("promise rejected");
    });


//we can also print out result and error (nimp)

savetodb(" vinit").then((result) => {
    console.log("Data 1 saved");
    console.log("result of promise:", result);
    return savetodb("this is a data")
})
    .then((result) => {
        console.log("data 2 saved");
        console.log("result of promise:", result);
        return savetodb("this is another data")
    })
    .then((result) => {
        console.log("data 3 saved");
        console.log("result of promise:", result);
        return savetodb(" data number 4")
    })
    .then((result) => {
        console.log("data 4 saved");
        console.log("result of promise:", result);
    })
    .catch((error) => {
        console.log("promise rejected");
        console.log("result of error:", error);
    });







//Async function
// async is a function that returns a promise by default ! we can use its operations then and catch using async keyword

async function greet() {
throw " error 69"  //to throw error
    return "hello there !";
}

greet().then((result) => {
    console.log("promise was resloved");
    console.log("promise was :", result);
})
    .catch((err) => {
        console.log("Promise was rejected with error :", err);
    })






// Await keyword (makes code asynchronous)
//await pauses the execution of async function untill the promise is resolved or rejected
// await keyword can only be  used inside async function !!


//this function creates a promise which generates random number every 1s
function getnum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function randomNo() {
    await getnum();   //i we didn't use await then all numbers will be generated within 1s
    await getnum();
    await getnum();
    await getnum();
    await getnum();
    await getnum();
    await getnum();
}



//similar example
h1 = document.querySelector("h1")
function changeColour(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            console.log(`color changed to : ${color}!`);
            resolve();
        }, delay)
    })
};

async function demo() {
    await changeColour("red", 1000);
    await changeColour("blue", 1000);
    await changeColour("green", 1000);
    await changeColour("pink", 1000);
    await changeColour("orange", 1000);
}








//try and catch

try {
    let b = "Vinit"
    console.log(b);
    console.log(a);
} catch {
    console.log("Caught an error .... a is not defined");
}

//we can also print our error occured

try {
    console.log(a);
} catch (err) {
    console.log(errr);
}






//Local storage

localStorage
Storage {length: 0}
localStorage.setItem("Username","snax")
undefined
localStorage
Storage {Username: 'snax', length: 1}
localStorage.getItem("Username");
'snax'
localStorage.removeItem("Username")
undefined

local storage can only store data of string format!
if we want store an object in local storage we need to use JSON

const studentBio = {
    firstName: "vinit",
    lastName: "gharat",
    age: 20,
    gender: "Male",
    city: "Uran",
    subs: ["cs", "it", "eg"]
};

localStorage.setItem("data1", JSON.stringify(studentBio))

// now to again convert the json string back to object we use " parse"
localStorage.getItem("data1", JSON.parse(studentBio))






//API
// An API, or Application Programming Interface, is a set of rules and protocols for building and interacting with software applications. It allows different software applications to communicate and share data with each other.
// The specifics of an API, such as its design and functionality, are defined by its documentation.


//api requests
// fetch method returns us a promise in form of response we can use promise methods to work with promises
//and to read the recieved data we use .json() function which also returns a promise which has our main data of the api response
// try to run this in test.js

let url = "https://catfact.ninja/fact";

fetch(url)
    .then((res) => {
        console.log(res);

        res.json().then((data) => {
            console.log(data.fact);
        })
    })
    .catch((err) => {
        console.log("Error :- ", err);
    });



// we can also write the cod in simplified way :

let urll = "https://catfact.ninja/fact";

fetch(urll)
    .then((res) => {
        console.log(res);

        return res.json()
    })
    .then((data) => {
        console.log("data =", data.fact);
    })
    .catch((err) => {
        console.log("Error :- ", err);
    });






//using fetch ( api request) with async await

let url = "https://catfact.ninja/fact";

async function getfact() {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);
}

// /when fetch method runs it may take time to get the output
// but js is syncronous it directly runs our next query hence we use await keyword


//we can also handle error using try and catch

let url = "https://catfact.ninja/fact";

async function getfact() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
    }
    catch (e) {
        console.log("error : ", e);
    }
}




//Axios
//Axios is a library which is used to make http requests it is similar to fetch method but more compact and better
//we use axios on fetch because , fetch always gives us readable data but it was not in json format
//so we need to parse it , but in axios we dirctly get our json data


let url = "https://catfact.ninja/fact";

async function getfacts() {
    try {
        let res = await axios.get(url);
        console.log(res.data.fact);
    } catch (e) {
        console.log("error is :", e);
    }
}


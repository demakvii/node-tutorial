// function statement
function greet(){
    console.log("Hi there");
}

greet();

// function are first-class
function logGreeting(fn) {
    fn();
}

logGreeting(greet);

// function expression
var greetMe = function(){
    console.log('Hi there');
}

greetMe();

/// it's first-class
logGreeting(greetMe);

// use a function expression on the fly
logGreeting(function(){
    console.log('Hello there man!');
    
});
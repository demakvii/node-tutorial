function Person(firstname,lastname) {
    
    this.firstname = firstname;
    this.lastname = lastname;

}

Person.prototype.greet = function() {
    console.log('Hello, ' + this.firstname + ' ' 
    + this.lastname);
    
};

var mayur = new Person('Mayur','Kalekar');
mayur.greet();

var akshay = new Person('Akshay','Kalekar');
akshay.greet();

console.log(mayur.__proto__);
console.log(akshay.__proto__);
console.log(mayur.__proto__ === akshay.__proto__);

var person = {
    firstName : 'Mayur' ,
    lastName : 'Kalekar' ,
    greet : function() {
        console.log('Hello, '+this.firstName + ' ' + this.lastName);
        
    }
}

person.greet();

console.log(person['firstName']);
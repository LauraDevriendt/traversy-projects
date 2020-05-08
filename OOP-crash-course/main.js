// primitives = numbers, strings, booleans
const s1 = 'Hello';
console.log(typeof s1);

// strings can also be objects 
const s2 = new String('Hello');
console.log(typeof s2);

// DOM OBJECTS
console.log(window); // nothing is above window so you don't have to use window.alert => alert is fine
console.log(navigator.appVersion);

/* ---- Object literals ---- */
// const book1 = {
//     title: 'Book one',
//     author: 'John Doe',
//     year: '2013',
//     getSummary: function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
    
// };

// console.log(book1);
// console.log(book1.title);
// console.log(book1.getSummary());


// const book2 = {
//     title: 'Book two',
//     author: 'Jane Doe',
//     year: '2016',
//     getSummary: function() {
//         return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
    
// };

// console.log(book2.getSummary());

// // get values and keys from object literals
// console.log(Object.values(book2));
// console.log(Object.keys(book2));

/* ----- constructors (to make more books more easy) -----*/
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    //this.getSUmmary = function(){
        //return `${this.title} was written by ${this.author} in ${this.year}`; // Normally this is in prototype
    
}

// Instantiate an object
const book1 = new Book('Book one','John Doe', '2013');
const book2 = new Book('Book two','Jane Doe', '2016');



/* ----- prototype (to put o.a. functions in constructor when it's not used for every object) -----*/
Book.prototype.getSummary =function(){
    return `${this.title} was written by ${this.author} in ${this.year}`; 
}

console.log(book1.getSummary());

//getAge
Book.prototype.getAge = function(){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`
};

console.log(book2.getAge())

//Reviese / Change the year (MANIPULATE DATA)
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
}

book2.revise('2018');

console.log(book2);

/* ------ INHERITANCE (inherit is easier with classses) ------*/

// Magezine constructor
function Magazine(title,author,year,month){
    Book.call(this, title, author, year); // inherit from book 
    this.month =month;
}

//Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

//instantiate Magazine Object
const mag1 = new Magazine ('Mag one','John Doe', '2018', 'Jan');
console.log(mag1);

// log function of prototype
console.log(mag1.getSummary());

// Use Magazine Constructor
Magazine.prototype.constructor = Magazine;


/* ---- different ways to create objects -----*/
// object of protos
const bookProtos ={
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`; 

    }, 
    getAge: function(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`
    }
}

// create Object

const book3 = Object.create(bookProtos);
book3.title ='Book one';
book3.author ='John Doe';
book3.year = '2013';

console.log(book3);

// other way of create object
const book4=Object.create(bookProtos,{
title: {value: 'book one'},
author: {value: 'John Doe'},
year: {value: '2013'}
});

/* ------ CLASSES ------*/
class Bookclass {
    constructor(title,author,year){
        this.title = title;
        this.author=author;
        this.year=year;
    }
    
    getSummary() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }

    getAge(){
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`
    }

    revise(newYear){
        this.year = newYear;
        this.re
    }
    // with static you don't have to intantiate and is run on the class
    static topBookStore(){
        return 'Barnes & Noble';
    }
    
}

// instantiate object
const book5= new Bookclass('Book one','John Doe', '2013');
console.log(book5);

// use methods
book5.revise('2018');
console.log(book5);
console.log(Bookclass.topBookStore());

/* ------ SUBCLASSES (is like inheritance is es5------*/

//Magazine Subclass
class MagazineClass extends Bookclass {
    constructor(title,author,year,month){
        super(title,author,year); // use from parent
        this.month=month;
    }
}

//instantiate Magazine
const mag2 = new MagazineClass('Mag one','John Doe', '2018', 'Jan');

console.log(mag2.getSummary());
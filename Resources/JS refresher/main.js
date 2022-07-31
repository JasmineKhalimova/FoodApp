console.log('hello world');

function makeCoffee (sugar, milk){
    let instructions = 'Boil water';

    instructions += ' pour into cup, ';
    instructions += 'add' + sugar + 'sppons';
    instructions += 'add' + milk + '% milk.';

    return instructions
}

console.log(makeCoffee(2, 20));

// Objects
var car = {
    color: "red",
    speed: 200,
    drive: function(){return "drive";} // function

}

// Array
let shoppinglist = [
    'Apple',
    'Orange',
    'Banana'
];

// Embedding Objects & Array
var car = {
    make: 'volvo',
    speed: 160,
    engine: {
        size: 2.0,
        make: 'bmw',
        fuel: 'petrol',
        pistons:[{ maker: 'bmw'}, {maker: 'vmw'}]
    },
    // method - has key e.g. drive
    drive: function(){return 'drive';}
};

console.log(car);

// Embeded Array 
var array = ['string', 100, ['embed', 200], {car: 'found'}, function(){return 'drive';}]

console.log(array);


// Member access
console.log(car.make);
console.log(car.drive());

// computed member access 
console.log(car.engine.pistons[1].maker);
console.log(array[4]());
console.log(car['drive']());

// re-declaring variable
//car.make = 'ford';
console.log(car.make='ford');

// adding into existing variable object 
car.model = 'v60';

console.log(car);

// deleting object inside variable
delete car.model;

console.log(car);

// Array modification
array[0] += 'concat'; // modifiying existing array value
// adding new array value 
//- length property will tell you length of the array how many element stored
array[5] = 'new' 

// shift prebuild method that deletes first element from array list
// -shifts up one
array.shift();

// pop prebuild method that deletes last element from array list
array.pop();

// unshift prebuild method that adds element to the top of the array list
array.unshift('test',15);

// push prebuild method that adds element to the bottom of the array list
array.push(500, 'new test', function(){return ' new car';})

// splice prebuild method that adds element inbetween of the array list
array.splice(2, 2); // deleted 2 element 
array.splice(1, 0, 'adding value', 200); // adding value
array.splice(2, 2, 'world 200'); // replacing array element

console.log(array);

// envoking functions
function name(){
    var fullname = 'Jasmine Jass';

    function concat(name){
        return 'Ms ' + name;
    }
    return concat(fullname);
}

console.log(name());

//Callable object
function newname(fullname){
    return fullname();
}

console.log(newname(
    function(){
        return 'embed';
    }
));

// Memory Hoisting
console.log(myName, printName());
 var myName = 'Jasmine';

 function printName(){
    return 'Jane Doe';
 }

 // Scope 
 let engine = {
    maker: 'ford',
    headGasket:{
        pots:[
            "psiton",
            "piston1"
        ]
    }
 }
 console.log(engine.headGasket.pots[1]);

 function runExpression(){
    var a = 100;

    function add(){
        return a + 90;
    }
    return add();
 }

 console.log(runExpression());
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
let car = {
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
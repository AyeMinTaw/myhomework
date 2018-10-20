// //declare
// function x() {
//     console.log("Hello Girls");
//     // a = local of this function.
//     let a = 'aye';
// };

// x()

// //expression
// let y = function (g) {
//     console.log('I am Handsome ' + g );
// };

// y('girls');

//sum
let exam=[100,100,100,100];
function sum(x=20 , y = 20){
    return x + y;
};

let SUM = sum()
console.log(SUM);

//multiply
function sum(c=20 , d = 20){
    return c * d;
};

let result = sum()
console.log(result);

//subtract
function subtract(a,b) {
    return a-b; 
}
console.log(subtract(3,1))

//division
function son(bio,eco){
    eco(bio);
}

son (3, function (g)  {
    console.log(g/g)
});

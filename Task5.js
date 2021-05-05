const square = require('./app.js');

const calculate = (a) =>{
    console.log('The Area is ' +square.area(a));
    console.log('The Perimeter is ' + square.perimeter(a));

}
 
console.log(__filename)
console.log(__dirname)

calculate(5);

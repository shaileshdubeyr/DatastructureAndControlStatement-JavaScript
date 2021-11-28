const prompt = require('prompt-sync')();
 
var numbers = new Array(10);
const primefactorLimit = prompt('ente the number to do primefactorization :-');
console.log("Hey there " +primefactorLimit);
let counter = 0;
for (let i = 1; i <= primefactorLimit; i++) {
    if(primefactorLimit % i == 0){
        console.log("hii "+i+" there "+primefactorLimit);
        primefactorLimit === primefactorLimit/i;
        numbers[counter] = i;
        counter++;
    }
}
console.log("primefactorization ",...numbers);
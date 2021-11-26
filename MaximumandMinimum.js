
let max = 0;
let smax = 0;
let smin= 0;
let numbers = new Array(10);
var min;
for(let i=0; i<=9; i++){
    let randomeValue = Math.floor(Math.random() * 10 );
    numbers[i] = randomeValue;
}
min = numbers[0];
for(let indexvalue = 0; indexvalue < numbers.length; indexvalue++){
    if(max < numbers[indexvalue]){
        smax = max;
        max = numbers[indexvalue];
    }

    if(min > numbers[indexvalue]){
        smin = min;
        min = numbers[indexvalue];
    }
}
console.log("smin"+ smin + " smax "+smax);
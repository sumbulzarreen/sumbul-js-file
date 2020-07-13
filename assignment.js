//solution 1
var num_arr = Array.from(Array(101).keys());			
//console.log(num_arr);

//solution 2 ----even num Array
var even_arr  = [];
for(num in num_arr){
	if(num%2 == 0 && num!=0){
	even_arr.push(num);
	}
}
//console.log(even_arr);


for(num in num_arr){
even_num(num);
}

function even_num(num){
const myPromise = new Promise((resolve, reject) => {
    if(num%2 == 0 && num!=0){
        resolve(console.log(num*num));
    } else {
        reject('ERROR FOR ODD NUMBER');
    }
});
}



//solution 3
const squares = even_arr.map(x => x * x);
console.log("squares of even numbers");
console.log(squares);


//solution4 
const sum_squares = squares.reduce((a, b) => a + b, 0);
console.log("sum of even squares");
console.log(sum_squares);


//solution 5
var resultant_arr = [];
var noOfObjects = 0;
for(num in num_arr){
var result = even_num(num);
resultant_arr.push(result);
}	

console.log(resultant_arr);





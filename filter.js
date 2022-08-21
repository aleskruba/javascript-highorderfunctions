
//filter function create a new array

let vals = [5,4,9,2,1,undefined]

function isEven(x) {
    return ( x % 2 ==0)
}

newArray = vals.filter(isEven)
console.log(newArray)

//---------------------------------------

y => y % 2 == 0

secondArray = vals.filter(y => !(y % 2 == 1))  
console.log(secondArray)

//------------------------------------------

thirdArray = vals.filter(z => z !== undefined )  
console.log(thirdArray)

// undefined is a falsy value
thirdArray = vals.filter(z => !z  )  
console.log(thirdArray)

//----------------------------------------------

let text = "Today is a lovely   day. "
let words = text.split(/\W+/).filter(x  => x.length > 2);
console.log(words)
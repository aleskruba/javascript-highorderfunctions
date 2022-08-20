// map return a new array

const val = [1,9,10,12,5]

function doubler(a) {
    return 2* a;
}

newval = val.map(doubler);
console.log(newval)

// -------------------------
// arrow function

// newval1 = val.map(function(x) {return x*3})
newval1 = val.map( x => x*3)

console.log(newval1)

//-----------------------------------------

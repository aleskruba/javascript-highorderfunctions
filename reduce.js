

let vals  = [5,4,9,2,1]

let highest = vals.reduce( (a,b) => b > a ? b : a)
console.log(highest)
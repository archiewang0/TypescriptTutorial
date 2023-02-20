// ----------------------------- #34
let userName = 'Maximilian';

userName = '121231111111111111111111111'
console.log(userName)


// -----------------------------

// ----------------------------- #4-50
const printVal = (val:string) => console.log(val)
const printVal2:(x:string)=>void = val => console.log(val)

// -----------------------------

// ----------------------------- #4-53
const add = (...numbers:number[])=> {
    // let result = 0;
    return numbers.reduce((cur,next)=>cur+next ,0)
}
console.log(add(1,2,3,4,5))
// -----------------------------

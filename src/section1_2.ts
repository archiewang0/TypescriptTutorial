const button = document.querySelector('button')!
const num1: HTMLInputElement = document.querySelector('.num1')!
const num2 : HTMLInputElement= document.querySelector('.num2')!

let abcId = 'abc'

function addNum(num:number, num2:number): number{
    let result =  num+ num2
    return result;
}

function clickHandler(message:string){
    console.log('Clicked! '+ message)
}

// button.addEventListener('click', ()=>{
//     console.log( typeof +'111/1' ,+'111/1' )
//     console.log(addNum( +(num1.value) , parseInt( num2.value)))
// })
button.addEventListener('click',clickHandler.bind(null,'xxx'))



// #2-11
// function addNum(num:number, num2:number, showResult: boolean){
//     let result =  num+ num2
//     if(showResult){
//         console.log(result)
//     } else {
//         return result;
//     }
// }
// const result = addNum(5, 1, true)
// ----------------------------- 


// ----------------------------- #2-16
// enum MyType1 { type1 = 1 , type2 = 2 ,type3 = 3 }

// const person1: {
//     name: string;
//     age: number;
//     hobbies: string[] //或是 
//     role: [string,number]
//     type: MyType1
// } = {
//     name: 'archie',
//     age: 26,
//     hobbies: ['work out' , 'cooking'],
//     role: ['string',1 ],
//     type: MyType1.type2
// }

// console.log(person1.name)
// if (person1.type === MyType1.type2){
//     alert('right type ')
// }

// for(const hobby of person1.hobbies ){
//     console.log(hobby)
// }

// let tuble: [number, string] = [ 1, 'string']

// tuble.push('push other value to array is allowed') //👌
// tuble = [ 0 ,'cool'] //👌
// tuble[1] = '2' //👌

// // tuble[0] = '2' //👎 型別錯誤
// // tuble = [ 0 ,'cool' , 1] //👎 長度,型別沒有定義


// const tuble2: [number, string] = [ 1, 'string']

// tuble2.push('push other value to array is allowed') //👌
// tuble2[1] = '2' //👌

// // tuble2[0] = '2' //👎 型別錯誤
// // tuble2 = [ 0 ,'cool'] //👎 重新指向
// // tuble2 = [ 0 ,'cool' , 1] //👎 長度,型別沒有定義
// ----------------------------- 


// ----------------------------- #2-16
// function combine(n1: string|number , n2: string |number ){
//     let result 
//     if( typeof n1 === "number" && typeof n2 ==="number"){
//         result = n1 + n2;
//     } else {
//         result =  n1.toString() + n2.toString();
//     }
//     // result = n1 + n2;
//     return result
// }

// const combineAges = combine(30,26);
// console.log(combineAges);

// const combineNames = combine('Max', 'Anna'); 
// ----------------------------- 


// ----------------------------- #2-23
// function combine(
//         n1: string | number, 
//         n2: string |number , 
//         resultConversion: 'as-number' | 'as-text'
//     ){
//     let result 
//     if( typeof n1 === "number" && typeof n2 ==="number" || resultConversion === "as-number"){
//         result = +n1 + +n2;
//     } else {
//         result =  n1.toString() + n2.toString();
//     }
//     return result
// }

// const combineAges = combine(30,26 , 'as-number');
// console.log(combineAges);

// const combineStringAges = combine( '30' ,'26' , 'as-number');
// console.log(combineStringAges);

// // const combineNames = combine('Max', 'Anna' , 'as-number');
// const combineNames = combine('Max', 'Anna' , 'as-text');
// console.log(combineNames);
// // export {combine}

// type Product = {title: string; price: number;};
// const p1: Product = { title: 'A Book', price: 12.99, isListed: true }
// -----------------------------


// ----------------------------- #2-26
// function add(n1:number , n2: number):number {
//     return n1+n2
// }

// function printResult(num: number): void{
//     console.log('Result: ' , num)
//     return;
// }

// printResult(add(5,10))

// let combineValues: (n1:number , n2: number) => number
// combineValues = add
// console.log(combineValues(9,9))


// function addAndHandle(n1:number , n2:number , cb:(num:number)=> void){
//     const result = n1 + n2
//     cb(result)
// }

// addAndHandle(10,20, (e)=>{
//     alert(e)
//     return 1;
// })

// -----------------------------


// ----------------------------- #2-29
// let userInput: unknown;
// let userName: string;

// userInput = 5;
// userInput = 'Max';
// // userName = 'z'
// // userName = userInput

// if (typeof userInput ==="string"){
//     userName = userInput
// }

// -----------------------------

// ----------------------------- #2-30
// function generateError(message:string , code:number):never {
//     throw {message: message , errorCode: code}
// }

// function infiniteLoop():never {
//     while(true){
//         console.log('xxx')
//     }
// }

// generateError('錯誤', 500)
// const result = generateError('錯誤', 500)
// console.log(result)
// -----------------------------



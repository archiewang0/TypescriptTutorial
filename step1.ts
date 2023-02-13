// const button: HTMLButtonElement = document.querySelector('button')!
// const num1: HTMLInputElement = document.querySelector('.num1')!
// const num2 : HTMLInputElement= document.querySelector('.num2')!

// function addNum(num:number, num2:number): number{
//     let result =  num+ num2
//     return result;
// }

// button?.addEventListener('click', ()=>{
//     console.log( typeof +'111/1' ,+'111/1' )
//     console.log(addNum( +(num1.value) , parseInt( num2.value)))
// })

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


// #2-16
enum MyType1 { type1 = 1 , type2 = 2 ,type3 = 3 }

const person1: {
    name: string;
    age: number;
    hobbies: string[] //或是 
    role: [string,number]
    type: MyType1
} = {
    name: 'archie',
    age: 26,
    hobbies: ['work out' , 'cooking'],
    role: ['string',1 ],
    type: MyType1.type2
}


console.log(person1.name)
if (person.type === MyType1.type2){
    alert('right type ')
}

for(const hobby of person1.hobbies ){
    console.log(hobby)
}

let tuble: [number, string] = [ 1, 'string']

tuble.push('push other value to array is allowed') //👌
tuble = [ 0 ,'cool'] //👌
tuble[1] = '2' //👌

// tuble[0] = '2' //👎 型別錯誤
// tuble = [ 0 ,'cool' , 1] //👎 長度,型別沒有定義


const tuble2: [number, string] = [ 1, 'string']

tuble2.push('push other value to array is allowed') //👌
tuble2[1] = '2' //👌

// tuble2[0] = '2' //👎 型別錯誤
// tuble2 = [ 0 ,'cool'] //👎 重新指向
// tuble2 = [ 0 ,'cool' , 1] //👎 長度,型別沒有定義
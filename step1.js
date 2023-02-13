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
var MyType;
(function (MyType) {
    MyType[MyType["type1"] = 0] = "type1";
    MyType[MyType["type2"] = 1] = "type2";
    MyType[MyType["type3"] = 2] = "type3";
})(MyType || (MyType = {}));
var person = {
    name: 'archie',
    age: 26,
    hobbies: ['work out', 'cooking'],
    role: ['string', 1],
    type: MyType.type2
};
console.log(person.name);
if (person.type === MyType.type2) {
    alert('right type ');
}
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
var tuble = [1, 'string'];
tuble.push('push other value to array is allowed'); //👌
tuble = [0, 'cool']; //👌
tuble[1] = '2'; //👌
// tuble[0] = '2' //👎 型別錯誤
// tuble = [ 0 ,'cool' , 1] //👎 長度,型別沒有定義
var tuble2 = [1, 'string'];
tuble2.push('push other value to array is allowed'); //👌
tuble2[1] = '2'; //👌
// tuble2[0] = '2' //👎 型別錯誤
// tuble2 = [ 0 ,'cool'] //👎 重新指向
// tuble2 = [ 0 ,'cool' , 1] //👎 長度,型別沒有定義

"use strict";
// ----------------------------- #34
var userName = 'Maximilian';
userName = '121231111111111111111111111';
console.log(userName);
// -----------------------------
// ----------------------------- #4-50
var printVal = function (val) { return console.log(val); };
var printVal2 = function (val) { return console.log(val); };
// -----------------------------
// ----------------------------- #4-53
var add = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    // let result = 0;
    return numbers.reduce(function (cur, next) { return cur + next; }, 0);
};
console.log(add(1, 2, 3, 4, 5));
// -----------------------------

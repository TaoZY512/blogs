"use strict";

//1.let关键字，不可重名
var a = 10;

// let a=20;
{
    var b = 3.14;
}
console.log(b); //3.14
{
    var c = 3.14;
}
//console.log(c); //c is not defined
//2.const 常亮
var nums = 10;

//3.解析与赋值
var name = "栀子",
    age = 21,
    gender = "女";

console.log("\n\u59D3\u540D\uFF1A" + name + "\n\u5E74\u9F84:" + age + "\n\u6027\u522B:" + gender + "\n"); //姓名：栀子
//年龄:21
//性别:女

var _pername$address = {
    pername: "Admin",
    address: "成都市"
},
    pername = _pername$address.pername,
    locations = _pername$address.address;

console.log("\n  \u59D3\u540D\uFF1A" + pername + "\n  \u5730\u5740\uFF1A" + locations + "\n"); // 姓名：Admin
//地址：成都市

function minAdnMax(nums) {
    var min = nums[0];
    var max = nums[0];
    nums.forEach(function (num) {
        min = num < min ? num : min;
        max = num > max ? num : max;
    });
    return { min: min, max: max };
}
console.log(minAdnMax([1, 2, 3, 4])); //{min: 1, max: 4}

var showInfos = function showInfos(_ref) {
    var name = _ref.name,
        age = _ref.age;

    console.log("\n  \u59D3\u540D\uFF1A" + name + "\n  \u5E74\u9F84: " + age + "\n  ");
};
showInfos({
    name: "张三",
    age: 28
}); //姓名：张三
//年龄: 28

var x1 = 20,
    x2 = 30;
var _ref2 = [x2, x1];
x1 = _ref2[0];
x2 = _ref2[1];

console.log(x1); //30
console.log(x2); //20
"use strict";

$(function () {
  //箭头函数 =>
  var sayHello = function sayHello() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Petter";

    console.log("Hello," + name);
  };
  sayHello("Tom");

  var total = function total() {
    for (var _len = arguments.length, nums = Array(_len), _key = 0; _key < _len; _key++) {
      nums[_key] = arguments[_key];
    }

    //...nums:rest参数
    // 存储所有调用时传递的参数
    //其类型为数组Array
    var res = 0;
    nums.forEach(function (num) {
      res += num;
    });
    return res;
  };
  console.log(total(1, 2)); //3

  var numbers = [1, 2, 3, 4, 5, 6, 7];
  console.log("max:" + Math.max.apply(Math, numbers));
  console.log("min:" + Math.min.apply(Math, numbers));

  var per = new Person("林彦俊", 30);
  console.log(per);
  per.description();
  Person.play("乒乓");
});
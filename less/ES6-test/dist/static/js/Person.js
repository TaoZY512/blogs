"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//定义Person类
var Person = function () {
  //构造器
  //创建对象使用，自动调用
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
    console.log("一个Persson对象正在被创建......");
  }
  //方法


  _createClass(Person, [{
    key: "description",
    value: function description() {
      console.log("Hello,I'm " + this.name + ",I'm " + this.age + " year old.");
    }
    //静态方法

  }], [{
    key: "play",
    value: function play(str) {
      console.log("\u73A9" + str + "!");
    }
  }]);

  return Person;
}();

;
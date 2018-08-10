"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
        function Model() {
                _classCallCheck(this, Model);
        }
        //获取


        _createClass(Model, [{
                key: "get",
                value: function get() {}
                //修改

        }, {
                key: "modify",
                value: function modify() {}
                //添加

        }, {
                key: "add",
                value: function add() {}
                //删除

        }, {
                key: "remove",
                value: function remove() {}
        }]);

        return Model;
}();
"use strict";

var loadingHtml = function loadingHtml(parent, response) {
    var htmlStr = "";
    var htmlNum = 0;
    var result = response.value;
    result.forEach(function (data) {
        htmlStr += "     \n                    <li contenteditable>" + data + "</li>\n        ";

        htmlNum = htmlNum + Number(data);
    });

    htmlStr += "<li class=\"gather\" style=\"background:rgb(61, 61, 61)\">" + htmlNum + "</li>";
    parent.html(htmlStr);
};
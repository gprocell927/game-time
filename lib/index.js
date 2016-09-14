var $ = require('jquery');

// var constructors = require("./constructors.js");

window.onload = function() {
    var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");
    var img=document.getElementById("dog-pic");
    ctx.drawImage(img,10,10);
};

var canvas = document.getElementById("canvas");
var draw = canvas.getContext("2d");
draw.fillStyle = "black";
draw.fillRect(0, 0, 100, 100);

alert("hi");
console.log("dogs");

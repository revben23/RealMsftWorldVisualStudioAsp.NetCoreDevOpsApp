

/// <reference path="jquery-3.2.1.min.js" />



//alert("Hello Microsoft World");
console.log("Hello Microsoft World");

var form = document.getElementById("theForm");
form.hidden = false;
//var form = $("theForm");
//form.hidden = true;

var submit = document.getElementById("submit");
submit.addEventListener("click", function () {
   alert("Submititng Message");

});

var label = document.getElementById("labelFirst")
label.addEventListener("click", function () {
    alert("You Clicked Me");

});

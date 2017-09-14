function skickaFormular() {
    document.getElementById("formular");{
    window.alert("Ditt formulär är skickat");
}}

var usernameElement = document.getElementById("username");
var numberElement = document.getElementById("number");

usernameElement.addEventListener("keyup", function(){
    var value = usernameElement.value;
    var usernameregex = /([a-zA-Z]){3,}/
    var isValid = usernameregex.test(value);
    console.log(usernameregex.test(value));

    usernameElement.style.backgroundColor = isValid ? "green" : "red";
})

var numberElement = document.getElementById("number");

numberElement.addEventListener("keyup", function(){
    var value = numberElement.value;
    var numberregex = /([0-9]){10,}/
    var isValid = numberregex.test(value);
    console.log(numberregex.test(value));

    numberElement.style.backgroundColor = isValid ? "green" : "red";
})


var emailElement = document.getElementById("email");

emailElement.addEventListener("keyup", function(){
    var value = emailElement.value;
    var emailregex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/
    var isValid = emailregex.test(value);
    console.log(emailregex.test(value));

    emailElement.style.backgroundColor = isValid ? "green" : "red";
})
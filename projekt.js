
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

var meddelandeElement = document.getElementById("meddelande");

meddelandeElement.addEventListener("keyup", function(){
    var value = meddelandeElement.value;
    var meddelanderegex = /([a-zA-Z0-9]){3,150}/
    var isValid = meddelanderegex.test(value);
    console.log(meddelanderegex.test(value));

    meddelandeElement.style.backgroundColor = isValid ? "green" : "red";
})

function check(){
    var emailval = document.getElementById("email").value;
    var namnval = document.getElementById("username").value;
    var numberval = document.getElementById("number").value;
    var meddelandeval = document.getElementById("meddelande").value;
    if(namnval == null || namnval == "" || emailval == null || emailval == "" ){
        alert("Fyll dina uppgifter korrekt");
        return false;
    }
    return true;

}


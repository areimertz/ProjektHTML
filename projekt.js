
var usernameElement = document.getElementById("username");
var numberElement = document.getElementById("number");
var emailElement = document.getElementById("email");
var meddelandeElement = document.getElementById("meddelande");

function validate(element, regex) {
    var value = element.value;

    var isValid = regex.test(value);

    element.style.backgroundColor = isValid ? "green" : "red";
}

usernameElement.addEventListener("keyup", function(){
    validate(usernameElement, /([a-zA-Z]){3,}/)
});

numberElement.addEventListener("keyup", function () {
    validate(numberElement, /([0-9]){10,}/)
});

emailElement.addEventListener("keyup", function () {
    validate(emailElement, /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/ )
});


meddelandeElement.addEventListener("keyup", function () {
    validate(meddelandeElement, /([a-zA-Z0-9]){3,150}/ )
});




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


var index = 0;
function bytBild() {
    var a = ["bild2.png","bild3.jpg", "bild1.jpeg"]
    document.getElementById("bilderna").setAttribute("src",a[index]);
    
    index = (index +1)
    if(index>(a.length -1)){
        index=0;
    }
    bilderna.src = a[index];
}
setInterval(bytBild,1000);

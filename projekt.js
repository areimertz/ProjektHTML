
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

var nextButton = document.getElementsByTagName("button")[0];
var imgElement = document.getElementByTagName("img")[0];
var bilder = [
    "bild1.jpeg",
    "bild2.png",
    "bild3.jpg"
];

var index = 0;

nextButton.addEventListener("click", function(){
    index++;
    imgElement.setAttribute("url", bilder[index]);
})

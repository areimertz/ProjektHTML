
var usernameElement = document.getElementById("username");
var numberElement = document.getElementById("number");
var emailElement = document.getElementById("email");
var meddelandeElement = document.getElementById("meddelande");

function validate(element, regex) {
    var value = element.value;

    var isValid = regex.test(value);

    element.style.backgroundColor = isValid ? "white" : "red";
}

usernameElement.addEventListener("keyup", function(){
    validate(usernameElement, /^[a-zA-Z -]{3,}$/)
});

numberElement.addEventListener("keyup", function () {
    validate(numberElement, /^[0-9 -+]{10,}$/)
});

emailElement.addEventListener("keyup", function () {
    validate(emailElement, /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/ )
});


meddelandeElement.addEventListener("keyup", function () {
    validate(meddelandeElement, /([a-zA-Z0-9._%+-()]){3,150}/ )
});




function check(){
    var emailval = document.getElementById("email").value;
    var namnval = document.getElementById("username").value;
    var numberval = document.getElementById("number").value;
    var meddelandeval = document.getElementById("meddelande").value;
    if(namnval == null || namnval == "" || emailval == null || emailval == "" || numberval == "" || numberval == null || meddelandeval == "" || meddelandeval == null){
        alert("Fyll dina uppgifter korrekt");
        return false;
    }
    
    alert("Ditt formulär har skickats");
    document.getElementById("form").reset();
    return true;

}


var index = 0;
function bytBild() {
    var a = ["bild1.jpg","bild44.png", "bild55.png"]
    document.getElementById("bilderna").setAttribute("src",a[index]);
    
    index = (index +1)
    if(index>(a.length -1)){
        index=0;
    }
    bilderna.src = a[index];
}
var intervall = setInterval(bytBild,2500);
var paus = false;

function timer(){
    if(!paus){
        clearInterval(intervall);
    paus = true;   
}
else{
intervall = setInterval(bytBild, 2500);
paus = false;
}

}
document.getElementById("pausBtn").addEventListener("click",timer);

function bytKnappText(){
    var start = document.getElementById("pausBtn");
    if(start.value=="Paus") start.value = "Start";
    else start.value = "Paus";
}

$(document).ready(function(){
    $("#linkHome").click(function(){
        $path = $("#home").offset().top;
        $('body').animate({ scrollTop: $path}, 1000);
    })


    $("#linkContact").click(function(){
        $path = $("#contactUs").offset().top;
        $('body').animate({scrollTop: $path}, 1000);
    })
    $("#linkAboutUs").click(function(){
        $path = $("#aboutUs").offset().top;
        $('body').animate({scrollTop: $path}, 1000);
    })
    $("#linkPortfolio").click(function(){
        $path = $("#portfolio").offset().top;
        $('body').animate({scrollTop: $path}, 1000);
    })




fetch("https://api.github.com/search/repositories?q=language:javascript+created:>2017-09-13&sort=stars&order=desc")
.then(response => response.json())
.then(data => {
    for(var i = 0; i < 5; i++){
    var item = data.items[i];
    var name = data.items[i].name;
    var link = data.items[i].html_url;
    
    $("#trendJavascript").append( " Namn " + "  <a href = '" + link + "'>" + name  + "</a>" + "|"+ item.owner.login +"|"+ item.stargazers_count + "<br>" );
   
    }
});

/*$.ajax({url:"https://api.github.com/search/repositories?q=language:css+created:>"+date()+"&sort=stars&order=desc"}).done(function(data, status) {
if(status == 'success'){
    for(var i = 0; i < 5; i++){
        var name = data.items[i].name;
        var linkWebbsida = data.items[i].html_url;
        var owner_name = data.items[i].owner.login;
        var amountStars = data.items[i].stargazers_count;
        var owner_link = data.items[i].owner.html.url;
        $("#trendCss").append(("<a href = '" + linkWebbsida + "'>" + name  + "</a" + "|"+ owner_name +"|"+ amountStars ));
        
    }
    
}
});
});*/




fetch("https://api.github.com/search/repositories?q=language:css+created:>2017-09-13&sort=stars&order=desc")
.then(response => response.json())
.then(data => {
    for(var i = 0; i < 5; i++){
    var items = data.items[i];
    var element = document.createElement("p");  
    var texts = document.createTextNode( items.name  + "|"+ items.owner.login +"|"+ items.stargazers_count );
   
    element.appendChild(texts);
    document.getElementById("trendCss").appendChild(element);
    console.log(items)
    }
});
});

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(59.254083, 15.249028),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}

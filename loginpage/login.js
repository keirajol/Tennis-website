// var correct = [
//     ["Keira", "Jol"], ["naam", "wachtwoord"]
// ];

// function getinfo() {
//     var user = document.getElementById("user").value;
//     var password = document.getElementById("password").value;
//     console.log("Ingelogd")
    
//     window.location.replace("../homepage/homepage.html");
//     for(i = 0; i < correct.length; i++) {
//         if(user == correct[i][0] && password == correct[i][1]) {
//            console.log("iets");
//        }
//     }
// }

function LogIn(){
var loggedin = false;
var username = "";
var password = "";
var username = document.getElementById("username");
var password = document.getElementById("password")

if (username=="Keira" && password=="Jol") { 
loggedin =true;
window.location="../homepage/homepage.html";
}
if (username=="Mohammed" && password=="Achternaam") {
loggedin=true;
window.location="../homepage/homepage.html";
}
if (loggedin==false) {
alert("Invalid login!");
}
}

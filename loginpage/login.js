var correct = [
    ["Keira", "Jol"], ["naam", "wachtwoord"]
];

function getinfo() {
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    console.log("Ingelogd")
    
    window.location.replace("http://www.google.nl");
    for(i = 0; i < correct.length; i++) {
        if(user == correct[i][0] && password == correct[i][1]) {
           console.log("iets");
       }
    }
}
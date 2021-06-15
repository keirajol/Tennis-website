var correct = [

]

function getinfo() {
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    
    for(i = 0; i < correct.length; i++) {
        if(user == correct[i].user && password == correct[i].password) {
            console.log(user + "Ingelogd")
        }
    }

}
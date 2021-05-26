function inschrijven() {
    if (document.getElementById("vrouw").checked){
      var geslacht =  "vrouw";
    } else {
        var geslacht = "man";
    }

    var naam = document.getElementById("name").value;
    var tussenvoegsel = document.getElementById("tussenvoegsel").value;
    var achternaam = document.getElementById("achternaam").value;
    var voorletters = document.getElementById("voorletters").value; 
    var datum = document.getElementById("datum").value;        
    var nationaal = document.getElementById("nationaal").value;      
    var postcode = document.getElementById("postcode").value; 
    var nummer = document.getElementById("nummer").value;  
    var toevoeging = document.getElementById("toevoeging").value;  
    var straat = document.getElementById("straat").value;
    var plaats = document.getElementById("plaats").value;
    var land = document.getElementById("wonen").value;      
    var email = document.getElementById("email").value;
    var phonenumber = document.getElementById("phonenumber").value;          
    var submit = document.getElementById("submit").value;                     
}
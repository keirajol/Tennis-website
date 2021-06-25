<?php

if(isset($_POST["submit"])) {
     echo "Geslacht" . $_POST["geslacht"];
     echo "Naam" . $_POST["name, tussenvoegsel, achternaam"];
     echo "Geboorte datum" . $_POST["datum"];
     echo "adres" . $_POST["postcode, toevoeging, straat, nummer, plaats"];
     echo "email" . $_POST["email"];
     echo "telefoonnummer" . $_POST["phonenumber"];

     $geslacht = $_POST["geslacht"]
}

?>

<html>
    <head> 
        <title>formulier</title>
</head>
<body>
    <p>Geslacht: <?php echo $_POST["geslacht"];?></p>
    <p>Naam: <?php echo $_POST["name, tussenvoegsel, achternaam"];?></p>
    <p>Geboorte datum: <?php echo $_POST["datum"];?></p>
    <p>Adres: <?php echo $_POST["postcode, toevoeging, straat, nummer, plaats"];?></p>
    <p>Email: <?php echo $_POST["email"];?></p>
    <p>telefoonnummer: <?php echo $_POST["phonenumber"];?></p>
    
</body>
    </html>
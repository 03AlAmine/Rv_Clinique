<?php

require 'server.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['Insc'])) {

    $prenom = $_POST['Fname'];
    $nom = $_POST['Lname'];
    $age = $_POST['Old'];
    $sexe = $_POST['Sexe'];
    $zones = $_POST['City'];
    $mail = $_POST['Gmail'];
    $pwd = $_POST['Mdp'];
    $conf_pwd = $_POST['Conf_Mdp'];

    $hashage = password_hash($pwd, PASSWORD_BCRYPT);

    $req = $sql->query("SELECT * FROM identify WHERE Email = '$mail'");
    $nbrepresent = $req->num_rows;

    if ($nbrepresent == 0) {
        if (password_verify($conf_pwd, $hashage)) {
            $_SESSION['prenom'] = $prenom;
            $insertion = ("INSERT INTO identify (Prenom, Nom, Age, Sexe, City, Email, Pass) values('$prenom','$nom','$age','$sexe','$zones','$mail','$hashage')");
            if ($sql->query($insertion) === TRUE) {
                header('Location: ../Se_connecter.html');
            } else {
                echo "Erreur lors de l'enregistrement : " . $sql->error;
                header("Location: ../S'inscrire.html");
            }
        } else {
            header("Location: ../S'inscrire.html");
        }
    } else {
        header("Location: ../S'inscrire.html");
    }
}

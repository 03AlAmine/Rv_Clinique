<?php
session_start();

require "server.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['conf'])) {

    // Récupérer les valeurs du formulaire
    $email = $_POST['Gmail'];
    $pwd = $_POST['Pwd'];
    // Exécuter la requête SQL sans sécurisation
    $req = $sql->query("SELECT Pass FROM identify WHERE Email ='$email'");

    // Vérifier si des résultats ont été retournés
    if ($req->num_rows > 0) {
        $row = $req->fetch_assoc();
        $hash = $row['Pass'];

        // Vérifier si le mot de passe soumis correspond au hachage stocké
        if (password_verify($pwd, $hash)) {
            // Stocker l'email dans la session
            $raq = $sql->query("SELECT Prenom FROM identify WHERE Email ='$email'");

            if ($raq->num_rows > 0) {
                $row = $raq->fetch_assoc();
                $prenom = $row['Prenom'];

                $_SESSION['prenom'] = $prenom;
                // Rediriger vers la page Clinique.html si les informations sont correctes
                header('Location: ../Clinique.php');
                exit();
            }
        } else {
            // Rediriger vers la page Se_connecter.html si le mot de passe est incorrect
            header('Location: ../Se_connecter.html');
            exit();
        }
    } else {
        // Rediriger vers la page Se_connecter.html si l'email n'existe pas dans la base de données
        header('Location: ../Se_connecter.html');
        exit();
    }
}

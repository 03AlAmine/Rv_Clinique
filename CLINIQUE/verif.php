<?php
include 'Php/cnx.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $paragraphe = $_POST['Paragraph'];

    $D1 = "Clinique Dantec";
    $D2 = "Clinique Fann";
    $D3 = "Clinique Pompidou";
    $D4 = "Mermoz";
    // Rufique
    $R1 = "Clinique Naby";
    $R2 = "Clinique Dabakh";
    $R3 = "Clinique Sante Yalla";
    $R4 = "";
    // Pikine
    $P1 = "Clinique Lo";
    $P2 = "Clinique Rue 10";
    $P3 = "";
    $P4 = "";
    // Sebikotane
    $S1 = "Clinique Balde";
    $S2 = "Clinique 18 Safar";
    $S3 = "";
    $S4 = "";
    // Keur Massar
    $K1 = "Clinique KM City";
    $K2 = "Clinique Dial Diop";
    $K3 = "Clinique Rassoul";
    $K4 = "";


    if (isset($_SESSION['prenom'])) {
        if ($paragraphe == $D1) {
            header("Location: rv_clinique.html");
            exit();
        } else if ($paragraphe == $D2) {
            header("Location: rv_clinique.html");
            exit();
        } else if ($paragraphe == $D3) {
            header("Location: rv_clinique.html");
            exit();
        } else if ($paragraphe == $D4) {
            header("Location: rv_clinique.html");
            exit();
        } else if ($paragraphe == $R1) {
            header("Location: rv_clinique.html");
            exit();
        } else if ($paragraphe == $R2) {
            header("Location: rv_clinique.html");
            exit();
        } else if ($paragraphe == $R3) {
            header("Location: rv_clinique.html");
            exit();
        } else if ($paragraphe == $R4) {
            header("Location: rv_clinique.html");
            exit();
        } else if ($paragraphe == $P1) {
            header("Location: rv_clinique.html");
            exit();
        } else if ($paragraphe == $P2) {
            header("Location: rv_clinique.html");
            exit();
        } else if ($paragraphe == $S1) {
            header("Location: rv_clinique.html");
            exit();
        } else if ($paragraphe == $S2) {
            header("Location: rv_clinique.html");
            exit();
        } else if ($paragraphe == $K1) {
            header("Location: rv_clinique.html");
            exit();
        } else if ($paragraphe == $K2) {
            header("Location: rv_clinique.html");
            exit();
        } else if ($paragraphe == $K3) {
            header("Location: rv_clinique.html");
            exit();
        } else {
            header("Location: Se_connecter.html");
            exit();
        }
    } else {
        header("Location: Se_connecter.html");
        exit();
    }
}

<?php

$servername = "localhost";
$username = "root";
$mdp = "9462";
$bd = "inscription";

$conn = new mysqli($servername, $username, $mdp);

if ($conn->connect_error) {
    die("Connection has fail " . $conn->connect_error);
}

$db = "CREATE DATABASE IF NOT EXISTS $bd";

if ($conn->query($db) === false) {
    die("Could not create database" . $conn->error);
}

$conn->close();
$sql = new mysqli($servername, $username, $mdp, $bd);

if ($sql->connect_error) {
    die("Error connecting to server");
}

$table = "CREATE TABLE IF NOT EXISTS identify
(Prenom VARCHAR(255) NOT NULL, 
Nom VARCHAR(255), 
Age INT NOT NULL, 
Sexe char(1) NOT NULL, 
City VARCHAR(255), 
Email VARCHAR(255) PRIMARY KEY,
Pass VARCHAR(255)
)";

if ($sql->query($table) === false) {
    die("La creation de la table a echoue " . $sql->error);
}

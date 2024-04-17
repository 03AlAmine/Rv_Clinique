 <?php
    // Démarre la session
    session_start();

    // Fonction de déconnexion
    function deconnexionUtilisateur()
    {
        // Détruire toutes les variables de session
        $_SESSION = array();

        // Si vous utilisez des cookies de session, détruisez également le cookie de session
        if (ini_get("session.use_cookies")) {
            $params = session_get_cookie_params();
            setcookie(
                session_name(),
                '',
                time() - 42000,
                $params["path"],
                $params["domain"],
                $params["secure"],
                $params["httponly"]
            );
        }

        // Détruire la session
        session_destroy();

        // Redirection vers la page de connexion ou une autre page
        header("Location: ../Clinique.php");
        exit();
    }

    // Utilisation de la fonction de déconnexion si l'utilisateur clique sur le bouton de déconnexion
    if (isset($_GET['deconnexion'])) {

        deconnexionUtilisateur();
    }

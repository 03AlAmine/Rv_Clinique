<!doctype html>
<html lang="en">

<head>
    <title>Clinique</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
    <link rel="stylesheet" type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />

    <link rel="stylesheet" href="Css/Clin.css">
    <script src="Js/Clinique.js"></script>


</head>

<body>
    <div id="bg">
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="nav">
            <a class="navbar-brand text-dark p-0 clinique" href="Clinique.php">
                <img src="Image/Logo.png" width="40" height="40" class="d-inline-block" alt="">
                @Clinique.sn
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav col-md-8 mx-auto align-items-center ">
                    <div class="navbar-nav col-md-7 mx-auto align-items-center  justify-content-end ">
                        <li class="nav-item  m-2">
                            <a class="nav-link active" href="Clinique.html">Accueil </a>
                        </li>

                        <li class="nav-item m-2">
                            <a class="nav-link " href="#">A propos</a>
                        </li>
                        <li class="nav-item m-2">
                            <a class="nav-link " href="#">Nous contacter</a>
                        </li>
                    </div>
                    <div class="d-flex col-md-6 justify-content-end">
                        <form class=" d-flex my-2 my-lg-0 col-md-8 pr-0 border-0  justify-content-end bg-dark"
                            id="search">
                            <input class="form-control bg-dark text-light border-0" id="search" type="search"
                                placeholder="Search" aria-label="Search">
                            <div class=" d-flex flex-column m-auto h-75 border">
                            </div>
                            <button class="btn col-md-2 m-0 p-0 " type="submit">
                                <img src="Image/recherche.png" alt="" class="btn  col-md-8 col-xm-3 p-0 m-0 ">
                            </button>
                        </form>
                    </div>

                </ul>
                <section
                    class="navbar-nav col-md-3 d-flex p-0 ml-auto text-center  align-items-center justify-content-center">
                    <a class=" p-0 col-md-2" href="Se_connecter.html">
                        <img class="img-fluid p-0" src="Image/connexion.png" alt="Conn">
                    </a>
                    <p class="nav-link p-0 m-0 w-auto">
                        <?php
                        session_start();

                        if (isset($_SESSION['prenom'])) {
                            $prenom = $_SESSION['prenom'];
                            echo " $prenom ";
                            echo '<a><img id="logo" src="Image/logout.png" width="20" height="20" class=" "  alt="" onclick="deconnect()"></a>';
                            echo '  <script>
                                        function deconnect(){
                                            if(confirm("Voulez-vous vous déconnecter ?")){
                                                window.location.href ="Php/deconnexion.php?deconnexion=true";
                                            }
                                        }
                                    </script>';
                        } else {
                            echo "Bienvenue !";
                        }
                        ?>

                    </p>
                </section>
            </div>
        </nav>
        <div>
        </div>
        <div class=" d-flex">
            <section class="d-flex  col-md-8 align-items-center">
                <div class="mx-auto bg-dark" style="height: 25vh; width: 5px">
                </div>
                <div class="parag_slide mx-auto col-md-7 p-0">
                    <h1 class="h1_slide nav-link m-0">Bienvenue sur @Clinque.sn</h1>
                    <div class="your-class  p-0">
                        <p>Choisissez parmi nos cliniques médicales</p>

                        <p>en quelques clics seulement.</p>

                        <p>Une façon simple et efficace de trouver</p>

                        <p>les soins dont vous avez besoin,</p>

                        <p>pratique et rapide,</p>

                        <p>grâce à nos partenaires de confiance.</p>
                    </div>

                </div>
                <img id="logo" src="Image/Logo.png" width="275" height="275" class=" bounce ml-auto col-md-4 p-0"
                    alt="">

            </section>
            <section class="col-md-4 mt-5  p-1 ml-auto ">
                <div id="ChoixZone" class="p-0">
                    <h1 id="animationTitre">Choix d'une clinique</h1>
                    <p id="animationText">Se positionner dans une zone?</p>
                    <select class="custom-select w-auto" onchange="choice()" id="choice">
                        <option selected disabled>Ville</option>
                        <option value="Dakar">Dakar</option>
                        <option value="Rufisque">Rufisque</option>
                        <option value="Pikine">Pikine</option>
                        <option value="Sebikotane">Sebikotane</option>
                        <option value="Keur Massar">Keur Massar</option>
                    </select>
                    <div class="invisible d-flex row mx-auto" id="liste">
                        <div class="custom-control custom-radio col-md-6">
                            <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input"
                                onclick="chx()">
                            <label class="custom-control-label" for="customRadio1" id="radio1"></label>
                        </div>
                        <div class="custom-control custom-radio col-md-6">
                            <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input"
                                onclick="chx()">
                            <label class="custom-control-label" for="customRadio2" id="radio2"></label>
                        </div>
                        <div class="custom-control custom-radio col-md-6">
                            <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input"
                                onclick="chx()">
                            <label class="custom-control-label" for="customRadio3" id="radio3"></label>
                        </div>
                        <div class="custom-control custom-radio col-md-6">
                            <input type="radio" id="customRadio4" name="customRadio" class="custom-control-input"
                                onclick="chx()">
                            <label class="custom-control-label" for="customRadio4" id="radio4"></label>
                        </div>
                    </div>
                    <form id="myForm" action="verif.php" method="post">
                        <div class="d-flex flex-column p-0 w-25 ml-auto justify-content-center ">
                            <p id="text" class="p-0 m-0 mx-auto"></p>
                            <!-- Utiliser un input de type "hidden" -->
                            <input type="hidden" id="texte" name="Paragraph">
                        </div>
                        <div class="d-flex flex-column p-0 w-25 ml-auto invisible" id="valid">
                            <button type="submit" class="btn btn-primary mx-auto">Valider</button>
                        </div>
                    </form>

                    <div class="d-flex bg-dark text-light align-items-center mx-auto col-md-10 mt-1 rounded">
                        <hr class="border-light w-25 mr-1">
                        <div class="">
                            <p class="m-auto">Maps</p>
                        </div>
                        <hr class="border-light w-25 ml-1">
                    </div>

                </div>
                <div id="Maps_lien">
                    <iframe id="mapsFrame" class="col-md-12 m-0 p-1" height="300"
                        style="border-style:none; border-bottom-left-radius: 15px; border-bottom-right-radius: 15px; opacity: 0.3;"
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </section>

        </div>

    </div>

    <main class="contenair d-flex mt-1" id="main">

    </main>

    <footer class="navbar navbar-expand-lg navbar-dark footer  mt-1 mb-1 " id="footer">
        <div class="container-fluid ">
            <div class="row">
                <section class="footer col-md-2 d-flex  justify-content-center">
                    <a class="navbar-brand text-light" href="#">
                        <img src="Image/Logo.png" width="70" height="70" class="d-inline-block align-top" alt="">
                    </a>
                </section>
                <section class="navbar footer col-md-7 d-flex justify-content-center">
                    <ul class="navbar-nav footer text-light justify-content-center d-flex">
                        <li class="nav-item active ">
                            <a class="nav-link text-light" href="Clinique.php">Home</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link  text-light" href="#">About</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link  text-light" href="#">Contact Us</a>
                        </li>
                    </ul>
                </section>

                <section class="footer col-md-3 d-flex align-items-end justify-content-center">
                    <div class="footer col-md-10  d-flex m-1">
                        <a class="m-1" href="#">
                            <img class="nav-link img-fluid p-0" src="Image/Gmail.png" alt="Conn">
                        </a>
                        <a class="m-1" href="#">
                            <img class="nav-link img-fluid p-0" src="Image/linkedin.png" alt="Conn">
                        </a>

                        <a class="m-1" href="#">
                            <img class="nav-link img-fluid p-0" src="Image/facebook.png" alt="Conn">
                        </a>
                        <a class="m-1" href="#">
                            <img class="nav-link img-fluid p-0" src="Image/instagram.png" alt="Conn">
                        </a>
                        <a class="m-1" href="#">
                            <img class="nav-link img-fluid p-0" src="Image/twitter.png" alt="Conn">
                        </a>
                    </div>
                </section>
            </div>


        </div>
    </footer>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous">
    </script>


    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous">
    </script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
    <script>
    $(document).ready(function() {
        // Initialiser le carrousel slick
        $('.your-class').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            dots: false,
            infinite: true,
            centerMode: true,
            focusOnSelect: true,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            adaptiveHeight: true, // Activer la hauteur adaptative pour ajuster la hauteur des diapositives en fonction de leur contenu
            swipe: false // Désactiver le défilement manuel

        });
    });
    </script>

</body>

</html>
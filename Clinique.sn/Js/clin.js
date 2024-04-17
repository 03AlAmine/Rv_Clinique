
function choice() {
    var choix = document.getElementById("choice").value;
    var liste = document.getElementById("liste");
    var r1 = document.getElementById("radio1");
    var r2 = document.getElementById("radio2");
    var r3 = document.getElementById("radio3");
    var r4 = document.getElementById("radio4");
    var checkboxes = document.querySelectorAll('input[type="radio"]');
    var zonetext = document.getElementById("animationText");
    zonetext.innerHTML = "Veuillez a present choisir votre destination"; //


    // Declaration des differents cliniques
    // Dakar
    var D1 = "Clinique Dantec";
    var D2 = "Clinique Fann";
    var D3 = "Clinique Pompidou";
    var D4 = "Mermoz";
    // Rufique
    var R1 = "Clinique Naby";
    var R2 = "Clinique Dabakh";
    var R3 = "Clinique Sante Yalla";
    var R4 = "";
    // Pikine
    var P1 = "Clinique Lo";
    var P2 = "Clinique Rue 10";
    var P3 = "";
    var P4 = "";
    // Sebikotane
    var S1 = "Clinique Balde";
    var S2 = "Clinique 18 Safar";
    var S3 = "";
    var S4 = "";
    // Keur Massar
    var K1 = "Clinique KM City";
    var K2 = "Clinique Dial Diop";
    var K3 = "Clinique Rassoul";
    var K4 = "";

    var iFrame = document.getElementById("mapsFrame");

    iFrame.src = "#";


    // Cacher tous les boutons radio invisibles
    r3.classList.add("invisible");
    r4.classList.add("invisible");

    if (choix === "Dakar") {
        liste.classList.remove("invisible");

        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
        liste.classList.remove("invisible");
        r1.innerHTML = D1;
        r2.innerHTML = D2;
        r3.classList.remove("invisible"); // Afficher le 3ème bouton radio
        r3.innerHTML = D3;
        r4.classList.remove("invisible"); // Afficher le 4ème bouton radio
        r4.innerHTML = D4; // Définir le texte du 4ème bouton radio
        iFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79699.04631435448!2d-17.499845088000697!3d14.717752287326071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f5b3c5bb71%3A0xb17c17d92d5db21f!2sDakar!5e0!3m2!1sfr!2ssn!4v1711133898527!5m2!1sfr!2ssn";

    } else if (choix === "Rufisque") {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
        liste.classList.remove("invisible");
        r1.innerHTML = R1;
        r2.innerHTML = R2;
        r3.classList.remove("invisible");
        r3.innerHTML = R3;
        iFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30871.57716426773!2d-17.291528715219275!3d14.715580298553379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec19fc137980b03%3A0x2f17ba47ed9b2b44!2sRufisque!5e0!3m2!1sfr!2ssn!4v1711120757498!5m2!1sfr!2ssn";

    } else if (choix === "Pikine") {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
        liste.classList.remove("invisible");
        r1.innerHTML = P1;
        r2.innerHTML = P2;
        iFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15937.00992527283!2d-17.40781156426226!3d14.75661408561073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10ca2bb1e5ab1%3A0x783a4bf2d1a3408f!2sPikine!5e0!3m2!1sfr!2ssn!4v1711134331454!5m2!1sfr!2ssn";
    } else if (choix === "Sebikotane") {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
        liste.classList.remove("invisible");
        r1.innerHTML = S1;
        r2.innerHTML = S2;
        iFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12011.65335181628!2d-17.146225071088512!3d14.744961122135695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1987087e46419%3A0xfaee82acb56085b5!2sS%C3%A9bikhotane!5e1!3m2!1sfr!2ssn!4v1711134081316!5m2!1sfr!2ssn";
    } else if (choix === "Keur Massar") {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
        liste.classList.remove("invisible");
        r1.innerHTML = K1;
        r2.innerHTML = K2;
        r3.classList.remove("invisible"); // Afficher le 3ème bouton radio
        r3.innerHTML = K3;
        iFrame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12708.166055252757!2d-17.319683639851412!3d14.786821696384441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10a60477cb989%3A0xe022398974953293!2sKeur%20Massar!5e0!3m2!1sfr!2ssn!4v1711134473272!5m2!1sfr!2ssn";
    } else {
        liste.classList.add("invisible");
    }
}

function chx() {
    var check1 = document.getElementById("customRadio1");
    var check2 = document.getElementById("customRadio2");
    var check3 = document.getElementById("customRadio3");
    var check4 = document.getElementById("customRadio4");

    var r1 = document.getElementById("radio1");
    var r2 = document.getElementById("radio2");
    var r3 = document.getElementById("radio3");
    var r4 = document.getElementById("radio4");
    var p = document.getElementById("text");
    var input = document.getElementById("texte");


    // Declaration des differents cliniques
    // Dakar
    var D1 = "Clinique Dantec";
    var D2 = "Clinique Fann";
    var D3 = "Clinique Pompidou";
    var D4 = "Mermoz";
    // Rufique
    var R1 = "Clinique Naby";
    var R2 = "Clinique Dabakh";
    var R3 = "Clinique Sante Yalla";
    var R4 = "";
    // Pikine
    var P1 = "Clinique Lo";
    var P2 = "Clinique Rue 10";
    var P3 = "";
    var P4 = "";
    // Sebikotane
    var S1 = "Clinique Balde";
    var S2 = "Clinique 18 Safar";
    var S3 = "";
    var S4 = "";
    // Keur Massar
    var K1 = "Clinique KM City";
    var K2 = "Clinique Dial Diop";
    var K3 = "Clinique Rassoul";
    var K4 = "";

    var valid = document.getElementById("valid");

    valid.classList.add("invisible");

    if (check1.checked) {
        valid.classList.remove("invisible");
        if (r1.innerHTML === D1) {
            p.innerHTML = 'Dantec';
            input.value = D1;
        } else if (r1.innerHTML === R1) {
            p.innerHTML = 'Naby';
            input.value = R1;
        } else if (r1.innerHTML === P1) {
            p.innerHTML = 'C Lo';
            input.value = P1;
        } else if (r1.innerHTML === S1) {
            p.innerHTML = 'Balde';
            input.value = S1;
        } else if (r1.innerHTML === K1) {
            p.innerHTML = 'Km City';
            input.value = K1;
        }
    } else if (check2.checked) {
        valid.classList.remove("invisible");
        if (r2.innerHTML === D2) {
            p.innerHTML = 'Fann';
            input.value = D2;
        } else if (r2.innerHTML === R2) {
            p.innerHTML = 'Dabakh';
            input.value = R2;
        } else if (r2.innerHTML === P2) {
            p.innerHTML = 'Rue 10';
            input.value = P2;
        } else if (r2.innerHTML === S2) {
            p.innerHTML = '18 Safar';
            input.value = S2;
        } else if (r2.innerHTML === K2) {
            p.innerHTML = 'Dial DIop';
            input.value = K2;
        }
    } else if (check3.checked) {
        valid.classList.remove("invisible");
        if (r3.innerHTML === D3) {
            p.innerHTML = 'Pompidou';
            input.value = D3;
        } else if (r3.innerHTML === R3) {
            p.innerHTML = 'Sante Yalla';
            input.value = R3;
        } else if (r3.innerHTML === K3) {
            p.innerHTML = 'Rassoul';
            input.value = K3;
        }
    } else if (check4.checked) {
        valid.classList.remove("invisible");
        if (r4.innerHTML === D4) {
            p.innerHTML = 'Mermoz';
            input.value = D4;
        }
    }
}

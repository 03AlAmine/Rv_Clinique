/*
var cliniques = {
    "Dakar": ["Clinique Dantec", "Clinique Fann", "Clinique Pompidou", "Mermoz"],
    "Rufisque": ["Clinique Naby", "Clinique Dabakh", "Clinique Sante Yalla"],
    "Pikine": ["Clinique Lo", "Clinique Rue 10"],
    "Sebikotane": ["Clinique Balde", "Clinique 18 Safar"],
    "Keur Massar": ["Clinique KM City", "Clinique Dial Diop", "Clinique Rassoul"]
};

function choice() {
    var choix = document.getElementById("choice").value;  // Use .value to get the selected value
    var liste = document.getElementById("liste");
    var checkboxes = document.querySelectorAll("input[type=radio]");
    var r3 = document.getElementById("radio3");
    var r4 = document.getElementById("radio4");

    // Cacher tous les boutons radio invisibles
    r3.classList.add("invisible");
    r4.classList.add("invisible");
    liste.classList.remove("invisible");

    if (cliniques.hasOwnProperty(choix)) {

        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });

        for (var i = 0; i < cliniques[choix].length; i++) {
            var radio = document.getElementById("radio" + (i + 1));
            radio.innerHTML = cliniques[choix][i];
            radio.classList.remove("invisible");
        }
    }
}

function chx() {
    var checkboxes = document.querySelectorAll('input[type="radio"]');
    var p = document.getElementById("text");

    for (var i = 0; i < checkboxes.length; i++) {
        var radio = document.getElementById("radio" + (i + 1));
        var check = document.getElementById("customRadio" + (i + 1));

        if (check.checked) {
            // Afficher le lien correspondant à la clinique sélectionnée
            if (radio.innerHTML !== "") {
                p.innerHTML = '<a href="#" class="p-0">' + radio.innerHTML + '</a>';
            }
        }
    }
} */





function choice() {
    var choix = document.getElementById("choice").value;
    var liste = document.getElementById("liste");
    var r1 = document.getElementById("radio1");
    var r2 = document.getElementById("radio2");
    var r3 = document.getElementById("radio3");
    var r4 = document.getElementById("radio4");
    var checkboxes = document.querySelectorAll('input[type="radio"]');

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


    // Cacher tous les boutons radio invisibles
    r3.classList.add("invisible");
    r4.classList.add("invisible");

    if (choix === "Dakar") {

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

    } else if (choix === "Rufisque") {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
        liste.classList.remove("invisible");
        r1.innerHTML = R1;
        r2.innerHTML = R2;
        r3.classList.remove("invisible");
        r3.innerHTML = R3;
    } else if (choix === "Pikine") {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
        liste.classList.remove("invisible");
        r1.innerHTML = P1;
        r2.innerHTML = P2;
    } else if (choix === "Sebikotane") {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
        liste.classList.remove("invisible");
        r1.innerHTML = S1;
        r2.innerHTML = S2;
    } else if (choix === "Keur Massar") {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
        liste.classList.remove("invisible");
        r1.innerHTML = K1;
        r2.innerHTML = K2;
        r3.classList.remove("invisible"); // Afficher le 3ème bouton radio
        r3.innerHTML = K3;

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


var clinical = {
    "Dakar": ["Clinique Dantec", "Clinique Fann", "Clinique Pompidou", "Mermoz"],
    "Rufisque": ["Clinique Naby", "Clinique Dabakh", "Clinique Sante Yalla"],
    "Pikine": ["Clinique Lo", "Clinique Rue 10"],
    "Sebikotane": ["Clinique Balde", "Clinique 18 Safar"],
    "Keur Massar": ["Clinique KM City", "Clinique Dial Diop", "Clinique Rassoul"]
};
var linkcity = {
    "Dakar": ["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79699.04631435448!2d-17.499845088000697!3d14.717752287326071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec172f5b3c5bb71%3A0xb17c17d92d5db21f!2sDakar!5e0!3m2!1sfr!2ssn!4v1711133898527!5m2!1sfr!2ssn"],
    "Rufisque": ["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30871.57716426773!2d-17.291528715219275!3d14.715580298553379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec19fc137980b03%3A0x2f17ba47ed9b2b44!2sRufisque!5e0!3m2!1sfr!2ssn!4v1711120757498!5m2!1sfr!2ssn"],
    "Pikine": ["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15937.00992527283!2d-17.40781156426226!3d14.75661408561073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10ca2bb1e5ab1%3A0x783a4bf2d1a3408f!2sPikine!5e0!3m2!1sfr!2ssn!4v1711134331454!5m2!1sfr!2ssn"],
    "Sebikotane": ["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12011.65335181628!2d-17.146225071088512!3d14.744961122135695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1987087e46419%3A0xfaee82acb56085b5!2sS%C3%A9bikhotane!5e1!3m2!1sfr!2ssn!4v1711134081316!5m2!1sfr!2ssn"],
    "Keur Massar": ["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12708.166055252757!2d-17.319683639851412!3d14.786821696384441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10a60477cb989%3A0xe022398974953293!2sKeur%20Massar!5e0!3m2!1sfr!2ssn!4v1711134473272!5m2!1sfr!2ssn"]
}
var linkclinical = {
    "Dakar": ["", "", "", ""],
    "Rufisque": ["", "", ""],
    "Pikine": ["", ""],
    "Sebikotane": ["", ""],
    "Keur Massar": ["", "", ""]
};

function choice() {
    var choix = document.getElementById("choice").value;  // Use .value to get the selected value
    var liste = document.getElementById("liste");
    var checkboxes = document.querySelectorAll("input[type=radio]");
    var r3 = document.getElementById("radio3");
    var r4 = document.getElementById("radio4");
    var iFrame = document.getElementById("mapsFrame");
    var text = document.getElementById("text");



    // Cacher tous les boutons radio invisibles
    r3.classList.add("invisible");
    r4.classList.add("invisible");
    liste.classList.remove("invisible");

    if (clinical.hasOwnProperty(choix) && linkcity.hasOwnProperty(choix)) {

        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });
        // Ajouter la classe invisible pour masquer le bouton "valider" au début
        valid.classList.add("invisible");
        text.innerHTML = "";


        for (var i = 0; i < clinical[choix].length; i++) {
            var radio = document.getElementById("radio" + (i + 1));
            radio.innerHTML = clinical[choix][i];
            radio.classList.remove("invisible");
        }
    }
    for (var i = 0; i < linkcity[choix].length; i++) {
        iFrame.src = linkcity[choix][i];
    }

}
function chx() {
    var checkboxes = document.querySelectorAll('input[type="radio"]');
    var p = document.getElementById("text");
    const valid = document.getElementById("valid");
    var selectedRadio = null;
    var iFrame = document.getElementById("mapsFrame");

    // Ajouter la classe invisible pour masquer le bouton "valider" au début
    valid.classList.add("invisible");

    // Parcourir toutes les cases à cocher
    for (var i = 0; i < checkboxes.length; i++) {
        var radio = document.getElementById("radio" + (i + 1));
        var check = document.getElementById("customRadio" + (i + 1));

        // Vérifier si la case à cocher est cochée
        if (check.checked) {
            // Stocker la radio sélectionnée
            selectedRadio = radio;
            // Si une radio est sélectionnée, afficher le lien correspondant
            if (selectedRadio !== null && selectedRadio.innerHTML !== "") {
                p.innerHTML = '<a href="#" class="p-0 ">' + selectedRadio.innerHTML + '</a>';
                // Supprimer la classe invisible pour afficher le bouton "valider"
                valid.classList.remove("invisible");
                // Trouver la ville correspondante à la clinique sélectionnée
                var ville = null;
                for (var key in clinical) {
                    if (clinical.hasOwnProperty(key)) {
                        if (clinical[key].includes(selectedRadio.innerHTML)) {
                            ville = key;
                            break;
                        }
                    }
                }
                // Mettre à jour l'iFrame avec le lien correspondant à la ville
                if (ville !== null && linkclinical.hasOwnProperty(ville)) {
                    iFrame.src = linkclinical[ville][i];
                }
            }
            // Sortir de la boucle car une seule radio peut être sélectionnée à la fois
            break;
        }
    }
}







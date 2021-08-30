console.log('Fichier script.js chargé !');

var titre = document.querySelector('h1');
var btn = document.querySelector('.btn');

// Fonctions pour gérer le temps
// setTimeout -> exécuter une suite d'instructions après x ms
// setInterval -> exécuter une suite d'instructions toutes les x ms

var hellos = [
    
    "Bonjour",
    "Hello",
    "bomdia",
    "hotep",
    "mboté",
    "jambo",
    "bel bonjou",
    "ca ou fé",
    

];

// setTimeout(function, ms);
var time = 10000
setTimeout(function() {
    console.log('Les ' + time / 1000 + ' secondes sont écoulées...');
    titre.innerText = hellos[0];
}, time)

var defilementAutomatique = function() {
    console.log("Execution");

    // récupérer le dernier élément affiché
    // https://developer.mozilla.org/fr/docs/Web/API/Element/getAttribute
    var indexLastElement = parseInt(titre.getAttribute('id'));

    // récupérer la taille du tableau pour pouvoir retourner au début si on est sur le dernier index
    var hellosLastIndex = hellos.length - 1;

    // On va "cacher" notre élément
    titre.className = "hide";

    setTimeout(function () {
        // On met à jour notre élément
        if (indexLastElement < hellosLastIndex) {
            // Ici on peut incrémenter notre index pour passer à l'élément suivant
            var newIndex = indexLastElement + 1;

            titre.innerText = hellos[newIndex]; // On change le message avec la valeur de l'index suivant
            titre.setAttribute('id', newIndex); // On oublie de mettre à jour l'id
        } else {
            // ici on doit retourner au début du tableau
            titre.innerText = hellos[0];
            titre.setAttribute('id', 0);
        }

        // On remontre notre élément
        titre.className = "show";
    }, 500)
}

// setInterval(function, ms)
var intervalFunction = setInterval(defilementAutomatique, 2000);

// clearTimeout(nomdelafonctionsetTimeout) // annule l'exécution d'un setTimeout
// clearInterval(nomdelafonctionsetInterval) // anulle l'exécution d'un setInterval

var isPlaying = true;

// On ajoute un écouteur sur l'événement "click" du bouton
btn.addEventListener('click', function() {

    // Si c'est en train de jouer, au clic, il faut l'arrêter
    if (isPlaying) {
        // Lorsqu'on clique sur le bouton, on arrête le défilement
        clearInterval(intervalFunction);
    
        // Une fois que c'est arrêté, on change le label du bouton
        btn.innerText = "Play";

        // On change le mode
        isPlaying = false;
    } else {
        // On active le setInterval
        intervalFunction = setInterval(defilementAutomatique, 2000);

        // On change le texte du bouton
        btn.innerText = "Stop";

        // On change le mode
        isPlaying = true;
    }
});


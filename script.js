// Stocke les cartes retournées
let carte1 = null;
let carte2 = null;

// Pour chaque carte du jeux
document.querySelectorAll('.card').forEach(function(element) {
    // Ajout du listener au clic sur la carte (.card)
    element.addEventListener('click', function(event) {
        // Contient l'élément cliqué
        const clickedElement = event.target

        // On va chercher l'élément img contenu dans l'élément cliqué
        const imageElement = clickedElement.querySelector('img')

        // Si on ne trouve pas l'image, on ne fait rien
        if (!imageElement) {
            return;
        }

        // On récupère l'attribut src de l'image pour pouvoir le comparer (carte1 === carte2 ?)
        const imageSource = imageElement.getAttribute('src')

        // On fait apparaître l'image en lui supprimant la classe hidden
        imageElement.classList.remove('hidden')

        // Si la carte 1 n'est pas retournée on la retourne
        if (!carte1) {
            carte1 = imageSource
        // Sinon on retourne la carte 2
        } else if (!carte2) {
            carte2 = imageSource
        }

        // Si 2 cartes sont retournées
        if (carte1 && carte2) {
            // Si les 2 cartes sont différentes
            if (carte1 !== carte2) {
                setTimeout(
                    function() {
                        // On masque les cartes retournées
                        document.querySelectorAll('[src="'+ carte1 + '"], [src="'+ carte2 + '"]').forEach(function(element) {
                            element.classList.add('hidden');
                        })

                        // On reset les cartes retournées
                        carte1 = carte2 = null
                    },
                    1000
                )
            } else {
                // On reset les cartes retournées
                carte1 = carte2 = null;

                if (document.querySelectorAll('.hidden').length === 0) {
                    alert('You win MASTER \o/')
                }
            }
        }
    })
})
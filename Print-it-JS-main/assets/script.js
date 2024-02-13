const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Initialise une variable position à 0. Cette variable va suivre la position actuelle dans le carrousel.
let position = 0;
//Déclare une constante numberOfSlide qui stocke le nombre total de diapositives dans le carrousel,
//déterminé par la longueur du tableau slides.
const numberOfSlide = slides.length;
//Appelle la fonction createCaroussel avec le paramètre position actuel (initialisé à 0) pour charger la première diapositive.
createCaroussel(position);
//Appelle la fonction createDots pour générer les points de pagination en fonction du nombre de diapositives.
createDots();
//Appelle la fonction updateDot pour mettre à jour l'état visuel des points de pagination.
updateDot();
//Sélectionne l'élément HTML avec la classe arrow_left (flèche gauche) et le stocke dans la variable left.
const left = document.querySelector('.arrow_left');
//Sélectionne l'élément HTML avec la classe arrow_right (flèche droite) et le stocke dans la variable right.
const right = document.querySelector('.arrow_right');
//Ajoute un gestionnaire d'événements pour un clic sur la flèche gauche. À chaque clic, si position est 0,
//il est réinitialisé à numberOfSlide - 1 (dernière diapositive),
//sinon il est décrémenté. Puis, la fonction createCaroussel est appelée avec la nouvelle position.
left.addEventListener("click", function () {
    if (position == 0) {
        position = numberOfSlide - 1;
    }
    else {
        position--;
    }
        createCaroussel(position);
});
//Ajoute un gestionnaire d'événements pour un clic sur la flèche droite. À chaque clic, si position est égal à numberOfSlide - 1,
// il est réinitialisé à 0, sinon il est incrémenté. Ensuite, la fonction createCaroussel est appelée avec la nouvelle position.
right.addEventListener("click", function () {
    if (position == numberOfSlide - 1) {
        position = 0;
    } else {
            position++;
    }
    createCaroussel(position);
});
//Définit la fonction createDots qui crée un point de pagination pour chaque diapositive dans le carrousel.
//Elle utilise une boucle pour créer et ajouter un élément div avec la classe dot pour chaque diapositive dans un élément parent
//avec la classe dots.
function createDots(){
     const dots = document.querySelector(".dots");
    for (let index = 0; index < slides.length; index++) {
        // Pour chaque element dans la boucle je vais créer un dot
        const dot= document.createElement("div");
        dot.setAttribute("class", "dot");
        dots.appendChild(dot);
    }
}
//Définit la fonction updateDot qui met à jour l'état visuel des points de pagination.
//Elle parcourt tous les points et ajoute la classe dot_selected au point qui correspond à la position actuelle du carrousel.
function updateDot() {
  const listPoints = document.querySelectorAll(".dot");
   for (let index = 0; index < listPoints.length; index++) {
    const dot = listPoints[index];
    if (index == position){
        dot.classList.add('dot_selected');
  }
  else{
    dot.classList.remove('dot_selected');
  }
    }
}
//Définit la fonction createCaroussel qui met à jour le contenu du carrousel en fonction de la position actuelle.
//Elle sélectionne l'élément de diapositive correspondant, met à jour l'image et le texte,
//et appelle updateDot pour ajuster les points de pagination.
function createCaroussel(position){
    const element = slides[position];
        //console.log(element);
        const img = document.querySelector(".banner-img");
        img.setAttribute("src" , "./assets/images/slideshow/"+ element.image);
        const p = document.querySelector(".banner-txt");
        p.innerHTML= element.tagLine;
    updateDot();
}










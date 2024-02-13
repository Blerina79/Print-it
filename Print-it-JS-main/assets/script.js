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

// Initialisation de la position actuelle du carrousel//
let position = 0;
const numberOfSlides = slides.length;
// Fonction pour mettre à jour le carrousel //
const updateCarousel = () => {
    const element = slides[position];
    document.querySelector(".banner-img").setAttribute("src", "./assets/images/slideshow/" + element.image);
    document.querySelector(".banner-txt").innerHTML = element.tagLine;
    document.querySelectorAll(".dot").forEach((dot, index) => {
        dot.classList.toggle('dot_selected', index === position);
    });
};
  // Calcul de la nouvelle position. L'opérateur modulo garantit que la position reste dans les limites valides //
const changePosition = (step) => {
    position = (position + step + numberOfSlides) % numberOfSlides;
    updateCarousel();
};
 // Ajout de gestionnaires d'événements pour les flèches de navigation //
document.querySelector('.arrow_left').addEventListener("click", () => changePosition(-1));
document.querySelector('.arrow_right').addEventListener("click", () => changePosition(1));
// Fonction pour créer les points de navigation (dots) du carrousel //
const createDots = () => {
    const dotsContainer = document.querySelector(".dots");
   // Création d'un point pour chaque slide //
    slides.forEach(() => {
        const dot = document.createElement("div");
        dot.className = "dot";
        dotsContainer.appendChild(dot);
    });
};
 // Initialisation des points de navigation et mise à jour initiale du carrousel //
createDots();
updateCarousel();




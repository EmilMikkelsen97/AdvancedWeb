
// Denne fil må kun indeholde definitionen på gallery objektet.
// Altså må der ikke stå "new OOPGallery()" nogen steder i denne fil.

// Hvis en hjemmeside f.eks. har 3 gallerier på samme underside,
// så må de 3 gallerier IKKE nævnes specifikt her!

// Spørg, hvis du er i tvivl omkring reglerne.

class OOPGallery {
	// Deklarér properties og definér funktioner/metoder her.

}

function gotoImageFirst() {

	var myImg = document.createElement('img');

	myImg.setAttribute('src', './images/image_01.jpg');

	document.body.appendChild(myImg);

	// setAttribute('src', 'http://example.com/site.js');


	// getElementsByClassName("oopgallery-image").src = "karl.jpg";
}
gotoImageFirst()
document.getElementById("oopgallery-control-first").addEventListener("click", function () {
	gotoImageFirst();
});
// document.getElementsByClassName("oopgallery-control-previous").addEventListener("click", function () {
// 	gotoImagePrevious();
// });
// document.getElementsByClassName("oopgallery-control-next").addEventListener("click", function () {
// 	gotoImageNext();
// });
// document.getElementsByClassName("oopgallery-control-last").addEventListener("click", function () {
// 	gotoImageLast();
// });
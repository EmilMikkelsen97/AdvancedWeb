// laver en spiller og giver den fornavn, efternavn, aktiv (true eller false) og point
class biograf {
    constructor(premiere, filmNavn, pris, varighed) {
        this.FilmNavn = filmNavn;
        this.Varighed = varighed;
        this.Pris = pris;
        this.Premiere = premiere;
    }
    
    Profil() {
        return `
        ${this.FilmNavn} 
        Varighed: ${this.Varighed} 
        Pris: ${this.Pris}        
        Premiere: ${this.Premiere}
        ---------------------------------`
    }

    static HentFilmliste() {
        let liste = [];
        liste.push(new biograf("Maj 5.", "Terkel i knibe", 90, "1 Time og 22 minutter"));
        liste.push(new biograf("Marts 10.", "Red sparrow", 110, "2 Timer og 10 minutter"));
        liste.push(new biograf("Marts 2.", "Molly's game", 105, "2 Timer og 32 minutter"));
        liste.push(new biograf("April 18.", "Black Panther", 120, "2 Timer og 44 minutter"));
        liste.push(new biograf("April 22.", "Tomb raider", 95, "2 Timer og 25 minutter"));
        liste.push(new biograf("Maj 2.", "Avengers: Infinity war", 130, "3 Timer og 2 minutter"));
        liste.push(new biograf("Juni 20.", "Deadpool 2", 120, "2 Timer og 48 minutter"));
        return liste;
    }

    static FindFilm(liste = [], search = "") {
        liste.forEach(biograf => {
            if (biograf.FilmNavn.toLowerCase().indexOf(search.toLowerCase()) > -1) {
            console.log(biograf.Profil());
            }
        });
    }
}

let filmliste = biograf.HentFilmliste();

biograf.FindFilm(filmliste, "");
// laver en spiller og giver den fornavn, efternavn, aktiv (true eller false) og point
class spiller {
    constructor(fornavn, efternavn) {
        this.Fornavn = fornavn;
        this.Efternavn = efternavn;
        this.Aktiv = false;
        this.Point = 0;
    }
    SkiftAktiv(){
        this.Aktiv = !this.Aktiv;
    }

    GivPoint(antal) {
        this.Point += antal;
    }
    
    Profil() {
        return `${this.Fornavn} ${this.Efternavn} har ${this.Point} point ${this.aktiv ? "(aktiv)" : "(ikke aktiv)"}`
    }

    static HentSpillerliste() {
        let liste = [];
        liste.push(new spiller("Palle", "Olsen"));
        liste.push(new spiller("Basse", "Hansen"));
        liste.push(new spiller("Lasse", "Larsen"));
        return liste;
    }

    static FindSpiller(liste = [], search = "") {
        liste.forEach(spiller => {
            if (spiller.Fornavn.toLowerCase().indexOf(search.toLowerCase()) > -1) {
            console.log(spiller.Profil());
            }
        });
    }
}

let spillerliste = spiller.HentSpillerliste();

spiller.FindSpiller(spillerliste, "LA");
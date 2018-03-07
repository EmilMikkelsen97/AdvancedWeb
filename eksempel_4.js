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

}

let spiller_1 = new spiller("Pale", "Olsen");
let spiller_2 = new spiller("Basse", "Hansen")

spiller_1.SkiftAktiv();
spiller_1.GivPoint(5);

spiller_2.GivPoint(8);

console.log(spiller_2.Profil());
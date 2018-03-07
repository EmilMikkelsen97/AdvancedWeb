// laver en spiller og giver den fornavn, efternavn, aktiv (true eller false) og point
let spiller_1 = {
    fornavn: 'Emil',
    efternavn: 'Mikkelsen',
    aktiv: false,
    point: 0,
    skiftAktiv: () => {
        this.aktiv = !this.aktiv;
    },
    givPoint: (antal) => {
        this.point += antal;
    },
    profil: function () {
        return `${this.fornavn} ${this.efternavn} har ${this.point} point ${this.aktiv ? "(aktiv)" : "(ikke aktiv)"}`
    }
}

spiller_1.skiftAktiv();
spiller_1.skiftAktiv();
spiller_1.givPoint(5);

console.log(spiller_1.profil());
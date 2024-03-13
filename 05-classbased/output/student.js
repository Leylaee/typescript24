"use strict";
class Student {
    constructor(naam, studenNummer) {
        this._cijfers = [];
        this._naam = naam;
        this._studentNummer = studenNummer;
    }
    getNaam() {
        return this._naam;
    }
    getGemiddelde() {
        if (this._cijfers.length === 0)
            return 0;
        const gem = this._cijfers.reduce((a, b) => a + b, 0) / this._cijfers.length;
        return parseFloat(gem.toFixed(2));
    }
    setNaam(value) {
        if (value.trim() === "") {
            console.log("Naam mag niet leeg zijn");
        }
        else {
            this._naam = value;
        }
    }
    voegCijferToe(cijfer) {
        this._cijfers.push(cijfer);
    }
}
const student1 = new Student("Leyla", 12345);
const student2 = new Student("Anna", 12345);
student1.voegCijferToe(8);
student1.voegCijferToe(7.5);
student2.voegCijferToe(7.5);
student2.voegCijferToe(8);
student2.voegCijferToe(9);
console.log(`${student1.getNaam}'s gemiddelde cijfer is: ${student1.getGemiddelde}`);
console.log(`${student2.getNaam}'s gemiddelde cijfer is: ${student2.getGemiddelde}`);

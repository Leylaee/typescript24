"use strict";
class Auto {
    constructor(merk, model, bouwjaar) {
        this.merk = merk;
        this.model = model;
        this.bouwjaar = bouwjaar;
    }
    toonDetails() {
        console.log(`${this.merk} ${this.model} (Bouwjaar: ${this.bouwjaar})`);
    }
}
const mijnAuto = new Auto("Toyota", "Corolla", 2020);
const jouwAuto = new Auto("honda", "Civic", 2019);
console.log(mijnAuto.merk);
mijnAuto.bouwjaar = 2021;
console.log(mijnAuto.bouwjaar);
mijnAuto.toonDetails(); // Outputs: Toyota Corolla (Bouwjaar: 2021)

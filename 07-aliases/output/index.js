"use strict";
const Producten = [
    {
        naam: "Iphone 15 pro max",
        prijs: 1500,
        beschrijving: " Apple"
    },
    { naam: "Apple watch",
        prijs: 500,
        beschrijving: "Apple horloge"
    }
];
function weergeven(producten) {
    for (let i = 0; i < producten.length; i++) {
        console.log(`Naam: ${producten[i].naam}`);
        console.log(`Prijs: ${producten[i].prijs}`);
        console.log(`Beschrijving: ${producten[i].beschrijving}`);
    }
}
weergeven(Producten);

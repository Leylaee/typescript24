"use strict";
const leeftijdStudent = 27;
const achternaam = "elmas";
const isStudent = true;
const dagenVanDeWeek = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];
const persoonInfo = [27, "leyla"];
var Windrichting;
(function (Windrichting) {
    Windrichting[Windrichting["Noord"] = 0] = "Noord";
    Windrichting[Windrichting["Oost"] = 1] = "Oost";
    Windrichting[Windrichting["Zuid"] = 2] = "Zuid";
    Windrichting[Windrichting["West"] = 3] = "West";
})(Windrichting || (Windrichting = {}));
const huidigerichting = Windrichting.Noord;
var seasons;
(function (seasons) {
    seasons[seasons["Spring"] = 0] = "Spring";
    seasons[seasons["Summer"] = 1] = "Summer";
    seasons[seasons["Autumn"] = 2] = "Autumn";
    seasons[seasons["Winter"] = 3] = "Winter";
})(seasons || (seasons = {}));
const currentSeason = seasons.Winter;
var Planets;
(function (Planets) {
    Planets["Mercury"] = "Small and close to the Sun";
    Planets["Venus"] = "Similar in size to Earth, but very hot";
    Planets["Earth"] = "Our home planet";
    Planets["Mars"] = "The red planet";
    Planets["Jupiter"] = "The largest planet";
    Planets["Saturn"] = "Known for its rings";
    Planets["Uranus"] = "An ice giant";
    Planets["Neptune"] = "A distant blue world";
})(Planets || (Planets = {}));
const favPlanet = Planets.Jupiter;
let mijnData = "geen idee";
let externeInput = "Hey aangenaam";
console.log(leeftijdStudent);
console.log(achternaam);
console.log(isStudent);
console.log(dagenVanDeWeek);
console.log(persoonInfo);
console.log(huidigerichting);
console.log(currentSeason);
console.log(favPlanet);
console.log(mijnData);
//# sourceMappingURL=index.js.map
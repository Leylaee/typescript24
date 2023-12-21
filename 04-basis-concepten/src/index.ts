const leeftijdStudent: number = 27;
const achternaam: string = "elmas";
const isStudent: boolean = true;

const dagenVanDeWeek: string[] = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];
const persoonInfo: [number, string] = [27, "leyla"];

enum Windrichting {
    Noord,
    Oost,
    Zuid,
    West
}

const huidigerichting: Windrichting = Windrichting.Noord;

enum seasons {
    Spring,
    Summer,
    Autumn,
    Winter
}

const currentSeason: seasons = seasons.Winter;

enum Planets {
    Mercury = "Small and close to the Sun",
    Venus = "Similar in size to Earth, but very hot",
    Earth = "Our home planet",
    Mars = "The red planet",
    Jupiter = "The largest planet",
    Saturn = "Known for its rings",
    Uranus = "An ice giant",
    Neptune = "A distant blue world"


}

const favPlanet: Planets = Planets.Jupiter;

let mijnData: any = "geen idee";
let externeInput: unknown = "Hey aangenaam";

console.log(leeftijdStudent);
console.log(achternaam);
console.log(isStudent);
console.log(dagenVanDeWeek);
console.log(persoonInfo);
console.log(huidigerichting);
console.log(currentSeason);
console.log(favPlanet);
console.log(mijnData);



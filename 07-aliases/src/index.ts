type Product = {
    naam : string,
    prijs : number,
    beschrijving : string, 
};

const Producten: Product[] = [   
{
    naam : "Iphone 15 pro max",
    prijs : 1500,
    beschrijving : " Apple"
},  
{   naam : "Apple watch",
    prijs : 500,
    beschrijving : "Apple horloge"
}
];

function weergeven(producten : Product[]){
    for(let i = 0; i < producten.length; i++){
        console.log(`Naam: ${producten[i].naam}`);
        console.log(`Prijs: ${producten[i].prijs}`);
        console.log(`Beschrijving: ${producten[i].beschrijving}`)
    }
} 

weergeven(Producten);
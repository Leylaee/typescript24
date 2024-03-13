class Student{
   private _naam : String;
   private _studentNummer : number;
   private  _cijfers : number[] = [];

   constructor(naam : String, studenNummer : number){
    this._naam = naam;
    this._studentNummer = studenNummer;
   }

   public getNaam() : String {
    return this._naam;
   }

   public getGemiddelde(): number {
    if (this._cijfers.length === 0) 
    return 0;
    const gem = this._cijfers.reduce((a, b) => a + b, 0)/this._cijfers.length;
    return parseFloat(gem.toFixed(2));
   }

   public setNaam(value:String) {
    if (value.trim() === ""){
        console.log("Naam mag niet leeg zijn");
    }else{
        this._naam = value;
    }
   }

   public voegCijferToe(cijfer: number): void{
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


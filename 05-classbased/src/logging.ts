class Logger{
    private static instance: Logger;

    private constructor() {
        
    }

    public static getInstance(): Logger{
        if(!this.instance){
            this.instance =  new Logger();
        }

        return this.instance;
    }

    logging(bericht: string): void{
        const timestamp = new Date().toISOString();
        console.log(`${timestamp}: ${bericht}`);
    }

}

class Users{
    private logger: Logger = Logger.getInstance();
    private naam: string;

    constructor(naam: string){
        this.naam = naam;
        this.logger.logging(`Een nieuwe gebruiker met de naam ${naam} is aangemaakt.`);
    }

    setName(nieuwNaam: string):void {
        this.logger.logging(`De gebruikersnaam is veranderd van ${this.naam} naar ${nieuwNaam}.`);
    }

}

const users1 = new Users("John Doe");
users1.setName("Jane Doe");
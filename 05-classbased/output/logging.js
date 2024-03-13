"use strict";
class Logger {
    constructor() {
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Logger();
        }
        return this.instance;
    }
    logging(bericht) {
        const timestamp = new Date().toISOString();
        console.log(`${timestamp}: ${bericht}`);
    }
}
class Users {
    constructor(naam) {
        this.logger = Logger.getInstance();
        this.naam = naam;
        this.logger.logging(`Een nieuwe gebruiker met de naam ${naam} is aangemaakt.`);
    }
    setName(nieuwNaam) {
        this.logger.logging(`De gebruikersnaam is veranderd van ${this.naam} naar ${nieuwNaam}.`);
    }
}
const users1 = new Users("John Doe");
users1.setName("Jane Doe");

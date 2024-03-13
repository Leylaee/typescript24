"use strict";
class Database {
    constructor() {
        this.data = [];
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Database();
        }
        return this.instance;
    }
    addData(newData) {
        this.data.push(newData);
    }
    removeData(targetData) {
        this.data = this.data.filter(data => data !== targetData);
    }
    fetchData() {
        return this.data;
    }
}
// Testen
const db1 = Database.getInstance();
const db2 = Database.getInstance();
// Hier controleren we of beide "instanties" dezelfde zijn
console.log(db1 === db2); // Outputs: true
db1.addData("Data 1");
db1.addData("Data 2");
console.log(db2.fetchData()); // Outputs: ["Data 1", "Data 2"]
db2.removeData("Data 1");
console.log(db1.fetchData()); // Outputs: ["Data 2"]

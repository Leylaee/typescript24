"use strict";
const storageKey = Symbol('storageKey');
class SafeStorage {
    constructor(data) {
        this[storageKey] = data;
    }
    getData() {
        this.validateData(this[storageKey]);
        return this[storageKey];
    }
    setData(data) {
        this[storageKey] = data;
    }
    deleteData() {
        this[storageKey] = undefined;
    }
    exists() {
        return this[storageKey] !== undefined;
    }
    validateData(data) {
        if (data === null || data === undefined) {
            console.log('Data kan niet null of undefined zijn.');
        }
    }
}
const hiddenData = new SafeStorage("Geheime Info");
console.log(hiddenData.getData()); // "Geheime Info"
// hiddenData.setData(undefined); // Console logt: "Data kan niet null of undefined zijn."
console.log(hiddenData.getData()); // "Geheime Info" (ongewijzigd vanwege de validatie)
hiddenData.deleteData();
console.log(hiddenData.exists()); // false
const invalidStorage = new SafeStorage(undefined); // Console logt: "Data kan niet null of undefined zijn."
console.log(invalidStorage.getData()); // undefined (geen initiële waarde ingesteld vanwege de validatie)

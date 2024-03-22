const storageKey = Symbol('storageKey');

class SafeStorage<T>{
        private [storageKey]? : T;

        constructor(data : T){
            this[storageKey] = data;
        }

        getData(): T |undefined {
            this.validateData(this[storageKey]);
            return this[storageKey];
        }

        setData(data: T): void {
            this[storageKey] = data;
        }

        deleteData(): void{
            this[storageKey] = undefined;
        }

        exists() : boolean {
            return this[storageKey] !== undefined;
        }

        private validateData(data: T | undefined ): void {
             if(data === null || data === undefined){
                console.log('Data kan niet null of undefined zijn.');
             }
        }
}

const hiddenData = new SafeStorage<string>("Geheime Info");
console.log(hiddenData.getData()); // "Geheime Info"
// hiddenData.setData(undefined); // Console logt: "Data kan niet null of undefined zijn."
console.log(hiddenData.getData()); // "Geheime Info" (ongewijzigd vanwege de validatie)
hiddenData.deleteData();
console.log(hiddenData.exists()); // false
const invalidStorage = new SafeStorage<string | undefined>(undefined); // Console logt: "Data kan niet null of undefined zijn."
console.log(invalidStorage.getData()); // undefined (geen initiële waarde ingesteld vanwege de validatie)
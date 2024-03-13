class User{
    public firstName : string;
    public lastName : string;
    protected email : string;
    private password : string;

    constructor(firstName: string, lastName : string , email : string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = '';
    }

    public getFullName() : void {
        console.log('getFullName');
        console.log(`${this.firstName} ${this.lastName}`);
        console.log('-------------');
    }

    public resetPassword(newPassword: string) : void {
        this.password = newPassword;
        console.log('Wachtwoord is succesvol gereset.');
        console.log('-------------');   
    }

    public showUserInfo(){
        console.log('Log user info:');
        console.log(`Name: ${this.getFullName()}`);
        console.log(`Email: ${this.email}`);
        console.log('-------------');
    }

    public setPassword(newPassword: string): void{
        if(this.isValidPassword(newPassword)){
            console.log('Wachtwoord succesvol ingesteld.')
            console.log('-------------');
        } else{
            console.log('Wachtwoord voldoet niet aan de vereisten.')
            console.log('-------------');
        }
    }

    public isValidPassword(password: string): boolean{
       let lengte = 8;

       if(password.length < lengte) {
          return false;
       }

       let letters = /[a-zA-Z]/.test(password);
       let nummers = /[\d]/.test(password);
       if(!letters || !nummers){
         return false;
       }

       let specialeTekens = ['@' , '#' , '$' , '%'];

       let completePassword = '';
       completePassword += 'a';
       completePassword += '3';
       completePassword += specialeTekens[0];

       let pass = completePassword;

       let chars = (Math.random() * 6 ) + 5;
       for (let i = 0; i < chars; i++){
            pass += specialeTekens[i % specialeTekens.length];
       }

       return true;


    }
}

const user1 = new User('John' , 'Doe' , 'john.doe@example.com');
user1.showUserInfo();


const user2 = new User('Jane' , 'Smith' , 'jane.smith@example.com');
user2.showUserInfo();

user1.getFullName();

user1.resetPassword('Nieuw123');

user1.setPassword('Hey123');
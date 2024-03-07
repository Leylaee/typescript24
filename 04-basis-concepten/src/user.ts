const user  = {
    name: "Charlie",
    age: 35,
    describe(): string {
       return  `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};

console.log(user.describe());
const calculate = (x: number, y:number, operator?: string)=> {
    if (operator === "substract") {
        return x - y;
    
    }
    return x + y;
};

console.log(calculate(5,3));
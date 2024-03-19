"use strict";
class MainCourse {
    constructor(name, price, quantityOrdered, discountPercentage, quantityForDiscount) {
        this.name = name;
        this.price = price;
        this.quantityOrdered = quantityOrdered;
        this.discountPercentage = discountPercentage;
        this.quantityForDiscount = quantityForDiscount;
    }
}
class Dessert {
    constructor(name, price, quantityOrdered, discountPercentage, quantityForDiscount) {
        this.name = name;
        this.price = price;
        this.quantityOrdered = quantityOrdered;
        this.discountPercentage = discountPercentage;
        this.quantityForDiscount = quantityForDiscount;
    }
}
function calculateTotalPrice(dishes) {
    let totalPrijs = 0;
    for (let i = 0; i < dishes.length; i++) {
        let dish = dishes[i];
        let totaleprijsVoorDish = dish.price * dish.quantityOrdered;
        console.log(`${dish.name} - ${dish.price.toFixed(2)}€`);
        if (dish.discountPercentage && dish.quantityForDiscount && dish.quantityOrdered >= dish.quantityForDiscount) {
            const discountprice = dish.price - (dish.price * dish.discountPercentage / 100);
            totaleprijsVoorDish = discountprice * dish.quantityOrdered;
            console.log(`Discount of ${dish.discountPercentage}% applied on ${dish.name}`);
            console.log(`${discountprice.toFixed(2)}€ * ${dish.quantityOrdered} ordered =${(totaleprijsVoorDish).toFixed(2)} `);
        }
        else {
            console.log(`${totaleprijsVoorDish.toFixed(2)}€ * ${dish.quantityOrdered} ordered =${(totaleprijsVoorDish).toFixed(2)} `);
        }
        console.log('---');
        totalPrijs += totaleprijsVoorDish;
    }
    return totalPrijs;
}
const steak = new MainCourse('Steak', 18.99, 4, 10, 1);
const chickenCurry = new MainCourse('Chicken Curry', 12.99, 1);
const chocolateCake = new Dessert('Chocolate Cake', 6.99, 4, 15, 1);
const bananaMilkshake = new Dessert('Banana Milkshake', 4.99, 1);
const dishes = [steak, chickenCurry, chocolateCake, bananaMilkshake];
const totalPrijs = calculateTotalPrice(dishes);
console.log(`Total price: ${totalPrijs.toFixed(2)}€`);

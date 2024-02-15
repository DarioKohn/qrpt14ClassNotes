//makeAMeal = Function name; order = Parameter name; 
function makeAMeal(order: string): string {
    console.log(order)
    return order + " $15.00"; 
}; 
// note
let firstOrder = makeAMeal("Two Double Cheese Burgers, Onion Rings, and a Root Beer"); 
let secondOrder = makeAMeal("Spicy Chicken Sandwich, Fries, and a Dr. Pepper"); 
let thirdOrder = makeAMeal("10 Piece Chicken Nugget with BBQ Sauce, Fries, and a Pepsi"); 

console.log(firstOrder); 
console.log(secondOrder); 
console.log(`To Go Order For Mars: ${thirdOrder}`); 

function rickRoll() {
    return console.log("Never gonna give you up, Never gonna let you down, Never gonna run around and desert you")
}
console.log(rickRoll())
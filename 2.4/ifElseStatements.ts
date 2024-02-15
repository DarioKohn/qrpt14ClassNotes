/*
* Rules 
1. Cheese Burger is $4.20
2. Chicken Sandwich is $5.10
3. Fries are $2.25
4. Drink is $1.25
5. Combo Meal One Cheese Burger With Fries and a Drink $6.45
6. Combo Meal Two is Chicken Sandwich with Fries and a Drink $7.35
 */

function comboMealCreator(
    cheeseBurger: boolean, 
    chickenSandwich: boolean,
    fries: boolean, 
    drink: boolean) {
        if(cheeseBurger) return '$4.20'; 
        if(chickenSandwich) return '$5.10'; 
        if((cheeseBurger && fries) || (chickenSandwich && fries)) return '$6.25'; 
        if(cheeseBurger && fries && drink) return '$6.45'; 
        if(chickenSandwich && fries && drink) return '$7.35'; 
        if(fries && drink) return '$3.50'; 
        if(fries) return '$2.25'; 
        if(drink) return '$1.25'; 
        if(cheeseBurger && drink) return '$5.45'; 
        if(chickenSandwich && drink ) return '$6:35';
        return 0; 
 }

 console.log("this should be combo meal one", comboMealCreator(true, false,true, true)); 
 console.log("this should be combo meal two", comboMealCreator(false, true, true, true)); 
 console.log("this should be fries and a drink", comboMealCreator(false, false, true, true)); 
 console.log("this should be burger and fries", comboMealCreator(true, false, true, false)); 
 console.log("this should be burger and drink", comboMealCreator(true, false, false,true)); 

 function takeOrder(ticket: string): string {
    if(ticket == "Combo Meal One") {
        return "$6.45"; 
    } else if (ticket == "Combo Meal Two") {
        return "$7.35"; 
    }else if (ticket == "Combo Meal Three") {
        return "$5.35";
    } else {
        return `We do not carry ${ticket}`; 
    }; 
 }; 

 console.log(takeOrder("Combo Meal One")); 
 console.log(takeOrder("Combo Meal Two")); 
 console.log(takeOrder("Combo Meal Three")); 
 console.log(takeOrder("Fries")); 
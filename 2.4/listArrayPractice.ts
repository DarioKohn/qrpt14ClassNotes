let firstList: Array<number> = []; 

let candy: Array<string> = [
    "Snickers", 
    "Sour Patch Kids", 
    "Sweetish Fish", 
    "MnM's"
]; 

// * Push add items to our arrays; 
firstList.push(100); 
firstList.push(1000); 
firstList.push(10000); 

// * When you run the file first list internally will look like this 100, 1000, 10000
console.log("this first list should be", firstList); 
console.log(" it should print and delete MnM's", candy.pop()); 
console.log("this should have the remaining candy after the pop", candy); 
console.log("should give us back 100", firstList[0]); 
console.log("should give us back sour patch kids", candy[1]); 
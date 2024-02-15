// list of videos to play for our loop
var videoGames: Array<string> = [
    "Red Dead Redemption 2", 
    "Jedi: Fallen Order", 
    "Jedi: Survivor", 
    "Call of Duty", 
    "Forza", 
    "NBA 2K", 
    "Madden 24"
]; 

for(let i = 0; i < videoGames.length; i++) {
    console.log(`Games to Play: ${i + 1}: ${videoGames[i]}`); 
}; 

videoGames.forEach((game) => {
    console.log(`You should check out this game to play ${game}`); 
}); 
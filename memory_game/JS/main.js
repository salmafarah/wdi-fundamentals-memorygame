let cards = [ "queen", "queen", "king", "king"]; 

let cardsInPlay = []
let cardId = [0,1,2,3,4]; 
cardsInPlay.push(cards[cardId]);

function checkForMatch(cardsInplay){
	if (cardsInPlay[0] === cardsInplay[1]) {
		console.log('You found a match!');
	} else {
		console.log('Sorry, try again.');
	}
}

function flipCard(cardId){
console.log (' User flipped ' + cards[cardId])  

}
flipCard(0);
flipCard(2);
checkForMatch(); 










if (cardsInPlay.length === 2) { 
console.log (cardsInPlay.length);} 
else {
	console.log ( cardsInPlay[0] === cardsInPlay[2] );
}


alert ( 'You found a match!'); 






var cards = [ 

{
	rank : "queen",
	suit : 'hearts',
	cardImage : "images/queen-of-hearts.png",
},
{
	rank : "queen",
	suit: 'diamonds',
	cardImage:"images/queen-of-diamonds.png",
},
{
	rank : "king",
	suit : "hearts",
	cardImage : "images/king-of-hearts.png",

},
{
	rank : "king",
	suit : "hearts",
	cardImage : "images/king-of-diamonds.png",
},

]; 

var cardsInPlay = []
var cardId = [0,1,2,3,4]; 
cardsInPlay.push(cards[cardId].rank); 

function checkForMatch(cardsInplay){
	if (cardsInPlay[0] === cardsInplay[1]) {
		console.log('You found a match!');
	} else {
		console.log('Sorry, try again.');
	}
}

function flipCard(cardId){
console.log (' User flipped ' + cards[cardId].rank)  

}
flipCard(0);
flipCard(2);












if (cardsInPlay.length === 2) { 
console.log (cardsInPlay.length);} 
else {
	console.log ( cardsInPlay[0] === cardsInPlay[2] );
}


alert ( 'You found a match!'); 






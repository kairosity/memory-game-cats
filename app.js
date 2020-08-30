document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'cat1',
            img: 'images/cat1.jpg'
        },
        {
            name: 'cat1',
            img: 'images/cat1.jpg'
        },
        {
            name: 'cat2',
            img: 'images/cat2.jpg'
        },
        {
            name: 'cat2',
            img: 'images/cat2.jpg'
        },
        {
            name: 'cat3',
            img: 'images/cat3.jpg'
        },
        {
            name: 'cat3',
            img: 'images/cat3.jpg'
        },
        {
            name: 'cat4',
            img: 'images/cat4.jpg'
        },
        {
            name: 'cat4',
            img: 'images/cat4.jpg'
        },
        {
            name: 'cat5',
            img: 'images/cat5.jpg'
        },
        {
            name: 'cat5',
            img: 'images/cat5.jpg'
        },
        {
            name: 'cat6',
            img: 'images/cat6.jpg'
        },
        {
            name: 'cat6',
            img: 'images/cat6.jpg'
        }
    ]

cardArray.sort(() => 0.5 - Math.random()); //Math.random creates a number between 0-1 (exclusive of 1) so 0.5- Math.random gives a number from -0.4999 to 0.49999
 // the .sort function sorts the cards by the Math.random results. 

const grid = document.querySelector('.grid'); //just selects the div with class grid.
const resultDisplay = document.querySelector('#result'); //a span after a h3 with the id result.

var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];


function createBoard() {
    for (let i=0; i< cardArray.length; i++){
        var card = document.createElement('img'); //creates an img el for each card in the array
        card.setAttribute('src', 'images/blank.jpg'); // sets their attr to a card cover image
        card.setAttribute('data-id', i); //sets their data-id to their index in the array
        card.addEventListener('click', flipCard); //adds a cb func for when a card is clicked on.
        grid.appendChild(card); //adds the card to the html grid.
    }
}

//check for matches
function checkForMatch(){
    var cards = document.querySelectorAll('img'); //selects all the cards because they are all images.
    const optionOneId = cardsChosenId[0]; //sets var for first card chosen
    const optionTwoId = cardsChosenId[1]; //sets var for second card chosen
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white-tile.jpg'); //sets blank tile because cards are removed from board
        cards[optionTwoId].setAttribute('src', 'images/white-tile.jpg');
        cardsWon.push(cardsChosen); // pushes both cards into cardsWon array
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg'); //if they don't match then turn them back over and show card cover again
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
        alert('Sorry no match, please try again.');
    }
    cardsChosen = []; //empty back out the arrays again so the logic works each time.
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length; //puts the amount of won cards in array - says 1 when 2 cards because they are put in array in pair in another array. So counts the number of 2 card arrays.
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = "Congratulations! You've won!"
    }
}

//flip your card
function flipCard(){
    var cardId = this.getAttribute('data-id'); //puts the specific card in a variable based on its index num.
    cardsChosen.push(cardArray[cardId].name); //puts the names of the chosen cards in the cardsChosen array
    cardsChosenId.push(cardId); //puts the ids of the chosen cards in the cardsChosenId array
    this.setAttribute('src', cardArray[cardId].img); //changes the img from the card cover to the specific cat image using the src attr.
    if (cardsChosen.length === 2) { //if there are 2 cards in the cardsChosen array then after a small amount of time check for a match.
        setTimeout(checkForMatch, 500); 
    }
}

createBoard();

})


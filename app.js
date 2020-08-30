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

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];
//Create board here

function createBoard() {
    for (let i=0; i< cardArray.length; i++){
        var card = document.createElement('img');
        card.setAttribute('src', 'images/blank.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
    }
}

//check for matches
function checkForMatch(){
    var cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (cardsChosen[0] === cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white-tile.jpg');
        cards[optionTwoId].setAttribute('src', 'images/white-tile.jpg');
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'images/blank.jpg');
        cards[optionTwoId].setAttribute('src', 'images/blank.jpg');
        alert('Sorry no match, please try again.');
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = "Congratulations! You've won!"
    }
}

//flip your card
function flipCard(){
    var cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}

createBoard();

})


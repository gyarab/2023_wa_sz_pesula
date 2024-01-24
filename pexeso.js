const cards = ['img/car.jpg', 'img/car.jpg', 'img/cat.jpg', 'img/cat.jpg', 'img/dog.jpg', 'img/dog.jpg', 'img/honey.jpg', 'img/honey.jpg', 'img/laptop.jpg', 'img/laptop.jpg', 'img/moon.jpg', 'img/moon.jpg', 'img/planet.jpg', 'img/planet.jpg', 'img/tree.jpg', 'img/tree.jpg'];
let flippedCards = [];
let matchedCards = [];
let cardElements = [];

function createGameBoard() {
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.classList.add('card-container');
   
    cards.forEach((card, index) => {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.dataset.value = card;
  
      const frontSide = document.createElement('img');
      frontSide.src = card;
      frontSide.style.display = 'none';
      const backSide = document.createElement('div');
      backSide.classList.add('back-side');
  
      cardElement.appendChild(frontSide);
      cardElement.appendChild(backSide);
  
      cardElement.addEventListener('click', function () {
        flipCard(this, index);
      });
  
      gameBoard.appendChild(cardElement);
    });
}
 
function shuffleCards(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
}

function flipCard(card, index) {
    if (!flippedCards.includes(card) && flippedCards.length < 2) {
        card.classList.add('flipped');
        flippedCards.push(card);

        showCardImage(card, index);

        if (flippedCards.length === 2) {
            checkMatchedCards();
        }
    }
}

function showCardImage(card, index) {
    const imgElement = card.querySelector('img');
    imgElement.style.display = 'block';
}

function checkMatchedCards() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.value === card2.dataset.value) {
        matchedCards.push(card1, card2);
        flippedCards = [];
    } else {
        setTimeout(() => {
            flippedCards.forEach(card => {
                card.classList.remove('flipped');
                card.querySelector('img').style.display = 'none';
            });
            flippedCards = [];
        }, 500);
    }
}

createGameBoard(shuffleCards(cards));

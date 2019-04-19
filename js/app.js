//List holding all cards (16)
let cards = document.getElementsByClassName('card');
    cardsArray = ['fa-cloud', 'fa-paper-plane-o','fa-anchor', 'fa-bolt',
                 'fa-cube', 'fa-leaf', 'fa-bicycle', 'fa-bomb', 'fa-cloud',
                 'fa-paper-plane-o','fa-anchor', 'fa-bolt', 'fa-cube', 'fa-leaf',
                 'fa-bicycle', 'fa-bomb'];

// Variables with access to the required DOM elements
let deck = document.querySelector('.deck');
    timeCounter = document.querySelector('.timer');
    secs = document.querySelector('.seconds');
    mins = document.querySelector('.minutes');

    moveCounter = document.querySelector('.moves');
    firstStar = document.querySelector('.first-star');
    secondStar = document.querySelector('.second-star');
    thirdStar = document.querySelector('.third-star');

//Variables required for specific functions
let cardDeck = [];
    flippedCards = [];
    matchedCards = [];
    firstFlippedCard = flippedCards[0];
    secondFlippedCard = flippedCards[1];
    openedCards = 0;
    m = 0;
    s = 0;
    moveNum = 0;
    starsNum=3;

let interval;

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;

		while (currentIndex !== 0) {
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;
				temporaryValue = array[currentIndex];
				array[currentIndex] = array[randomIndex];
				array[randomIndex] = temporaryValue;
		}

		return array;
}

// Card creating function
function createElement() {
	 for (let i = 0; i < cardsArray.length; i ++) {
		 let singleCard = document.createElement('li');
                 singleCard.classList.add('card');
                 //I would rather use template literals, but due to issues with IE11 I will go with simple concatenation
		 singleCard.innerHTML = "<i class=" + "'fa " + cardsArray[i] + "'></i>";
		 deck.appendChild(singleCard);
		 cardDeck.push(singleCard);
	}
}

// Execute this function when a card is clicked
function clickOnCard() {
  let cards = document.querySelectorAll('.card');
	for (let i = 0; i < cards.length; i++) {
		function openCards() {

		  if (flippedCards >= 1) {
   	          for (let i = 0; cards.length < i; i++) {
                      cards[i].classList.add('blocked');
		      }
			  
	          } else {
                      cards[i].classList.add('open', 'show');
		      openedCards++;
		      }

		// First card clicked => timer starts
			if (openedCards == 1) {
			   startTimer();
				
			} else {
			    return;
			}
		}
		
//Allow only two cards
function limitCards() {
	if (flippedCards.length < 2) {
	       flippedCards.push(cards[i]);
		}

	          if (flippedCards.length === 1) {
		      cards[i].classList.add('blocked');
		´     }
		  if (flippedCards.length === 2) {
		     for (let i = 0; cards.length < i; i++) {
		      cards[i].classList.add('blocked');
		      }
		      firstFlippedCard = flippedCards[0];
		      secondFlippedCard = flippedCards[1];

        movesCounter();
      	starRating();
      	compareCards();
	             }
       }
		
              //Manage event listeners
		function addClick() {
			cards[i].addEventListener('click', openCards);
			cards[i].addEventListener('click', limitCards);
		}
		function removeClick() {
			cards[i].removeClick('click', openCards);
			cards[i].removeClick('click', limitCards);
		}
		if (flippedCards.length >= 2) {
			removeClick();
		}
		else {
			addClick();
		  }
	        }
               }

// Check if the cards match comparing two array elements' innerHTML.
function compareCards() {
	if (flippedCards[0].innerHTML === flippedCards[1].innerHTML) {
	   matchYes();

	} else {
  	  matchNo();

	}
	flippedCards = [];
}

// Matched cards get new class 'match' and become a part of a new array
function matchYes() {
	for (let i = 0; cards.length < i; i++) {
	    cards[i].classList.add('blocked');
	}
	flippedCards[0].classList.add('match', 'animated', 'heartBeat');
	flippedCards[1].classList.add('match', 'animated', 'heartBeat');
	matchedCards.push(firstFlippedCard, secondFlippedCard);
	flippedCards = [];

	finishGame();
}

// If the cards don´t match, they flip back after a minimal period of time.
function matchNo() {
	flippedCards = [];
	for (let i = 0; cards.length < i; i++) {
            cards[i].classList.add('blocked');
	}

	setTimeout(function() {
             firstFlippedCard.classList.remove('open', 'show', 'blocked');
		secondFlippedCard.classList.remove('open', 'show', 'blocked');
	}, 650);
}


// Implement move counter
function movesCounter() {
	moveNum++;
	moveCounter.innerHTML = moveNum;
}

// Start the timer
function startTimer() {
  interval = setInterval(function() {
    timeCounter.innerHTML =m+'m'+':'+s+'s';
    s++;
    if (s == 60) {
      m++;
      s = 0;
    }
  }, 1000);
}

// Stop the timer
function stopTimer() {
	let totalTime=timeCounter.innerHTML;
  clearInterval(interval);
}

// Implement star rating
function starRating() {
	if (moveNum === 15) {
		firstStar.style.display='none';
    return starsNum = 2;
	}
	if (moveNum === 22) {
		secondStar.style.display='none';
    return starsNum = 1;
	}
}

//Activate the reset button
const restartButton = document.querySelector('.restart');
restartButton.addEventListener('click', function() {
	window.location.reload();
});

//Implement the result modal
let resultModal = document.querySelector('.result-modal');

function showModal() {

 let totalScore = document.querySelector('.total-score');
 totalScore.innerHTML= moveNum + ' moves' +', '+ starsNum +' stars' +' in ' + m +' m '+ s +' s '+'!';
 resultModal.style.display='block';
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.modal-restart').addEventListener('click',function() {
     resultModal.style.display='none';
     window.location.reload();
  });
});

// Finish game if the matched cards array reaches the same length as the array holding the cards
function finishGame() {
	if (matchedCards.length === cardsArray.length) {
		stopTimer();
    showModal();
	}
}

// Start a new game
function startGame() {
  shuffle(cardsArray);
  createElement();
	clickOnCard();
}

startGame();

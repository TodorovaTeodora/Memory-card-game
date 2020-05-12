const cards = document.querySelectorAll(".memoryCard");
var isFlipped = false;
var firstCard, secondCard;
var lock = false;

cards.forEach(card => card.addEventListener("click", flip));

function flip() {
    if (lock) return;
    if (this === firstCard) return;
    this.classList.add("flip");
    if (!isFlipped) {
isFlipped = true;
firstCard = this;
return;
    }
    secondCard = this;
    check();
}

function check() {

    var isMatch = firstCard.dataset.image === secondCard.dataset.image;
    isMatch ? success() : fail();

    function success() {
        firstCard.removeEventListener("click", flip);
        secondCard.removeEventListener("click", flip);
   reset();

    }

    function fail() {
        lock = true;
        setTimeout(() => {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
            reset();
        }, 1000);
    
    }

    function reset() {
    [isFlipped, lock] = [false, false];
    [firstCard, secondCard] = [null, null];
    
    }

    (function suffle() {
    cards.forEach(card => {
    var position = Math.floor(Math.random() * 16);
    card.style.order = position;
});
    })();
}
/*
 * set up the event listener for a card. If a card is clicked: [Done]
 *  - display the card's symbol (put this functionality in another function that you call from this one)[Done]
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)[Done]
 *  - if the list already has another card, check to see if the two cards match[Done]
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)[Done]
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)[Done]
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)[Done]
 */

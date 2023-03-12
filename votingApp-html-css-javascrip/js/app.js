// keep trace of winners
let winner = false;

// get a reference to the cards div
const cards  = document.querySelector('.cards');

// render cards
cards.innerHTML = getCards();

// get a reference to the cards buttons
const cardButtons = document.querySelectorAll('.card-btn');

// get a reference to the obi votes span
const obiVoteEl = document.querySelector('.vote-number-obi');

// get a reference to the tinubu votes span
const tinubuVoteEl = document.querySelector('.vote-number-tinubu');

// get a reference to the atiku votes span
const atikuVoteEl = document.querySelector('.vote-number-atiku');

// set event listeners for the vote buttons
cardButtons.forEach(cardButton => {
    cardButton.addEventListener
    ('click', (e) => {
        if (e.target.classList.contains('btn-obi')){
            addVote(0, 'obi',obiVoteEl)
        }
        if(e.target.classList.contains('btn-tinubu')){
            addVote(1, 'tinubu',tinubuVoteEl)
        }
        if(e.target.classList.contains('btn-atiku')){
            addVote(2, 'atiku',atikuVoteEl)
        }
    });
});
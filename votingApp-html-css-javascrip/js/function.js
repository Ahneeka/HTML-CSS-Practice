// return a list of cards
const getCards = () => {
    return contestants.map(contestant => {
        return `<div class="card">
        <img class="card-image" src="images/${contestant.id}.jpeg" alt="">
        <div class="card-info">
            <div class="candidate-votes">
                <span class="vote-number-${contestant.id}">${contestant.vote}</span>
                <span class="vote-text">VOTE</span>
            </div>
            <div class="line"></div>
            <div class="candidate-info">
                <span class="candidate-name">${contestant.name}</span> 
                <span class="candidate-party">
                    <img class="image" src="/images/${contestant.logo}.jpeg" alt="">
                    ${contestant.party} 
                </span>
            </div>
        </div>
        <button class="card-btn btn-${contestant.id}">VOTE</button>
    </div>`
    });
}

// add a vote to the corresponding contestant.
const addVote = (index, contestant, voteEl) => {
    // increase vote by one as long as there's not a winner
    if (!winner){
        // increase vote by one
        contestants[index].vote++;

        // update votes element
        voteEl.textContent = contestants[index].vote;

        // check if the contestant won
        isWinner(contestant, contestants[index].vote);
    }
}

// if contestant won, set winner variable to true
const isWinner = (contestant, vote) => {
    if (vote === 220){
        winner = true;

        setWinnerLoser(contestant)
    }
};

// shows who won and who lost
const setWinnerLoser = (contestant) => {
    if (contestant === "obi"){
        document.querySelector('.btn-obi').textContent = "WINNER"
        if(contestants[1].vote > contestants[2].vote){
            document.querySelector('.btn-tinubu').textContent = "First runner up"
            document.querySelector('.btn-atiku').textContent = "Second runner up"
        } else {
            document.querySelector('.btn-tinubu').textContent = "Second runner up"
            document.querySelector('.btn-atiku').textContent = "First runner up"
        }
        if(contestants[1].vote == contestants[2].vote){
            document.querySelector('.btn-tinubu').textContent = "First runner up"
            document.querySelector('.btn-atiku').textContent = "First runner up"
        }
        
    }
    else if(contestant === "tinubu"){
        document.querySelector('.btn-tinubu').textContent = "WINNER"
        if(contestants[0].vote > contestants[2].vote){
            document.querySelector('.btn-obi').textContent = "First runner up"
            document.querySelector('.btn-atiku').textContent = "Second runner up"
        }else{
            document.querySelector('.btn-obi').textContent = "Second runner up"
            document.querySelector('.btn-atiku').textContent = "First runner up"
        }
        if(contestants[0].vote == contestants[2].vote){
            document.querySelector('.btn-obi').textContent = "First runner up"
            document.querySelector('.btn-atiku').textContent = "First runner up"
       }
   }

    else if(contestant === "atiku"){
        document.querySelector('.btn-atiku').textContent = "WINNER"
        if(contestants[0].vote > contestants[1].vote){
        document.querySelector('.btn-obi').textContent = "First runner up"
        document.querySelector('.btn-tinubu').textContent = "Second runner up"
        }else{
        document.querySelector('.btn-obi').textContent = "Second runner up"
        document.querySelector('.btn-tinubu').textContent = "First runner up"
        }
        if(contestants[0].vote == contestants[1].vote){
            document.querySelector('.btn-obi').textContent = "First runner up"
            document.querySelector('.btn-tinubu').textContent = "First runner up"
       }
    }

};

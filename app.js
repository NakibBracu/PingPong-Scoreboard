const p1 = {
    score: 0,
    button:document.querySelector('#player1'),
    display:document.querySelector('#p1Display')
}

  
const p2 = {
    score: 0,
    button:document.querySelector('#player2'),
    display:document.querySelector('#p2Display')
}
let isGameOver = false;
let winningScore = 3;//lowest option in winningscore selector
let resetButton = document.querySelector('#reset')
let winningScoreDropDown = document.querySelector('#winningScore')
let winner = "Player 1";

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score >= winningScore  && Math.abs(player.score-opponent.score) >=2) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
            displayWinner(player)
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function () {
    updateScores(p1,p2)
})
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
})


resetButton.addEventListener('click', Restart)

winningScoreDropDown.addEventListener('change',function(){
    console.log('winning score updated to '+this.value);
    winningScore = parseInt(this.value);
    Restart();
})

function Restart(){
    isGameOver = false
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
    winnerContainer.classList.add("hidden");
} 

function displayWinner(winner) {
    let winnerText = "Winner: " + winner.name;
    let winnerContainer = document.getElementById("winnerContainer");
    winnerContainer.textContent = winnerText;
    winnerContainer.classList.remove("hidden");
}
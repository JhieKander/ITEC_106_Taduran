function play(playerChoice) {
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result;

    if (playerChoice === computerChoice) {
        result = "IT'S A TIE!";
	color = "blue";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = "YOU WIN!";
	color = "green";
    } else {
        result = "YOU LOSE!";
	color = "red";
    }

    document.getElementById('player').innerText = `PLAYER: ${playerChoice}`;
    document.getElementById('computer').innerText = `COMPUTER: ${computerChoice}`;
    document.getElementById('result').innerText = `${result}`;
    document.getElementById('result').style.color = color;
}

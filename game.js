
class game {
    constructor(player1) {
        this.player1 = new player(player1);
        this.computer = new player('Computer');
        this.choices = ['rock', 'paper', 'scissors'] || ['hobbit', 'elf', 'ork'];
       
    }

    computerChoice() {
        let index = Math.floor(Math.random() * this.choices.length);
        this.computer.choice = this.choices[index];
    }

    findWinner() {
        if (this.player1.choice === this.computer.choice) {
            return `It's a tie!`;
        }
        if (
            (this.player1.choice === 'rock' && this.computer.choice === 'scissors') ||
            (this.player1.choice === 'scissors' && this.computer.choice === 'paper') ||
            (this.player1.choice === 'paper' && this.computer.choice === 'rock')
        ) { this.player1.wins++
            return `${this.player1.name} wins!`;
        } else {
            this.computer.wins++
            return 'Computer wins!';
        }
    }

    
   
    gameLoop() {
        if (this.player1.wins >= 3) {
            console.log(`${this.player1.name} has won the game!`);
            return;
        }
        if (this.computer.wins >= 3) {
            console.log("Computer has won the game!");
            return;
        }
       
            this.player1.choice = playerChoice();
            this.computerChoice();
            let result = this.findWinner();
            console.log(`Player chose ${this.player1.choice}`);
            console.log(`Computer chose ${this.computer.choice}`);
            console.log(result);
            console.log(`Player wins: ${this.player1.wins}`);
            console.log(`Computer wins: ${this.computer.wins}`);
            this.gameLoop(); 
        
    }
}

var images = document.querySelector('.main-section-images');

images.addEventListener('click', (e) =>  {
    playerChoice(e);
});

function playerChoice(e) {
    let player1 = new game('player1');
    player1.choice = e.target.alt;
    player1.gameLoop();

}

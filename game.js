var { player } = require('./player.js');
var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
class Game {
    constructor(player1) {
        this.player1 = new player(player1);
        this.computer = new player('Computer');
        this.choices = ['rock', 'paper', 'scissors'];
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
            return readline.close();
        }
        if (this.computer.wins >= 3) {
            console.log("Computer has won the game!");
            return readline.close();
        }

        readline.question("Enter your choice (rock, paper, or scissors):", (playerChoice) => {
        //  this.player1.choice = prompt("Enter your choice (rock, paper, or scissors):");
            this.player1.choice = playerChoice;
            this.computerChoice();
            let result = this.findWinner();
            console.log(`Player chose ${this.player1.choice}`);
            console.log(`Computer chose ${this.computer.choice}`);
            console.log(result);
            console.log(`Player wins: ${this.player1.wins}`);
            console.log(`Computer wins: ${this.computer.wins}`);
            this.gameLoop(); 
        });
    }
    // gameLoop() {
    //     this.player1.choice = prompt("Enter your choice (rock, paper, or scissors):");
    //     this.computerChoice();
    //     let result = this.findWinner();
    //     console.log(`Player chose ${this.player1.choice}`);
    //     console.log(`Computer chose ${this.computer.choice}`);
    //     console.log(result);
    // }
}

let myGame = new Game('Player1');
myGame.gameLoop();
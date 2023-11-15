
class Game {
    constructor(player1, choices) {
        this.player1 = new Player(player1);
        this.computer = new Player('Computer');
        this.choices =  choices || ['hobbit', 'elf', 'ork', 'wizard', 'human'];
        this.turn = "player1";
        this.message = '';
    }
 //['rock', 'paper', 'scissors']
 
    computerChoice() {
        let index = Math.floor(Math.random() * this.choices.length);
        this.computer.choice = this.choices[index];
    }

    findWinner() {
            if (this.player1.choice === this.computer.choice) {
                this.message = `It's a tie!`;
                return this.message;
            }
            if( 
                (this.player1.choice === 'hobbit' && (this.computer.choice === 'human' || this.computer.choice === 'wizard')) ||
                (this.player1.choice === 'elf' && (this.computer.choice === 'ork' || this.computer.choice === 'hobbit')) ||
                (this.player1.choice === 'human' && (this.computer.choice === 'elf' || this.computer.choice === 'wizard')) || 
                (this.player1.choice === 'wizard' && (this.computer.choice === 'ork' || this.computer.choice === 'elf')) ||
                (this.player1.choice === 'ork' && (this.computer.choice === 'human' || this.computer.choice === 'hobbit'))) {
                this.player1.incrementWins();
                this.message = `${this.player1.name} wins!`;
                return this.message;
            }

        if (
            (this.player1.choice === 'rock' && this.computer.choice === 'scissors') ||
            (this.player1.choice === 'scissors' && this.computer.choice === 'paper') ||
            (this.player1.choice === 'paper' && this.computer.choice === 'rock')
        ) { this.player1.wins++
            this.message = `${this.player1.name} wins!`;
            return this.message;
        } 
        else {
            this.computer.incrementWins();
            this.message = `Computer wins!`;
            return this.message;
        }
    }

    makeChoice() {
        if (this.player1.choice === '') {
            return;
        }
        else{
            
            this.computerChoice();
            this.turn = "player1";
        }
        
        
        if (this.turn === "computer") {
        }
    }
    gameLoop() {
            this.makeChoice();
            let result = this.findWinner();
            this.player1.choice = '';
            console.log('gameLoop')
                return result;
    }
}



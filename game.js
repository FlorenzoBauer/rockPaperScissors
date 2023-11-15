
class Game {
    constructor(player1, choices) {
        this.player1 = new Player(player1);
        this.computer = new Player('Computer');
        this.choices =  choices || ['hobbit', 'elf', 'ork', 'wizard', 'human'];
        this.turn = "player1";
    }
 //['rock', 'paper', 'scissors']
 
    computerChoice() {
        let index = Math.floor(Math.random() * this.choices.length);
        this.computer.choice = this.choices[index];
    }

    findWinner() {
            if (this.player1.choice === this.computer.choice) {
                return alert(`It's a tie!`);
            }
            if( 
                (this.player1.choice === 'hobbit' && (this.computer.choice === 'human' || this.computer.choice === 'wizard')) ||
                (this.player1.choice === 'elf' && (this.computer.choice === 'ork' || this.computer.choice === 'hobbit')) ||
                (this.player1.choice === 'human' && (this.computer.choice === 'elf' || this.computer.choice === 'wizard')) || 
                (this.player1.choice === 'wizard' && (this.computer.choice === 'ork' || this.computer.choice === 'elf')) ||
                (this.player1.choice === 'ork' && (this.computer.choice === 'human' || this.computer.choice === 'hobbit'))) {
                this.player1.incrementWins();
                return `${this.player1.name} wins!`;
            }

        if (
            (this.player1.choice === 'rock' && this.computer.choice === 'scissors') ||
            (this.player1.choice === 'scissors' && this.computer.choice === 'paper') ||
            (this.player1.choice === 'paper' && this.computer.choice === 'rock')
        ) { this.player1.wins++
            return `${this.player1.name} wins!`;
        } 
        else {
            this.computer.incrementWins();
            return 'Computer wins!';
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
            // alert(result);
            
    }
}



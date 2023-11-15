
class Game {
    constructor(player1, choices) {
        this.player1 = new player(player1);
        this.computer = new player('Computer');
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
            return `It's a tie!`;
        }
        if( (this.player1.choice === 'wizard' && this.computer.choice === 'ork') || (this.player1.choice === 'human') || 
        (this.player1.choice === 'ork') || (this.player1.choice === 'elf')||
         (this.player1.choice === 'hobbit') ){
            this.player1.wins++
            return `${this.player1.name} wins!`;
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
    
    makeChoice() {
        if (this.player1.choice === '') {
            return;
        }
        if (this.turn === "player1") {
            this.player1.choice = e.target.alt;
            this.turn = "computer";
        }
        
        if (this.turn === "computer") {
            this.computerChoice();
            this.turn = "player1";
        }
    }
    gameLoop() {
            this.makeChoice();
            this.computerChoice();
            let result = this.findWinner();
            
            console.log(result);
            
           
           
        
    }
}



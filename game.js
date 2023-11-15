
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
        if( 
            (this.player1.choice === 'hobbit' && this.computer.choice === 'human' || 'wizard')){
            (this.player1.choice === 'elf' && this.computer.choice === 'ork' || 'hobbit')||
            (this.player1.choice === 'human' && this.computer.choice === 'elf' || 'wizard') || 
            (this.player1.choice === 'wizard' && this.computer.choice === 'ork' || 'elf') ||
            (this.player1.choice === 'ork' && this.computer.choce === 'human' || 'hobbit') ||
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
        else{
            
            this.computerChoice();
            this.turn = "player1";
        }
        
        
        if (this.turn === "computer") {
        }
    }
    gameLoop() {
            this.makeChoice();
            console.log(this.player1.choice)
            console.log(this.computer.choice)
            let result = this.findWinner();
            this.player1.choice = '';
            console.log(result);
            
           
           
        
    }
}



// Initial variables
const images = document.querySelector('.main-section-images');
const lotrimages = document.querySelector('.main-section-imgLotr');
const startButtons = document.querySelector('.main-section-buttons');
const changeModeButton = document.querySelector('.left-section-button');
let myGame;

// Event listeners
changeModeButton.addEventListener('click', viewChange);
startButtons.addEventListener('click', buttonForGame);
images.addEventListener('click', startGame);
lotrimages.addEventListener('click', startGame);

// Function to create a player
const createPlayer = (name) => ({
   name,
   wins: 0,
   choice: '',
   incrementWins() {
     this.wins++;
   },
 });
 
 // Function to create a game
 const createGame = (player1Name, choices) => ({
   player1: createPlayer(player1Name),
   computer: createPlayer('Computer'),
   choices: choices || ['hobbit', 'elf', 'ork', 'wizard', 'human'],
   turn: 'player1',
   message: '',

   computerChoice() {
     const index = Math.floor(Math.random() * this.choices.length);
     this.computer.choice = this.choices[index];
   },

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
   },
   makeChoice() {
       if (this.player1.choice === '') {
           return;
       }
       else{   
           this.computerChoice();
       }
   },
   
   gameLoop() {
     this.makeChoice();
     const result = this.findWinner();
     this.player1.choice = '';
     console.log('gameLoop');
     return result;
   },
 });
 
 // Function to update the score
 const updateScore = (myGame) => {
   document.querySelector('.left-section-wins').innerHTML = `Wins: ${myGame.player1.wins}`;
   document.querySelector('.right-section-wins').innerHTML = `Wins: ${myGame.computer.wins}`;
 };
 
 // Function to update the winner
 const updateWinner = (myGame) => {
   document.querySelector('.result').innerHTML = `${myGame.message}`;
 };
 
 // Event listeners
 document.querySelector('.left-section-button').addEventListener('click', viewChange);
 document.querySelector('.main-section-buttons').addEventListener('click', buttonForGame);
 document.querySelector('.main-section-images').addEventListener('click', startGame);
 document.querySelector('.main-section-imgLotr').addEventListener('click', startGame);
 
 // Functions
 function viewChange() {
   document.querySelector('.main-section-images').classList.add('hidden');
   document.querySelector('.main-section-imgLotr').classList.add('hidden');
   document.querySelector('.left-section-button').classList.add('hidden');
   document.querySelector('.result').classList.add('hidden');
   
   
   document.querySelector('.main-section-buttons').style.display = 'flex';
   document.querySelector('.main-section-title-screen').innerHTML = "Game Mode";
 }
 
 function playerChoice(e) {
   myGame.player1.choice = e.target.alt;
   myGame.gameLoop();
   updateScore(myGame);
   updateWinner(myGame);
 }
 
 function buttonForGame(e) {
   var titleImgs = document.querySelector('.main-section-images');
   var lotrImgs = document.querySelector('.main-section-imgLotr');
   var header = document.querySelector('.main-section-title-screen');
   document.querySelector('.left-section-button').classList.remove('hidden');
   document.querySelector('.result').classList.remove('hidden');
   
   if (e.target.id == 'button-classic') {
       document.querySelector('.main-section-buttons').style.display = 'none';
       titleImgs.classList.remove('hidden');
       header.innerHTML = "Classic";
   }
   if (e.target.id == 'button-lotr'){
       document.querySelector('.main-section-buttons').style.display = 'none';
       lotrImgs.classList.remove('hidden');
       document.querySelector('.main-section-imgLotr-title').classList.remove('hidden');
       header.innerHTML = 'Lord of the Rings';
   }
 }
 
 function startGame(e) {
   const gameMode = document.querySelector('.main-section-title-screen').textContent;
   var choices = ['rock', 'paper', 'scissors'];
   if (gameMode == 'Classic'){
       choices = ['rock', 'paper', 'scissors'];
   } else if(gameMode == 'Lord of the Rings'){
       choices = ['hobbit', 'elf', 'ork', 'wizard', 'human'];
   }
   if(!myGame){
       myGame = createGame('player1', choices);
   }
   myGame.choices = choices;
   playerChoice(e);

   return myGame;
 }
 

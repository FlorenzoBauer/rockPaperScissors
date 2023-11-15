// variables
var images = document.querySelector('.main-section-images');
var lotrimages = document.querySelector('.main-section-imgLotr');
var startButtons = document.querySelector('.main-section-buttons');
var changeModeButton = document.querySelector('.left-section-button')
var myGame;
// event listeners

changeModeButton.addEventListener('click', (e) => {
    viewChange();
});
startButtons.addEventListener('click', (e) =>  {
    buttonForGame(e);
});

images.addEventListener('click', (e) =>  {
    startGame(e);
});

lotrimages.addEventListener('click', (e) =>  {
    startGame(e);
});

//functions 

function viewChange(){
    document.querySelector('.main-section-images').classList.add('hidden');
    document.querySelector('.main-section-imgLotr').classList.add('hidden');
    document.querySelector('.left-section-button').classList.add('hidden');
    document.querySelector('.result').classList.add('hidden');
    
    
    document.querySelector('.main-section-buttons').style.display = 'flex';
    document.querySelector('.main-section-title-screen').innerHTML = "Game Mode";
}

function updateScore(myGame){
    document.querySelector('.left-section-wins').innerHTML = `Wins: ${myGame.player1.wins}`;
    document.querySelector('.right-section-wins').innerHTML = `Wins: ${myGame.computer.wins}`;
    
}

function updateWinner(myGame){
    document.querySelector('.result').innerHTML = `${myGame.message}`;
}

function playerChoice(e) {
    myGame.player1.choice = e.target.alt;
    myGame.gameLoop();
    updateScore(myGame);
    updateWinner(myGame);
}

function buttonForGame(e){
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
        myGame = new Game('player1', choices);
    }
    myGame.choices = choices;
    playerChoice(e);

    return myGame;
       
    }
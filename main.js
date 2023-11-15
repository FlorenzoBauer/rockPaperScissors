// variables
var images = document.querySelector('.main-section-images');
var startButtons = document.querySelector('.main-section-buttons');
var changeModeButton = document.querySelector('.left-section-button')
var lotrimages = document.querySelector('.main-section-imgLotr');
var myGame;
// event listeners

changeModeButton.addEventListener('click', viewChange);
startButtons.addEventListener('click', (e) =>  {
    startGame(e);
});

images.addEventListener('click', (e) =>  {
     myGame = startGame(e);
});

lotrimages.addEventListener('click', (e) =>  {
     myGame = startGame(e);
});

//functions 

function viewChange(myGame){
    document.querySelector('.main-section-images').classList.add('hidden');
    document.querySelector('.main-section-imgLotr').classList.add('hidden');
    document.querySelector('.left-section-button').classList.add('hidden');
    
    document.querySelector('.main-section-buttons').style.display = 'flex';
    document.querySelector('.main-section-title-screen').innerHTML = "Game Mode";
}
function updateWins(myGame){
    document.querySelector('.left-section-wins').innerHTML = `Wins: ${myGame.player1.wins}`;
    document.querySelector('.right-section-wins').innerHTML = `Wins: ${myGame.computer.wins}`;
}
function playerChoice(e) {
    myGame.player1.choice = e.target.alt;
    myGame.gameLoop();
    updateWins(myGame);
    return myGame;
}

function startGame(e){
    var titleImgs = document.querySelector('.main-section-images');
    var lotrImgs = document.querySelector('.main-section-imgLotr');
    var header = document.querySelector('.main-section-title-screen');
    document.querySelector('.left-section-button').classList.remove('hidden');
    
    const gameMode = document.querySelector('.main-section-title-screen').textContent;
    
    if (e.target.id == 'button-classic') {
        document.querySelector('.main-section-buttons').style.display = 'none';
        titleImgs.classList.remove('hidden');
        header.innerHTML = "Classic";
        var choices = ['rock', 'paper', 'scissors'];
    }
    if (e.target.id == 'button-lotr'){
        document.querySelector('.main-section-buttons').style.display = 'none';
        lotrImgs.classList.remove('hidden');
        header.innerHTML = 'Lord of the Rings';
        choices = ['hobbit', 'elf', 'ork', 'wizard', 'human'];
    }
    if(!myGame){
        myGame = new Game('player1', choices);
        return myGame;}
    playerChoice(e);
    return myGame;
}
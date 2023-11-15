
var images = document.querySelector('.main-section-images');
var startButtons = document.querySelector('.main-section-buttons');
var changeModeButton = document.querySelector('.left-section-button')
var restartGameButton = document.querySelector('.right-section-button');

// restartGameButton.addEventListener('click', restartGame)
changeModeButton.addEventListener('click', viewChange);

startButtons.addEventListener('click', (e) =>  {
    startGame(e);
});

images.addEventListener('click', (e) =>  {
    playerChoice(e);
});

// function restartGame(myGame){
//     myGame.player1.gameLoop();
// }

function playerChoice(e) {
    myGame.player1.choice = e.target.alt;
    myGame.gameLoop();
}

function viewChange(){
    document.querySelector('.main-section-images').classList.add('hidden');
    document.querySelector('.main-section-imgLotr').classList.add('hidden');
    document.querySelector('.left-section-button').classList.add('hidden');
    document.querySelector('.right-section-button').classList.add('hidden');
    
    document.querySelector('.main-section-buttons').style.display = 'flex';
    document.querySelector('.main-section-title-screen').innerHTML = "Game Mode";
}

function startGame(e){
    var titleImgs = document.querySelector('.main-section-images');
    var lotrImgs = document.querySelector('.main-section-imgLotr');
    var header = document.querySelector('.main-section-title-screen');
    document.querySelector('.left-section-button').classList.remove('hidden');
    document.querySelector('.right-section-button').classList.remove('hidden');
    
    if (e.target.id == 'button-classic') {
        let myGame = new Game('player1',['rock', 'paper', 'scissors']);
        document.querySelector('.main-section-buttons').style.display = 'none';
        titleImgs.classList.remove('hidden');
        header.innerHTML = "Classic";

    }
    if (e.target.id == 'button-lotr'){
        let myGame = new Game('player1');
        document.querySelector('.main-section-buttons').style.display = 'none';
        lotrImgs.classList.remove('hidden');
        header.innerHTML = "Lord of the Rings";
    }
    return myGame;
}
var startButtons = document.querySelector('.main-section-buttons');
var changeModeButton = document.querySelector('.left-section-button')
var restartGameButton = document.querySelector('.right-section-button');

restartGameButton.addEventListener('click', restartGame)
changeModeButton.addEventListener('click', viewChange);

startButtons.addEventListener('click', (e) =>  {
    startGame(e);
});

function restartGame(){
    window.gameLoop();
}

function viewChange(){
    var titleImgs = document.querySelector('.main-section-images');
    titleImgs.classList.add('hidden');
    document.querySelector('.main-section-buttons').style.display = 'flex';
}

function startGame(e){
    var titleImgs = document.querySelector('.main-section-images');
    var header = document.querySelector('.main-section-title-screen');
    if (e.target.id == 'button-classic') {
        console.log("hi")
        document.querySelector('.main-section-buttons').style.display = 'none';
        titleImgs.classList.remove('hidden');
        header.innerHTML("Classic");
    }
    if (e.target.id == 'button-lotr'){

    }
}
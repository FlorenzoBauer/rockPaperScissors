// variables
var images = document.querySelector('.main-section-images');
var startButtons = document.querySelector('.main-section-buttons');
var changeModeButton = document.querySelector('.left-section-button')
var lotrimages = document.querySelector('.main-section-imgLotr');

// event listeners

changeModeButton.addEventListener('click', viewChange);
startButtons.addEventListener('click', (e) =>  {
    startGame(e);
});

lotrimages.addEventListener('click', (e) =>  {
    var myGame = startGame(e);
    playerChoice(e, myGame);
    updateWins(myGame);
});

images.addEventListener('click', (e) =>  {
    var myGame = startGame(e);
    playerChoice(e, myGame);
    updateWins(myGame);
});

//functions 

function viewChange(){
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
function playerChoice(e, myGame) {
    myGame.player1.choice = e.target.alt;
    myGame.gameLoop();
    return myGame;
}

function startGame(e){
    var titleImgs = document.querySelector('.main-section-images');
    var lotrImgs = document.querySelector('.main-section-imgLotr');
    var header = document.querySelector('.main-section-title-screen');
    document.querySelector('.left-section-button').classList.remove('hidden');
    
    const gameMode = document.querySelector('.main-section-title-screen').textContent;
    
    if(gameMode == 'Classic'){
        var choices = ['rock', 'paper', 'scissors'];
    }
    const myGame = new Game('player1', choices);

    if (e.target.id == 'button-classic') {
        document.querySelector('.main-section-buttons').style.display = 'none';
        titleImgs.classList.remove('hidden');
        header.innerHTML = "Classic";
    }
    if (e.target.id == 'button-lotr'){
        document.querySelector('.main-section-buttons').style.display = 'none';
        lotrImgs.classList.remove('hidden');
        header.innerHTML = 'Lord of the Rings';
    }

    return myGame;
}

// When calling playerChoice, pass myGame as an argument



// function playerChoice(e) {
//     const gameMode = document.querySelector('.main-section-title-screen').textContent;
//     const choices = {
//         Classic: ['rock', 'paper', 'scissors'],
//         LordoftheRings: ['hobbit', 'elf', 'ork', 'wizard', 'human']
//     };
//     const myGame = new Game('player1', choices[gameMode]);
//     myGame.player1.choice = e.target.alt;
//     myGame.gameLoop();
//     return myGame;
// }

// function startGame(e){
//     var titleImgs = document.querySelector('.main-section-images');
//     var lotrImgs = document.querySelector('.main-section-imgLotr');
//     var header = document.querySelector('.main-section-title-screen');
//     document.querySelector('.left-section-button').classList.remove('hidden');
    
//     if (e.target.id == 'button-classic') {
//         document.querySelector('.main-section-buttons').style.display = 'none';
//         titleImgs.classList.remove('hidden');
//         header.innerHTML = "Classic";

//     }
//     if (e.target.id == 'button-lotr'){
//         document.querySelector('.main-section-buttons').style.display = 'none';
//         lotrImgs.classList.remove('hidden');
//         header.innerHTML = 'Lord of the Rings';
//     }
    
// }
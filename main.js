var images = document.querySelectorAll('.main-section-images img');
var startButtons = document.querySelectorAll('.main-section-buttons');

startButtons.addEventListener('click', (e) =>  {
    startGame(e);
});

images.addEventListener('click', (e) =>  {
    playerChoice(e);
});

function playerChoice(e) {
   var player1 = {
       choice: e.target.alt
   };
   let myGame = new game('player1');
   myGame.gameLoop();
   return player1;
}

function startGame(e){
    if (e.target.id == 'button-classic') {
        console.log("hi")
        document.querySelector('.main-section-buttons').style.display = 'none';
        document.querySelector('.main-section-images hidden').removeAttribute('hidden');
    }
}
let game;

document.getElementById('begin-game').addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
    //this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
    
});
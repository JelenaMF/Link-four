let game;
/**Listens for a click on the start button */
document.getElementById('begin-game').addEventListener('click', function(){
    game = new Game();
    game.startGame();
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
    document.getElementById('rules').style.display = 'none';
    document.getElementById('title').classList.add('title');
});
/** 
 * Listen for keyboard presses
 */
document.addEventListener('keydown', (e) => {
    game.handleKeydown(e);
});

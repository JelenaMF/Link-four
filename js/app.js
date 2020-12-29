let game;
/**Listens for a click on the start button */
document.getElementById('begin-game').addEventListener('click', function(){
    game = new Game();
    game.startGame();
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';

});
/** 
 * Listen for keyboard presses
 */
document.addEventListener('keydown', (e) => {
    console.log(e.key);
});

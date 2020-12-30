class Game {
   constructor() {
       this.board = new Board();
       this.players = this.createPlayers();
       this.ready = false;
   }
/**Returns active player 
 * @return {object} player - the active player.
 */
   get activePlayer() {
     return this.players.find(player => player.active);
   }
   /** 
 * Creates two player objects
 * @return  {Array}    An array of two Player objects.
 */
   createPlayers(){
    const players = [new Player('Player 1', 1, '#e15258', true),
                    new Player('Player 2', 2, '#e59a13')];
    return players;
   }
   /** get game ready for play 
    * initializes game
   */
   startGame() {
     /**drawing the games board  */
    this.board.drawHTMLBoard()
     /** drawing the active player with the active token */
    this.activePlayer.activeToken.drawHTMLToken();
    this.ready = true;
   }
   /**
 * Branches code, depending on what key player presses
 * @param   {Object}    e - Keydown event object
 */
   handleKeydown(e) {
      if(this.ready){
        if(e.key === 'ArrowLeft') {
          moveLeft()
        } else if (e.key === 'ArrowRight') {
          moveRight()
        } else if (e.key === 'ArrowDown') {
          //play token
        }

      }
   }
}
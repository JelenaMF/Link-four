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
    const players = [new Players('player 1', 1, '#e15258', true),
                    new Players('player 2', 2, '#e59a13')];
    return players;
   }
   /** get game ready for play 
    * initializes game
   */
   startGame() {
    this.board.drawHTMLBoard()
    this.activePlayer.activeToken.drawHTMLToken()
    this.ready = true;

   }
}
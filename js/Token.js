//object behavior tokens move right, left, down
class Token {
    constructor(index, owner) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
        this.columnLocation = 0;
    }
    get htmlToken() {
        return document.getElementById(this.id);
    }
   drawHTMLToken() {
        const token = document.createElement('div');
        document.getElementById('game-board-underlay').appendChild(token);
        token.setAttribute('id',  this.id);
        token.setAttribute('class', 'token');
        token.style.background = this.owner.color; 
       }
       /** 
 * Gets left offset of html element.
 * @return  {number}   Left offset of token object's htmlToken.
 */
    get offsetLeft() {
        return document.getElementById('token').offsetLeft;
    }       
/** 
 * Moves html token one column to left.
 */
    moveLeft() {

    }   
    /** 
 * Moves html token one column to right.
 * @param   {number}    columns - number of columns in the game board
 */
    moveRight(){

    } 
  
}


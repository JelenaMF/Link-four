//object behavior tokens move right, left, down
class Token {
    constructor(index, owner) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    }
   drawHTMLToken() {
        const tokenDIV = document.createElement('div');
        document.getElementsByID('game-board-underlay').appendChild(tokenDIV);
        tokenDIV.setAttribute('id',  this.id);
        tokenDIV.setAttribute('class', 'token');
        tokenDIV.style.display = this.owner.color; 
       }

    
  
}


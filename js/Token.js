//object behavior tokens move right, left, down
class Token {
    constructor(index, owner) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    }
   drawHTMLToken() {
        const tokenDIV = document.createElement('div');
        document.getElementsByID('game-board-underlay').appendChild(tokenDiv);
        tokenDIV.setAttribute('#tokenID',  Token.id);
        tokenDIV.setAttribute('.token', Token);
        tokenDIV.style.display = Players.color; 
       }
   htmlToken() {
    }
    get playerToken {
        return htmlToken();
    }
}


class Players {
    constructor (name, id, color, active = false) {
        this.name = name;
        this.id = id;
        this.color = color; 
        this.active = active;
        this.token = this.createToken(21);
    }
    /**
 * Creates token objects for player
 * @param     {number}    num - Number of token objects to be created
 * @returns   {Array}     An array of the newly created token objects
 */
    createToken(num) {
        const tokens  = [];

        for(let i = 0; i < num; i++) {
            let token = new Token(i, this);
            token.push(token);
        }
        return tokens;
    }
}
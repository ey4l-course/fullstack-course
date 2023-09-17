class Game{
    constructor(){
        this.$board = (new Array(9)).fill(0,0,9);
        this.$turn = "X"
        this.$wincondition = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
    }

    _Load(container){
        for (let i = 0; i < 9; i++){
            const $tile =  document.createElement('div');
            $tile.id = `tile${i}`;
            $tile.classList = 'tiles';
            $tile.addEventListener("mouseover", () => this._Hoverin($tile.id, i));
            $tile.addEventListener("mouseout", () => this._Hoverout($tile.id, i));
            $tile.addEventListener("click", () => this._move($tile.id, i));
            container.appendChild($tile);
        }
    }
    _Hoverin(tileID, ID){
            if (this.$board[ID] == 0){
            document.getElementById(tileID).textContent = this.$turn
            }
    }
    _Hoverout(tileID, ID){
        if (this.$board[ID] == 0){
            document.getElementById(tileID).textContent = ''
            }
    }
    _move(tileID, ID){
        if (this.$board[ID] == 0){
            document.getElementById(tileID).textContent = this.$turn;
            this.$board[ID] = this.$turn;
            document.getElementById(tileID).classList = 'ocupied_tiles';
            this.$turn = (this.$turn == "X" ? "O" : "X");
            this._is_win();
        }
    }
    _is_win(){
        this.$wincondition.forEach((condition) => {
            console.log("Condition[0]:", this.$board[condition[0]]);
            console.log("Condition[1]:", this.$board[condition[1]]);
            console.log("Condition[2]:", this.$board[condition[2]]);
           if (this.$board[condition[0]] == this.$board[condition[1]] && 
                this.$board[condition[1]] == this.$board[condition[2]] &&
                this.$board[condition[0] !== '0']){
                    console.log(`Player ${this.$turn} wins!!!`)
            }
            else{
                console.log("test");
            }
        })
    }
}

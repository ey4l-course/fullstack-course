class Game{
    constructor(){
        this.$cardDeck = "";
        this.$gameMode = "";
        this.$gameDiff = "";
        this.$state = "";
        this.$board = [];
        this.$deck = [];
        this.$players = [];
    }
    
    reset(){
        // Clear previous game parmeters
        this.$cardDeck = "";
        this.$gameMode = "";
        this.$gameDiff = "";
        this.$state = "";
        this.$board = [];
        this.$deck = [];
        this.$players = [];
        this.$state = "_MainMenu";
        newGameUI.openMenu("_MainMenu")  //Launch main menu UI
    }
    // Set game parameters
    setDeck(param){
        this.$cardDeck = param;
        console.log(`Deck is ${this.$cardDeck}`)
    }
    setMode(param){
        this.$gameMode = param;
        console.log(`Game mode is ${this.$gameMode}`)
    }
    setDiff(param){
        this.$gameDiff = param;
        console.log(`Difficulty level is ${this.$gameDiff}`)
    }

    //Assign players array with Player objects
    initiatePlayers(){
        if (this.$gameMode === "_Single"){
            this.$players[0] = new Player(0, true);
            this.$players[1] = new Player(1, false);
        }
        else{
            for (let i = 0; i < 2; i++){
                this.$players[i] = new Player(i, true);
            }
        }
    }

    //Initiate game -> Invoce all of the functions that are required to start a new game.
    startGame(){
        this.initiatePlayers();
        this.$players[0].startTurn();
        this.$deck = this.shuffleDeck(this.setDeckSize(this.$gameDiff), 200);
        console.log(this.$board)
        // debugger;
        // this.$board = this.$deck.map((card, index) => card = new Card(card, index));
        this.$deck.forEach((deck, index) => this.$board.push(new Card(deck, index)));
        for (let card in this.$board){
            this.$board[card].setCardImage(this.$cardDeck, newGameUI.$deckAPI)
            // debugger;
        }
        newGameUI.startGame(this.$state);
        
    }

    validateMenu(){
        let $isMenuOk = true;
        for (let keys in this){
            if (newGame[keys] === ""){
                $isMenuOk = false;
                break;
            }
        }
        if ($isMenuOk == false){
            alert("Please choose deck, mode and difficulty");
        }
        else{
            this.startGame();
        }
    }
    setDeckSize(param){
        let $decksize = 0;
        switch (param){
            case "_Beginner":
                $decksize = 16;
                break;
            case "_Advanced":
                $decksize = 36;
                break;
            case "_Expert":
                $decksize = 64;
                break;
            case "_Brainiac":
                $decksize = 100;
                break;
        }
        return $decksize;
    }
    
    shuffleDeck(size, range = 200){
        //generate a set of unique values. The size of the set is half of the deck.
        const uniqueSet = new Set();
        while (uniqueSet.size < size / 2){
            let num = Math.floor(Math.random() * range + 1);
            uniqueSet.add(num);
        }
        //Duplicate the half deck.
        const halfDeck = Array.from(uniqueSet);
        const deck = halfDeck.flatMap(x => [x, x]);

        //Use Fisher-Yates algo to to shuffle the deck.
        for (let i = deck.length - 1; i > 0; i--){
            let num = Math.floor(Math.random() * i + 1);
            [deck[i], deck[num]] = [deck[num], deck[i]];
        }
        return deck;
    }

    cardClicked(SN){
        const activePlayer = this.whichPlayer();
        // console.log(activePlayer);
        // console.log(SN);
        this.$players[activePlayer].isFirstCard(SN)
    }

    whichPlayer(){
        for (let player in this.$players){
            if (this.$players[player].$isActive === true){
                return player;
            }
        }

        // return this.$players.indexOf(player => player.$isActive === true)   //----WHY IS THIS NOT WORKING?!
    }
    endGame(player){
        alert(`Player ${player.$number} wins`); 
    }
}

class Gui{
    constructor(){
        this.$cardDeck = "";
        this.$gameMode = "";
        this.$gameDiff = "";
        // this.$cardDeck = "";
        // this.$gameMode = "";
        // this.$gameDiff = "";
    }
    
    openMenu(param){
        this.clearOldParams();
        document.getElementById(param).style.display = "block"; //Show menu
        document.getElementById("_GameBoard").style.display = "none"; //Hide board
        
        //Set deck section listeners
        const $selctDeck = document.querySelectorAll("#_ChooseDeck div");
        $selctDeck.forEach(element => {
            const $ID = element.id;
            element.addEventListener("click", () => {
                newGame.setDeck($ID);
            })
        })
        
        //Set Mode section listeners
        const $selctMode = document.querySelectorAll("#_GameMode div");
        $selctMode.forEach(element => {
            const $ID = element.id;
            element.addEventListener("click", () => {
                newGame.setMode($ID);
            })
        })
        
        //Set Difficulty section listeners
        const $selctDiff = document.querySelectorAll("#_Difficulty div");
        $selctDiff.forEach(element => {
            const $ID = element.id;
            element.addEventListener("click", () => {
                newGame.setDiff($ID);
            })
        })
        
        //Set "GO" button action
        const $goButton = document.getElementById("_StartGame");
        $goButton.addEventListener("click", () => {
            this.setGameParams(
                newGame.$cardDeck,
                newGame.$gameMode,
                newGame.$gameDiff
            )
            newGame.validateMenu();

        })
    }
    setGameParams(deck, mode, difficulty){
        switch (deck){
            case "_HP":
                this.$cardDeck = "Harry Potter";
                break;
            case "_Pokemon":
                this.$cardDeck = "Pokemon";
                break;
            case "_Flags":
                this.$cardDeck = "State flags";
                break;
        }
        this.$gameMode = (mode == "_Single" ? "Single player" : "Multi-player");
        this.$gameDiff = newGame.setDeckSize(difficulty);
    }

    startGame(){
        const boardDisplay = document.getElementById("_Game");
        document.getElementById("_MainMenu").style.display = "none"; //Hide menu
        document.getElementById("_GameBoard").style.display = "block"; //Show board
        //Set header
        document.getElementById("_GameHeader").innerHTML = `
            <h1>${this.$cardDeck} memory game</h1>
            <h2>${this.$gameMode}</h2>`
        //Set grid template according to amount of cards
            boardDisplay.style.gridTemplateColumns =
            `repeat(${Math.sqrt(this.$gameDiff)}, minmax(25px, 1fr))`
        //Initiate board
            for (let card = 0; card < this.$gameDiff; card++){
                const dealcard = document.createElement('div');
                dealcard.id = card;
                dealcard.classList = "_Card";
                dealcard.addEventListener("click", (SN) => {
                    newGame.cardClicked(card);
                });
                boardDisplay.appendChild(dealcard)
            }
        this.showTurn();
    }
    showTurn(){
        for (let player in newGame.$players){
            if (newGame.$players[player].$isActive === true){
                const active = parseInt(player);
                document.getElementById(`_P${active+1}`).style.backgroundColor = "blue";
            }else{
                const active = parseInt(player);
                document.getElementById(`_P${active+1}`).style.backgroundColor = "white";

            }
        }
    }
        updateScore(player, newScore){
        const active = parseInt(player);
        document.getElementById(`_P${active+1}`).textContent = newScore;
    }
    clearOldParams(){
        console.log("tst")
        const boardDisplay = document.getElementById("_Game");
        const cards = document.querySelectorAll("#_Game div");
        for (let card of cards){
            boardDisplay.removeChild(card);
        }
        this.$cardDeck = "";
        this.$gameMode = "";
        this.$gameDiff = "";
    }
}
    /*        const _MainMenu = document.createElement('div');
        const _ChooseDeck = document.createElement('div');
        const _HP = document.createElement('div');
        const _Pokemon = document.createElement('div');
        const _Flags = document.createElement('div');
        const _GameMode = document.createElement('div');
        const _Single = document.createElement('div');
        const _Multiple = document.createElement('div');
        const _Difficulty = document.createElement('div');
        const _Beginner = document.createElement('div');
        const _Advanced = document.createElement('div');
        const _Expert = document.createElement('div');
        const _Brainiac = document.createElement('div');
        const _StartGame = document.createElement('div');

        _MainMenu.id = "_MainMenu"
        _ChooseDeck.id = "_ChooseDeck"
        _ChooseDeck.classList = "_Menu"
        _HP.id = "_HP"
        _HP.classList = "_MenuItem"
        _HP.innerHTML = "Harry Potter"
        _Pokemon.id = "_Pokemon"
        _Pokemon.classList = "_MenuItem"
        _Pokemon.innerHTML = "Pokemon"
        _Flags.id = "_Flags"
        _Flags.classList = "_MenuItem"
        _Flags.innerHTML = "Flags"

        _GameMode.id = "_GameMode"
        _GameMode.classList = "_Menu"
        _Single.id = "_Single"
        _Single.classList = "_MenuItem"
        _Single.innerHTML = "Single player"
        _Multiple.id = "_Multiple"
        _Multiple.classList = "_MenuItem"
        _Multiple.innerHTML = "Multiplayer"
        
        _Difficulty.id = "_Difficulty"
        _Difficulty.classList = "_Menu"
        _Beginner.id = "_Beginner"
        _Beginner.classList = "_MenuItem"
        _Beginner.innerHTML = "Beginner"
        _Advanced.id = "_Advanced"
        _Advanced.classList = "_MenuItem"
        _Advanced.innerHTML = "Advanced"
        _Expert.id = "_Expert"
        _Expert.classList = "_MenuItem"
        _Expert.innerHTML = "Expert"
        _Brainiac.id = "_Brainiac"
        _Brainiac.classList = "_MenuItem"
        _Brainiac.innerHTML = "Brainiac"
        _StartGame.id = "_StartGame"

        document.body.appendChild(_MainMenu);
        _MainMenu.appendChild(_ChooseDeck);
            _ChooseDeck.appendChild(_HP);
            _ChooseDeck.appendChild(_Pokemon);
            _ChooseDeck.appendChild(_Flags);
        _MainMenu.appendChild(_GameMode);
            _GameMode.appendChild(_Single);
            _GameMode.appendChild(_Multiple);
        _MainMenu.appendChild(_Difficulty);
            _Difficulty.appendChild(_Beginner);
            _Difficulty.appendChild(_Advanced);
            _Difficulty.appendChild(_Expert);
            _Difficulty.appendChild(_Brainiac);
        _MainMenu.appendChild(_StartGame);
    }
}
*/
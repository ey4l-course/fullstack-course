class Player{
    constructor(SN, isHuman){
        this.$number = SN;
        this.$isHuman = isHuman;
        this.$score = 0;
        this.$isActive = false;
        this.$isFirstCard = true;
        this.$firstCard = 0;
    }
    startTurn(){
        this.$isActive = true;
    }
    firstCard(SN){
        this.$isFirstCard = false;
        this.$firstCard = newGame.$board[SN];
    }
    secondCard(SN){
        this.$isFirstCard = true;
        this.isMatch(SN);
    }
    isFirstCard(SN){
        newGame.$board[SN].changeCardState();
        if (this.$isFirstCard === true){
            this.firstCard(SN);
        }
        else{
            this.secondCard(SN);
        }
    }
    isMatch(SN){
        const card1 = this.$firstCard;
        const card2 = newGame.$board[SN];
        if (card1.$value === card2.$value){
            //In case of a match
            this.$score++
            newGameUI.updateScore(this.$number, this.$score);
            if (this.isGameOver() === true){
                const winner = this.checkWinner();
                console.log(winner + " " + typeof(winner)) //test
                newGame.endGame(winner);
                newGame.reset();
                return;
            }
            this.changeTurn(this.$number);
            console.log("tst not win")
        }
        else{
            // console.log(card1.$number)
            setTimeout(() => {
                newGame.$board[card1.$position].changeCardState()
                newGame.$board[card2.$position].changeCardState()
            }, 2000)
            this.changeTurn(this.$number);
        }
        
    }
    isGameOver(){
        for (let card in newGame.$board){
            if (newGame.$board[card].$state === "down"){
                return false;
            }
        }
        return true;
    }

    checkWinner(){
        return (newGame.$players[0].$score > newGame.$players[1].$score ?
            newGame.$players[0] : newGame.$players[0].$score < newGame.$players[1].$score ?
            newGame.$players[1] : "draw");
    }
    changeTurn(SN){
        if (SN === 0){
            newGame.$players[1].startTurn()
        }else{
            newGame.$players[0].startTurn()
        }
        this.$isActive = false;
        newGameUI.showTurn();
    }

    //test end game
    testEnd(){
        for (let card in newGame.$board){
            newGame.$board[card].$state = "up";
        }
    }
}
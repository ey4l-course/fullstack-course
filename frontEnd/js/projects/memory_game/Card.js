class Card{
    constructor(deck, position){
        this.$position = position;
        this.$value = deck;
        this.$state = "down";
        this.$match = false;
        this.$image = ""
    }
    changeCardState(){
        if (this.$state ==="down"){
            this.$state = "up";
            document.getElementById(this.$position).textContent = this.$value;
            return;
        }
        this.$state = "down";
        document.getElementById(this.$position).innerHTML = newGameUI.$cardDeckIMG;
    }
    setCardImageHP(){
        this.$image = ""
    }
}
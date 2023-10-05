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
    setCardImage(deck, deckAPI){
        switch (deck){
            case "_HP":
                // console.log(deckAPI)
                this.SetCardImageHP(deckAPI)
                break;
            case "_Pokemon":
                this.SetCardImagePoke(deckAPI)
                break;
            case "_flags":
                this.SetCardImageFlags(deckAPI)
                break;
        }
    }
    SetCardImageHP(deckAPI){
        console.log("This is HP " + deckAPI)
    }
    SetCardImagePoke(deckAPI){
        const req = new XMLHttpRequest;
        // alert("test")
        req.onload = function(){
            const cardobj = JSON.parse(req.responseText)
            console.log(cardobj);
            // debugger;
        }
        req.open("GET", deckAPI + this.$value);
        req.send();
    }
    SetCardImageFlags(deckAPI){
        console.log("This is flags")
    }
}
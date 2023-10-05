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
            document.getElementById(this.$position).innerHTML = `<img class="_DeckStyle" src="${this.$image}" alt="No Picture to show">`
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
    async SetCardImagePoke(deckAPI){
        // const req = new XMLHttpRequest;
        // req.onload = function(){
        //     const cardobj = JSON.parse(req.responseText)
        //     this.$image = cardobj.sprites.other.dream_world.front_default;
        //     // console.log(this.$image);
        // }
        // req.open("GET", deckAPI + this.$value);
        // req.send();
        const response = await fetch(deckAPI + this.$value);
        const cardobj = await response.json();
        console.log(cardobj.sprites.other.dream_world.front_default);
        this.$image = cardobj.sprites.other.dream_world.front_default;
    }
    SetCardImageFlags(deckAPI){
        console.log("This is flags")
    }
}
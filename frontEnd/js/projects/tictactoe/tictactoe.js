const new_game = new Game();
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById('game_container');
    new_game._Load(container);
    // console.log(new_game.$turn);
});
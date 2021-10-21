/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const startBtn = document.querySelector("#btn__reset");
const keyboard = document.getElementById("qwerty");

let game;

startBtn.addEventListener("click", () => {
  reset();
  game = new Game();
  game.startGame();
});

keyboard.addEventListener("click", (e) => {
  if (e.target.className === "key") {
    const letter = e.target.innerText;
    game.handleInteraction(letter, e.target);
    game.checkForWin();
  }
});

function reset() {
  const phraseDiv = document.querySelector("#phrase");
  const phraseUL = phraseDiv.children[0];
  phraseUL.innerHTML = ``;
  const keys = document.getElementsByClassName("key");
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    key.disabled = false;
    key.className = "key";
  }
  const heartOL = document.querySelector("#scoreboard").children[0].children;

  for (let i = 0; i < heartOL.length; i++) {
    const li = heartOL[i];
    li.innerHTML = `<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">`;
  }
}

/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = createPhrases();
    this.activePhrase = null;
  }

  getRandomPhrase() {
    const arr = this.phrases;
    const n = Math.floor(Math.random() * arr.length);
    return arr[n];
  }

  startGame() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
  }

  handleInteraction(letter, btn) {
    btn.disabled = true;
    let check = this.activePhrase.checkLetter(letter);
    if (!check) {
      btn.className = "key wrong";
      this.removeLife();
    } else {
      this.activePhrase.showMatchedLetter(letter);
    }
  }

  removeLife() {
    let ol = document.getElementById("scoreboard").children[0];
    ol.children[this.missed].innerHTML = `
    <img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30">
    `;
    this.missed++;
    if (this.missed === 5) {
      this.gameOver(false);
    }
  }

  checkForWin() {
    const hiddenLetters = document.getElementsByClassName("hide");
    if (hiddenLetters.length === 0) {
      this.gameOver(true);
    }
  }

  gameOver(bool) {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "block";
    const h1 = overlay.querySelector("h1");
    if (bool) {
      h1.innerText = "Congratulations!  You win!";
      overlay.className = "win";
    } else {
      h1.innerText = "Sorry - you lose.  Best wishes on your next attempt!";
      overlay.className = "lose";
    }
  }
}

function createPhrases() {
  let arr = [];
  arr.push(new Phrase("not i said the fly"));
  arr.push(new Phrase("merry christmas"));
  arr.push(new Phrase("i left my heart in san francisco"));
  arr.push(new Phrase("knock on wood"));
  arr.push(new Phrase("neither here nor there"));
  return arr;
}

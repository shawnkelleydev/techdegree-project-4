/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  addPhraseToDisplay() {
    const ul = document.querySelector("#phrase").children[0];
    const letters = this.phrase.split("");
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      if (letter === " ") {
        ul.insertAdjacentHTML(
          "beforeend",
          `
          <li class="space">${letter}</li>
          `
        );
      } else {
        ul.insertAdjacentHTML(
          "beforeend",
          `
          <li class="hide letter ${letter}">${letter}</li>
          `
        );
      }
    }
  }

  checkLetter(letter) {
    const phrase = this.phrase;
    let bool = false;
    if (phrase.includes(letter)) {
      bool = true;
    }
    return bool;
  }

  showMatchedLetter(letter) {
    let boxes = document.getElementsByClassName(`${letter}`);
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].className = `show letter ${letter}`;
    }
  }
}

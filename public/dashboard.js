// typing.js
const typingPhrases = [
    "I'm Backend Developer...",
    "I'm NodeJs Developer...",
    "I'm ExpressJs Developer...",
    "I'm MongoDB Developer."
];

const typingElement = document.querySelector(".typing");
let phraseIndex = 0;
let letterIndex = 0;
let currentPhrase = "";
let colors = ["#fa5af5", "#31cc3e", "crimson", "yellow"];
let currentColorIndex = 0;

function type() {
    if (letterIndex < typingPhrases[phraseIndex].length) {
        currentPhrase += typingPhrases[phraseIndex][letterIndex];
        typingElement.textContent = currentPhrase;
        typingElement.style.color = colors[currentColorIndex];
        letterIndex++;
        setTimeout(type, 60);
    } else {
        setTimeout(erase, 800);
    }
}

function erase() {
    if (letterIndex > 0) {
        currentPhrase = currentPhrase.slice(0, -1);
        typingElement.textContent = currentPhrase;
        typingElement.style.color = colors[currentColorIndex];
        letterIndex--;
        setTimeout(erase, 20);
    } else {
        phraseIndex = (phraseIndex + 1) % typingPhrases.length;
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        setTimeout(type, 300);
    }
}

setTimeout(type, 500);

let selectedCharacter = "";

function selectCharacter(character, language, story) {
    // Remove previous selection
    let cards = document.querySelectorAll(".character-card");
    cards.forEach(card => card.classList.remove("selected"));

    // Highlight new selection
    let selectedCard = document.querySelector(`[onclick="selectCharacter('${character}', '${language}', '${story}')"]`);
    selectedCard.classList.add("selected");

    // Update story box
    document.getElementById("story-box").innerHTML = `<h2>${language} Adventure</h2><p>${story}</p>`;

    // Enable Start Button
    selectedCharacter = character;
    let startBtn = document.getElementById("start-btn");
    startBtn.classList.add("active");
    startBtn.disabled = false;
}

document.getElementById("start-btn").addEventListener("click", function() {
    if (selectedCharacter) {
        alert(`You chose ${selectedCharacter}! 🚀`);
        window.location.href = "adventure-map.html"; 
    }
});

function selectCharacter(name, language, story) {
    document.getElementById("story-box").innerHTML = `<h2>${story}</h2>`;

    let startButton = document.getElementById("start-btn");
    startButton.classList.add("active"); // Adds styling
    startButton.disabled = false;

    startButton.innerHTML = `<a href="${name}.html">Start Adventure</a>`;
}

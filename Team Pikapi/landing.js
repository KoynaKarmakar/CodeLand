document.getElementById("start-btn").addEventListener("click", function() {
    this.innerText = "Loading... 🚀";
    setTimeout(() => {
        window.location.href = "character-selection.html"; // Move to next page
    }, 2000);
});

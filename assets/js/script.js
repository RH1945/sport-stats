console.log("testing");

// DOM variables
const fetchButton = document.querySelector("button");
const paragraph = document.querySelector("p");
const clickSound = new Audio("assets/media/click-345983.mp3");
const successSound = new Audio("assets/media/goodresult-82807.mp3");
successSound.volume = 0.3; // Sample very loud
clickSound.preload = "auto"; // Pre-loads the sample as it will be used alot

// Event listeners
fetchButton.addEventListener("click", fetchTeam);

// Function
function fetchTeam() {
    // Play the click sound
    clickSound.currentTime = 0; // This rewinds it if played before
    clickSound.play();

    // Delay before playing this sound
    setTimeout(() => {
        successSound.currentTime = 0;
        successSound.play();
    }, 600); // 300ms delay

    // Change the text
    paragraph.style.color = "blue";
    paragraph.style.fontSize = "5rem";
}

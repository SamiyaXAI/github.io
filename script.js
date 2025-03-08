document.addEventListener("DOMContentLoaded", function() {
    let text = "The AI Model Called ‘Me’ is Learning Fast! 🚀🤓🧠✨";
    let i = 0;
    let speed = 100; // Typing speed in milliseconds

    function typeEffect() {
        if (i < text.length) {
            document.getElementById("typing-text").textContent += text.charAt(i);
            i++;
            setTimeout(typeEffect, speed);
        }
    }

    // Clear the text and start typing effect
    document.getElementById("typing-text").textContent = "";
    typeEffect();
});

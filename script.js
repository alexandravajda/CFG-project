function pressAlert() {
    alert("Thanks for subscribing!");
}

var popup = document.getElementById("myButton").addEventListener("click",pressAlert)


const texts = [
    {
        message: "🍰New pick up service available - get your cakes fresh!🍰",
        url: "/pages/delivery-options"
    },
    {
        message: "📦Free delivery straight to your door over £40📦",
        url: "/pages/delivery-options"
    },
    {
        message: "💝Special gift wrap available for your loved ones💝",
        url: "/pages/delivery-options"
    }
];

let currentIndex = 0;
const rotatingTextElement = document.getElementById("rotating-text-element");

function updateText() {
    rotatingTextElement.style.opacity = 0;  // Fade out

    setTimeout(() => {
        rotatingTextElement.textContent = texts[currentIndex].message;
        rotatingTextElement.href = texts[currentIndex].url;
        rotatingTextElement.style.opacity = 1;  // Fade in

        currentIndex = (currentIndex + 1) % texts.length;
    }, 500);  // Match this duration with the CSS transition duration
}

setInterval(updateText, 3000);  // Change text every 3 seconds

updateText();
console.log("Running from the app.js file");

const myButton = document.getElementById("myButton");
const message = document.getElementById("message");

let numberOfClicks = 0;

if (myButton) {
  myButton.addEventListener("click", function () {
    numberOfClicks++;

    message.textContent = "Button was clicked " + numberOfClicks + " times !";
  });
}

if (message) {
  message.addEventListener("mouseover", function () {
    const random = "#" + Math.floor(Math.random() * 16777215).toString(16);

    message.style.backgroundColor = random;
  });
}

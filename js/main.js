const welcomeTitle = document.querySelector(".welcome-title");
const username = localStorage.getItem("jegukUsername");
if (username === null) {
    welcomeTitle.innerText = "Welcome to Jeguk, Anonymous";
} else {
    welcomeTitle.innerText = `Welcome to Jeguk, ${username}!`;
}
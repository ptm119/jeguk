const welcomeTitle = document.querySelector(".welcome-title");
const username = localStorage.getItem("jegukUsername");
if (username === null) {
    welcomeTitle.innerText = "Welcome to Jeguk Fansite, Anonymous";
} else {
    welcomeTitle.innerText = `Welcome to Jeguk Fansite, ${username}!`;
}
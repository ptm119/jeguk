const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector(".login-form__input");

const USERNAME_KEY = "jegukUsername";

function saveUsername(username) {
    localStorage.setItem(USERNAME_KEY, username);
}

function handleFormSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    if (username === "") {
        alert("Please write your name");
        loginInput.value = "";
    } else {
        saveUsername(username);
        loginForm.submit();
    }
}

if (localStorage.getItem(USERNAME_KEY) === null) {
    loginForm.addEventListener("submit", handleFormSubmit);
} else {
    loginForm.submit();
}


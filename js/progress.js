const form = document.querySelector(".progress");
const level = document.querySelector(".level-input");
const progress = document.querySelector(".progress-input");

function CreateLi(obj) {
    const li = document.createElement("li");
    const level = document.createElement("span");
    level.innerText = obj.level;
    const progress = document.createElement("span");
    progress.innerText = `${obj.progress}%`;
    const ul = document.querySelector(".progress__list");
    li.appendChild(level);
    li.appendChild(progress);
    ul.appendChild(li);
}

function handleFormSubmit(event) {
    event.preventDefault();
    if (level.value === "") {
        alert("Please write level name");
    } else if (progress.value === "") {
        alert("Please write your progress");
    } else if (parseInt(progress.value) > 100) {
        alert("Please write your progress again");
    } else {
        CreateLi({ level: level.value, progress: progress.value });
        level.value = "";
        progress.value = "";
    }
}

form.addEventListener("submit", handleFormSubmit);
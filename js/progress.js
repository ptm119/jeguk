const form = document.querySelector(".progress");
const level = document.querySelector(".level-input");
const progress = document.querySelector(".progress-input");

let progressArr = [];
const PROGRESS_ARR_KEY = "progress-list";

function saveProgressArr() {
    localStorage.setItem(PROGRESS_ARR_KEY, JSON.stringify(progressArr));
}

function deleteLi(event) {
    const li = event.target.parentElement;
    progressArr = progressArr.filter((item) => item.id !== parseInt(li.id));
    saveProgressArr();
    li.remove();
}

function createLi(obj) {
    const li = document.createElement("li");
    li.id = obj.id;
    const level = document.createElement("span");
    level.innerText = obj.level;
    const progress = document.createElement("span");
    progress.innerText = `${obj.progress}%`;
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete"
    deleteButton.addEventListener("click", deleteLi);
    const ul = document.querySelector(".progress__list");
    li.appendChild(level);
    li.appendChild(progress);
    li.appendChild(deleteButton);
    ul.appendChild(li);
}

function handleFormSubmit(event) {
    event.preventDefault();
    if (level.value === "") {
        alert("Please write level name");
    } else if (progress.value === "") {
        alert("Please write your progress");
    } else if (parseInt(progress.value) > 100 || parseInt(progress.value) < 0) {
        alert("Please write your progress again");
    } else {
        const progressObj = {
            level: level.value,
            progress: progress.value,
            id: Date.now()
        }
        createLi(progressObj);
        progressArr.push(progressObj);
        saveProgressArr();
        level.value = "";
        progress.value = "";

    }
}

const savedProgressArr = localStorage.getItem(PROGRESS_ARR_KEY);

if (savedProgressArr !== null) {
    progressArr = JSON.parse(savedProgressArr);
    progressArr.forEach(createLi);
}

form.addEventListener("submit", handleFormSubmit);
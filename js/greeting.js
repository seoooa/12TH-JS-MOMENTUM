const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const greetComments = ["Have a great day :)", "Have a nice day!", "Enjoy your day!", "Have a lovely day :)"];

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const todayComment = greetComments[Math.floor(Math.random() * greetComments.length)];

function paintGreetings(username) {
    greeting.innerText = `Hi ${username}! ${todayComment}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onLoginSubmit(event) {
    event.preventDefault();     //submit 했을 때 새로고침 방지
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (!savedUsername) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    paintGreetings(savedUsername);
}
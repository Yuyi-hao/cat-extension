const choices = [
    "bomp",
    "chilling",
    "eating-together",
    "eating",
    "jumping",
    "looking",
    "magic",
    "reading-witch",
    "unicorn-chill"
]

const body = document.querySelector("body");
const head = document.querySelector("head");

const img_ele = document.createElement("img");
const choice = Math.floor(Math.random()*choices.length)
img_ele.src = chrome.runtime.getURL(`images/pusheen-cat/${choices[choice]}.gif`) 
img_ele.classList.add("extension-pet-img");
body.appendChild(img_ele);

const cssLink = document.createElement("link");
cssLink.rel = "stylesheet";
cssLink.type = "text/css";
cssLink.href = chrome.runtime.getURL("style/img_style.css");
head.appendChild(cssLink);

chrome.runtime.onMessage.addListener((message, sender) => {
    if(message.state === "ON"){
        body.appendChild(img_ele);
    }
    else if(message.state === "OFF"){
        img_ele.remove();
    }
})

setInterval(() => {
    const choice = Math.floor(Math.random()*choices.length)
    img_ele.src = chrome.runtime.getURL(`images/pusheen-cat/${choices[choice]}.gif`) 
}, 10000);
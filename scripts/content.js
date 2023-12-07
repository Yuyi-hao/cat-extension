const choices = [
    "busy",
    "eating-together",
    "eating",
    "hi",
    "jumping",
    "sipping",
    "sitting",
    "slurping",
    "unicorn"
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
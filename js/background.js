const BgRefreshButton = document.getElementById("background-refresh");
const BgLockButton = document.getElementById("background-lock");
const BACKGROUNDLOCK__KEY = "backgroundLock";
const CURRENTBACKGROUND__KEY = "currentBackground";

const images = [ 
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg"
]

function paintBackgroundImage(){
    if(localStorage.getItem(CURRENTBACKGROUND__KEY)===null){
        localStorage.setItem(CURRENTBACKGROUND__KEY, 0);
    }
    const chosenNumber = (Number(localStorage.getItem(CURRENTBACKGROUND__KEY))+1)%images.length;
    localStorage.setItem(CURRENTBACKGROUND__KEY, chosenNumber)
    const chosenImage = images[chosenNumber];
    const body = document.querySelector("body");

    body.style.backgroundImage = `url("img/${chosenImage}")`;
}
function paintBackgroundHandler(){
    if(localStorage.getItem(BACKGROUNDLOCK__KEY)==="false"){
        paintBackgroundImage();
    } else {
        BgLockButton.style.animation = "shake 0.2s ease-in-out";
        setTimeout(() => {
            BgLockButton.style.animation = "none";
        }, 200);
    }
}
function BackgrondLockHandler(){
    if(localStorage.getItem(BACKGROUNDLOCK__KEY)==="false"){
        BgLockButton.title = "Click to unlock the current background";
        BgLockButton.classList.add("allow");
        localStorage.setItem(BACKGROUNDLOCK__KEY, localStorage.getItem(CURRENTBACKGROUND__KEY));
    } else {
        BgLockButton.title = "Click to lock the current background";
        BgLockButton.classList.remove("allow");
        localStorage.setItem(BACKGROUNDLOCK__KEY, "false");
    }
    
}

if(localStorage.getItem(BACKGROUNDLOCK__KEY)==="false"){
    paintBackgroundImage();
}

BgRefreshButton.addEventListener("click", paintBackgroundHandler);

if(localStorage.getItem(BACKGROUNDLOCK__KEY)===null){
    localStorage.setItem(BACKGROUNDLOCK__KEY, "false");
} else if(localStorage.getItem(BACKGROUNDLOCK__KEY)!="false"){
    BgLockButton.title = "Click to unlock the current background";
    BgLockButton.classList.add("allow");
    const chosenImage = images[Number(localStorage.getItem(BACKGROUNDLOCK__KEY))];
    const body = document.querySelector("body");

    body.style.backgroundImage = `url("img/${chosenImage}")`;
}

BgLockButton.addEventListener("click", BackgrondLockHandler);
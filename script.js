const switcher = document.querySelector("input#switch");
const background = document.querySelector("body");
const cardBg = document.querySelectorAll(".followers-card,.overview-card");
const darkModeTxt = document.querySelectorAll(".numb-of-followers,.current-stats,h1,.overview-today");
const darkModeTxtBlue = document.querySelectorAll(".total-followers,.stats,.followers,.profile-name,.mode");
const bgPattern = document.querySelector("body .background-pattern")


switcher.addEventListener("input", () => {
    background.classList.toggle("dark-bg");
    bgPattern.classList.toggle("background-pattern-dark");

    for (let i of cardBg){
    i.classList.toggle("card-dark-bg");
    i.classList.toggle("light-bg")
    }
    for (let i of darkModeTxt){
        i.classList.toggle("dark-mode-txt");
        }
        for (let i of darkModeTxtBlue){
            i.classList.toggle("dark-mode-txt-blue");
            }
});


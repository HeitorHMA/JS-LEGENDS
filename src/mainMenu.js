export default function mainMenu(){
    const gameContent = document.querySelector("#gameContent");
    gameContent.classList.add("main-menu")
    const mainTitle = document.createElement("h1");
    mainTitle.innerHTML = "JavaScript Legends";
    gameContent.appendChild(mainTitle);
    mainTitle.classList.add("main-menu-title")
}
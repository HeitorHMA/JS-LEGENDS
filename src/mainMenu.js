export default function mainMenu(){
    const gameContent = document.querySelector("#gameContent");
    gameContent.classList.add("main-menu")

    const mainTitle = document.createElement("h1");
    mainTitle.innerHTML = "JavaScript Legends";
    mainTitle.classList.add("main-menu-title")
    gameContent.appendChild(mainTitle);

    const newGameButton = document.createElement("div");
    newGameButton.innerHTML = "NIGGA GAME";
    newGameButton.classList.add("new-game-button");
    gameContent.appendChild(newGameButton);
    

}
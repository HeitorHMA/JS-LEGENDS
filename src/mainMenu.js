export default function mainMenu(){
    const gameContent = document.querySelector("#gameContent");
    gameContent.classList.add("main-menu")

    const mainTitle = document.createElement("h1");
    mainTitle.innerHTML = "JavaScript Legends";
    mainTitle.classList.add("main-menu-title")
    gameContent.appendChild(mainTitle);

    const newGameButton = document.createElement("div");
    newGameButton.innerHTML = "NEWGGA GAME";
    newGameButton.classList.add("new-game-button");
    gameContent.appendChild(newGameButton);

    const continueButton = document.createElement("div");
    continueButton.innerHTML = "CONTINIGGA";
    continueButton.classList.add("continue-button");
    gameContent.appendChild(continueButton);

    const exitButton = document.createElement("div");
    exitButton.innerHTML = "EXITIGGA";
    exitButton.classList.add("exit-button");
    gameContent.appendChild(exitButton);
    

}
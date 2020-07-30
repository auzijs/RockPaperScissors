const view = {
    displayYourChoice: function(userChoice) {
        const dipslayYourChoiceParagraph = document.getElementById("your-choice");
        if (userChoice === 1) {
            dipslayYourChoiceParagraph.textContent = "You chose Rock!";
        }

        if (userChoice === 2) {
            dipslayYourChoiceParagraph.textContent = "You chose Paper!";
        }
        
        if (userChoice === 3) {
            dipslayYourChoiceParagraph.textContent = "You chose Scissors!";
        }
    },
    displayComputerChoice: function(computerChoice) {
        const displayComputerChoiceParagraph = document.getElementById("computer-choice");
        if (computerChoice === 1) {
            displayComputerChoiceParagraph.textContent = "The computer Chose Rock!";
        }

        if (computerChoice === 2) {
            displayComputerChoiceParagraph.textContent = "The computer Chose Paper!";
        }

        if (computerChoice === 3) {
            displayComputerChoiceParagraph.textContent = "The computer Chose Scissors!";
        }
    },
    displayWhoWon: function(logicNumber) {
        const displayWhoWonParagraph = document.getElementById("who-won");
        if (logicNumber === 1) {
            displayWhoWonParagraph.textContent = "You won!";
        }

        if (logicNumber === 2) {
            displayWhoWonParagraph.textContent = "The computer won!";
        }

        if (logicNumber === 3) {
            displayWhoWonParagraph.textContent = "It was a draw!";
        }
    }
}

const buttonDiv = document.getElementById("button-div");
buttonDiv.addEventListener("click", function(event){
    if (event.target.id === "rock") {
        view.displayYourChoice(1);
        logic.game(1);
    }
    if (event.target.id === "paper") {
        view.displayYourChoice(2);
        logic.game(2);
    }
    if (event.target.id === "scissors") {
        view.displayYourChoice(3);
        logic.game(3);
    }
});

const logic = {
    game: function(userChoice) {
        const computerChoice = Math.ceil(Math.random() * 3);
        view.displayYourChoice(userChoice);
        view.displayComputerChoice(computerChoice);

        if (userChoice === computerChoice) {
            view.displayWhoWon(3);
        }

        if (userChoice === 2 && computerChoice === 1 || userChoice === 3 && computerChoice === 2 || userChoice === 1 && computerChoice === 3) {
            view.displayWhoWon(1);
        }
        if (userChoice === 1 && computerChoice === 2 || userChoice === 2 && computerChoice === 3 || userChoice === 3 && computerChoice === 1) {
            view.displayWhoWon(2);
        }
    }
}
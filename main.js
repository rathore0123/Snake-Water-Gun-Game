const prompt = require('prompt-sync')();

const SWG = ()=>{
    const choices = {
        0: "S",
        1: "W",
        2: "G"
    };
    
    let score = 0;
    
    let ranChoice = Math.floor(Math.random() * 3);
    ranChoice = (choices[ranChoice]);
    
    let userChoice = prompt(`Enter Your Choice "S" for Snake, "W" for Water "G" for Gun Please Enter Your choice in Caps `);
    
    for (let i = 0; i < 5; i++) {
    
        if (userChoice == "S" && ranChoice == "S") {
            console.log("Draw between the User and Random")
        }
        else if (userChoice == "S" && ranChoice == "G") {
            console.log("Play Again Random Wins!")
        }
        else if (userChoice == "S" && ranChoice == "W") {
            console.log("Play Again User Wins!")
            score++;
        }
        else if (userChoice == "W" && ranChoice == "W") {
            console.log("Draw between the User and Random")
        }
        else if (userChoice == "W" && ranChoice == "S") {
            console.log("Play Again Random Wins!")
        }
        else if (userChoice == "W" && ranChoice == "G") {
            console.log("Play Again User Wins!")
            score++;
        }
        else if (userChoice == "G" && ranChoice == "G") {
            console.log("Draw between the User and Random")
        }
        else if (userChoice == "G" && ranChoice == "W") {
            console.log("Play Again Random Wins!")
        }
        else if (userChoice == "G" && ranChoice == "S") {
            console.log("Play Again User Wins!")
            score++;
        }
        else {
            console.log("Please Enter a Valid choice.")
        }
    
        ranChoice = Math.floor(Math.random() * 3);
        ranChoice = (choices[ranChoice]);
        userChoice = prompt(`Enter Your Choice "S" for Snake, "W" for Water "G" for Gun Please Enter Your choice in Caps `);
    
    }
    console.log("Your Game is Ended Now Wait for Resuls");
    console.log("Loading.....");
    setTimeout(() => {
        console.log(score);
    }, 3000);
    
}

SWG();
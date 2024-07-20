#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"

// wellcome message
function printCentered(text: string, width: number = 90) {
  const lines = text.split('\n');
  lines.forEach(line => {
      const padding = Math.max(0, Math.floor((width - line.length) / 2));
      console.log(' '.repeat(padding) + chalk.bold.magenta.bgCyanBright (line));
  });
}

const text = `
******************************************************
*                                                    *
*     Welcome to the Rock-Paper-Scissors Game        *
*                                                    *
*       Get ready to challenge the Computer!         *
*                                                    *
******************************************************
`;

printCentered(text);

console.log("\n==================================================================================");
// game choices
let playAgain = 'true';
while (playAgain) {
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "start",
            message: (chalk.yellow(" Do you want to play or exit?")),
            choices: ["Play", "Exit"]
        }
    ]);
    console.log("\n==================================================================================");

    //play choose setting
    if (answer.start === "Play") {
        const game = await inquirer.prompt([

            {
                type: "list",
                name: "choices",
                message: "Select an option?",
                choices: ["rock", "paper", "scissors"]
            }
        ]);


        let option = ["rock", "paper", "scissors"];
        let random = Math.floor(Math.random() * option.length);
        let computerChoise = option[random]

        console.log("You choose:" + game.choices + " Computer choose:" + computerChoise)

        if (game.choices === "rock" && computerChoise === "scissors" || game.choices === "paper" && computerChoise === "rock" || game.choices === "ssissors" && computerChoise === "paper ") {
          console.log(chalk.yellow(`\n\t\t\t<===============>`))
          console.log(chalk.bold.red.bgYellowBright("\n\t\t\t 🎉 YOU WINS! 🎉"));
          console.log(chalk.yellow(`\n\t\t\t<===============>`))
        } else if (game.choices === computerChoise) {
          console.log(chalk.yellow(`\n\t\t\t<===============>`))
            console.log(chalk.bold.magenta.bgYellowBright("\n\t\t\t⚖️ IT'S A TIE!⚖️"));
            console.log(chalk.yellow(`\n\t\t\t<===============>`))
        } else {
          console.log(chalk.yellow(`\n\t\t\t<=====================>`))
            console.log(chalk.bold.green.bgYellowBright("\n\t\t\t 💻🎉COMPUTER WINS!🎉💻"));
            console.log(chalk.yellow(`\n\t\t\t<=====================>`))
          }


        //Exit choose setting
    } else {
        const exit = await inquirer.prompt([
            {
                type: "confirm",
                name: "response",
                message: "Are you sure you did not want to play again?",
            }
        ]);

        //If user want to start game again.
        if (exit.response === false) {
            const answer = await inquirer.prompt([
                {
                    type: "list",
                    name: "start",
                    message: "Start Your game again Press the Play button.",
                    choices: ["Play"]
                }
            ]);
            console.log("\n=================================Start game again=================================================")

            if (answer.start === "Play") {
                const game = await inquirer.prompt([

                    {
                        type: "list",
                        name: "choices",
                        message: "Select an option?",
                        choices: ["rock", "paper", "scissors"]
                    }
                ]);


                let option = ["rock", "paper", "scissors"];
                let random = Math.floor(Math.random() * option.length);
                let computerChoise = option[random]

                console.log(chalk.yellow("You choose:") + game.choices + " Computer choose:" + computerChoise)

                if (game.choices === "rock" && computerChoise === "scissors" || game.choices === "paper" && computerChoise === "rock" || game.choices === "ssissors" && computerChoise === "paper ") {
                  console.log(chalk.yellow(`\n\t\t\t<===============>`))
          console.log(chalk.bold.red.bgYellowBright("\n\t\t\t 🎉 YOU WINS! 🎉"));
          console.log(chalk.yellow(`\n\t\t\t<===============>`))
        } else if (game.choices === computerChoise) {
          console.log(chalk.yellow(`\n\t\t\t<===============>`))
            console.log(chalk.bold.magenta.bgYellowBright("\n\t\t\t⚖️ IT'S A TIE!⚖️"));
            console.log(chalk.yellow(`\n\t\t\t<===============>`))
        } else {
          console.log(chalk.yellow(`\n\t\t\t<===============>`))
            console.log(chalk.bold.green.bgYellowBright("\n\t\t\t 💻🎉COMPUTER WINS!🎉💻"));
            console.log(chalk.yellow(`\n\t\t\t<===============>`))
          }
            }
        }
        //Game Ended
        else {
          
            break
        }
    }
}
    //ending greating   
  console.log(
    chalk.green(
      `\t<===========================================================================>`
    ) + chalk.yellow(`\t<===============>`)
  );
  console.log(
    chalk.yellow(
      `\t THANKS FOR USING THIS CLI-STUDENT-MANAGEMENT-PROJECT PROGRAM CREATOR BY: =>`
    ) + chalk.blue(`\t "ZAKIA BASHIR"`)
  );
  console.log(
    chalk.green(
      `\t<==========================================================================>`
    ) + chalk.yellow(`\t<===============>`)
  );
console.log(chalk.bgMagentaBright("\n\n\t\t\t=========================  THE END ========================================= "))
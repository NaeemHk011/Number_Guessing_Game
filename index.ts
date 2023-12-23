import inquirer from "inquirer";

const systemgenratedNo = Math.floor(Math.random() * 10);


type anyType = {
    "userGuess": number
}
const answers: anyType = await inquirer.prompt([{
    type: "number",
    name: "userGuess",
    message: "Guess a Number between 1 to 10 and write it"
}]);

const { userGuess } = answers;
console.log(`Gusssed No: ${userGuess}, Correct Answer is: ${systemgenratedNo}`)
if (userGuess === systemgenratedNo) {
    console.log("Correct Answer! Congratulations Yiu Win!")
} else {
    console.log("Wrong Answer! better luck next time")
};


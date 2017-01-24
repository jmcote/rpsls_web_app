//Rock, Paper, Scissors, Lizard, Spock Web App created by Jack Cote and Lulu Gebbie
// The variables store the current player's and computer's choices
// 0 = Rock, 1 = Paper, 2 = Scissors, 3 = Lizard, 4 = Spock
var playerWins = 0;
var computerWins = 0;
var currentMatch = 1;
var playerChoice;
var computerChoice;
var whoWonMatch;
var currentTies;
// Variable to store the score
// score[0] = wins, score[1] = ties, score[2] = losses
var curMatchScore = [0,0,0];
var matchHistory = [0,0,0];
var score = [0,0,0];
function storePlayerChoice(choice) {
    playerChoice = choice;
    console.log("My choice = " + playerChoice);
}

function storeComputerChoice() {
    // Generate computer's random choice
    computerChoice = Math.floor(Math.random()*5);
    console.log("Computer choice = " + computerChoice);
}

function playGame(){
    // Here is the game ruleset algorithm
    if (playerChoice == computerChoice) {
        // We have a tie!
        console.log("tie");
        return 0;
    } else if ((playerChoice == 0 && computerChoice == 2) || (playerChoice == 0 && computerChoice == 3) || (playerChoice == 1 && computerChoice == 0) || (playerChoice == 1 && computerChoice == 4) || (playerChoice == 2 && computerChoice == 1) || (playerChoice == 2 && computerChoice == 3) || (playerChoice == 3 && computerChoice == 1) || (playerChoice == 3 && computerChoice == 4) || (playerChoice == 4 && computerChoice == 0) || (playerChoice == 4 && computerChoice == 2)){
        // Rock beats scissors - a win!
        // Rock beats lizard - a win!
        // Paper beats rock - a win!
        // Paper beats spock - a win!
        // Scissors beats paper - a win!
        // Scissors beats lizard - a win!
        // Lizard beats paper - a win!
        // Lizard beats spock - a win!
        // Spock beats rock - a win!
        // Spock beats scissors - a win!
        console.log("win");
        return 1;

    } else {
        // All other combinations are losses
        console.log("lose");
        return -1;
    }
}

function trackMatch(resultId){
    if (curMatchScore[0] + curMatchScore[1] > 2) {
      curMatchScore[0] = 0;
      curMatchScore[2] = 0;
      curMatchScore[1] = 0;
      currentMatch ++;
      curMatchScore = [0,0,0];
    }
    if (resultId == 1) {
        curMatchScore[0]++;
    }else if (resultId == -1) {
        curMatchScore[1]++;
    }else {
        curMatchScore[2]++;
    }

}

function displayGameResult(resultId){
    storeComputerChoice();
    // Define an array of text labels for the choices 0, 1, 2;
    var choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    // Now play the game and store the result
    var result = playGame();
    // Create a message for the player
    var message = "Your choice was " + choices[playerChoice] + " and the computer's choice was " + choices[computerChoice] + "<br/>";
    // Add to the base message if it was a win, loss, or tie
    trackMatch(result);
    if (result == 1) {
        // Update the score with a win
        updateScore(0);
        // Display that it was a win
        document.getElementById(resultId).innerHTML = message + "YOU WIN!";
        document.getElementById(resultId).className = "alert alert-success";
    } else if (result == -1) {
        // Update the score with a loss
        updateScore(2);
        // Display that it was a loss
        document.getElementById(resultId).innerHTML = message + "YOU LOOSE! ";
        document.getElementById(resultId).className = "alert alert-danger";
    } else {
        // Update the score with a tie
        updateScore(1);
        // Display that it was a tie
        document.getElementById(resultId).innerHTML = message + "A tie. ";
        document.getElementById(resultId).className = "alert alert-info";
    }
}

function updateScore(val){
    ++score[val];
    console.log("The score is now " + score);
}

function displayCurrentScoreBoard(winsId, lossesId, tiesId){
    document.getElementById(winsId).innerHTML = curMatchScore[0];
    document.getElementById(lossesId).innerHTML = curMatchScore[2];
    document.getElementById(tiesId).innerHTML = curMatchScore[1];

}

function displayMatchScoreBoard(winsId, lossesId, tiesId){
    document.getElementById(winsId).innerHTML = matchHistory[0];
    document.getElementById(lossesId).innerHTML = matchHistory[2];
    document.getElementById(tiesId).innerHTML = matchHistory[1];
}

function displayMasterScoreBoard(winsId, lossesId, tiesId){
    document.getElementById(winsId).innerHTML = score[0];
    document.getElementById(lossesId).innerHTML = score[2];
    document.getElementById(tiesId).innerHTML = score[1];
}

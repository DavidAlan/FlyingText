{
//  Catch Flying Text program
//  Copyright (c) 2017 David A. Freitag 
//  http://software.dafreitag.com/
//
//  This program is free software: you can redistribute it and/or modify 
//  it under the terms of the GNU General Public License as published by 
//  the Free Software Foundation, either version 3 of the License, or 
//  (at your option) any later version.
//
//  This program is distributed in the hope that it will be useful, 
//  but WITHOUT ANY WARRANTY; without even the implied warranty of 
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the 
//  GNU General Public License for more details.
//
//  To receive a copy of the GNU General Public License, see
//  <https://www.gnu.org/licenses/>.
}
function startGame() { 
    setTitleText();
    createFlyingObjects();
    render();
    resumeGame();
    //pauseGame();
    update();
}
function update() {
    //Set this update function to loop at 60 frames per second
    requestAnimationFrame(update, canvas);

    switch(gameState) {
        case PLAYING:
            playGame();
            //render();
            break;
            
        case PAUSED:
            if (endOfLevel) {
                 turnOnEndOfLevelOverlay();
            }
            break;
        //    
        case OVER: 
            levelPlusPoints [gameLevel] = playerPlusPoints;  
            levelMinusPoints[gameLevel] = playerMinusPoints; 
            calculatePoints();
            turnOnGameFinishedOverlay();
            endGame();
            gameState = STOP;
            break;
            
        case STOP: 
        default:
            break;
    }
}
function render() { 
    //Clear the previous animation frame 
    drawingSurface.clearRect(0, 0, canvas.width, canvas.height);
  
    displayFlyingObjects();
    updateScores(); 

    pageTitle   = document.getElementById("gameLevelText");
    pageTitle.innerHTML = titleText;
    
    if (endOfLevel) {
         turnOnEndOfLevelOverlay();
    }
}
function updateScores() {
    playerPlusScore.innerHTML  = playerPlusPoints;
    playerMinusScore.innerHTML = playerMinusPoints;
    playerLevelScore.innerHTML = playerPlusPoints + playerMinusPoints;
        
    var tempPlayerTotalPoints = 
              playerTotalPoints 
            + playerPlusPoints 
            + playerMinusPoints
            + playerMinusPoints;
    
    playerTotalScore.innerHTML = tempPlayerTotalPoints;
}
function playGame() {
    updateFlyingObjects();
    
    if (gameState == STOP){
        levelPlusPoints [gameLevel] = playerPlusPoints;  
        levelMinusPoints[gameLevel] = playerMinusPoints; 
        endGame();
        return;
    }
    
    if((playerPlusPoints + playerMinusPoints) >= pointsNeededToAdvanceToNextLevel) {
        levelPlusPoints [gameLevel] = playerPlusPoints;  
        levelMinusPoints[gameLevel] = playerMinusPoints; 
        
        gameLevel++;
        endOfLevel = true;
        
        if (gameLevel <= lastGameLevel) {
            setTitleText();
            initializeLevel();
            pauseGame();
            render();          
        } else {
            calculatePoints();
            turnOnGameFinishedOverlay();
            endGame();
            gameState = STOP;
        }
    } else {
        render(); 
    }
}
function endGame() {
    gameState = STOP;
    
    game.style.display="none";

    completed_game.style.display="block";

    var level0text  = document.getElementById("scoresLevel_0");
    level0text.innerHTML = 
            + levelPlusPoints[0]  + " - "
            + (levelMinusPoints[0] * -1);
    var level_1_text  = document.getElementById("scoresLevel_1");
    level_1_text.innerHTML = 
            + levelPlusPoints[1]  + " - "
            + (levelMinusPoints[1] * -1);
    var level_2_text  = document.getElementById("scoresLevel_2");
    level_2_text.innerHTML = 
            + levelPlusPoints[2]  + " - "
            + (levelMinusPoints[2] * -1);
    var level_3_text  = document.getElementById("scoresLevel_3");
    level_3_text.innerHTML = 
            + levelPlusPoints[3]  + " - "
            + (levelMinusPoints[3] * -1);
    var level_4_text  = document.getElementById("scoresLevel_4");
    level_4_text.innerHTML = 
            + levelPlusPoints[4]  + " - "
            + (levelMinusPoints[4] * -1);
    var level_5_text  = document.getElementById("scoresLevel_5");
    level_5_text.innerHTML = 
            + levelPlusPoints[5]  + " - "
            + (levelMinusPoints[5] * -1);
    var level_6_text  = document.getElementById("scoresLevel_6");
    level_6_text.innerHTML = 
            + levelPlusPoints[6]  + " - "
            + (levelMinusPoints[6] * -1);
    var level_7_text  = document.getElementById("scoresLevel_7");
    level_7_text.innerHTML = 
            + levelPlusPoints[7]  + " - "
            + (levelMinusPoints[7] * -1);
    var level_8_text  = document.getElementById("scoresLevel_8");
    level_8_text.innerHTML = 
            + levelPlusPoints[8]  + " - "
            + (levelMinusPoints[8] * -1);
    var level_9_text  = document.getElementById("scoresLevel_9");
    level_9_text.innerHTML = 
            + levelPlusPoints[9]  + " - "
            + (levelMinusPoints[9] * -1);
    var level_10_text  = document.getElementById("scoresLevel_10"); 
    level_10_text.innerHTML = 
            + levelPlusPoints[10]  + " - "
            + (levelMinusPoints[10] * -1);
    var level_11_text  = document.getElementById("scoresLevel_11");
    level_11_text.innerHTML = 
            + levelPlusPoints[11]  + " - "
            + (levelMinusPoints[11] * -1);
    var level_12_text  = document.getElementById("scoresLevel_12");
    level_12_text.innerHTML = 
            + levelPlusPoints[12]  + " - "
            + (levelMinusPoints[12] * -1);
    var level_13_text  = document.getElementById("scoresLevel_13");
    level_13_text.innerHTML = 
            + levelPlusPoints[13]  + " - "
            + (levelMinusPoints[13] * -1);
    
    var pauses_nbr  = document.getElementById("pausesNbr");
    pauses_nbr.innerHTML = numberOfPauses;
    
    var total_pauses  = document.getElementById("totalPauses");
    total_pauses.innerHTML = "Pauses during the game divided by "
            + PAUSE_FACTOR
            + " means  -" + Math.floor(numberOfPauses / PAUSE_FACTOR)
            + "  point(s) deducted from the total";

    var level_total_text1  = document.getElementById("adjustedText1");
    level_total_text1.innerHTML = "Adjusted Total Points: ";

    var level_total_text2  = document.getElementById("adjustedText2");
    level_total_text2.innerHTML = "(doubling the negatives from each level)";

    var level_total_text  = document.getElementById("scoresLevel_total");
    level_total_text.innerHTML = playerTotalPoints;
    
    
    document.getElementById("beginButton").style.display = "none";
    document.getElementById("beginLevelText").style.display = "none";
    document.getElementById("beginLevel").style.display = "none";
    document.getElementById("endLevelText").style.display = "none";
    document.getElementById("endLevel").style.display = "none";
    document.getElementById("modeTypes").style.display = "none";
    
    turnOverlayOn(2);
}
function calculatePoints() {
    console.log("\n playerTotalPoints: " + playerTotalPoints
            + "\n playerPlusPoints: " + playerPlusPoints
            + "\n playerMinusPoints: " + playerMinusPoints
            + "\n playerMinusPoints: " + playerMinusPoints   //Subtract twice to penalize player 
            + "\n Math.floor(numberOfPauses / " + PAUSE_FACTOR +"): " 
            + Math.floor(numberOfPauses / PAUSE_FACTOR)
    );
      
    //Include the last level in the totals and the number of pauses
    playerTotalPoints = 
              playerTotalPoints 
            + playerPlusPoints 
            + playerMinusPoints
            + playerMinusPoints   //Subtract twice to penalize player 
            - Math.floor(numberOfPauses / PAUSE_FACTOR);
}
function setTitleText() {
    switch(gameLevel) {
        case VARIABLES: 
            titleText = "Level " + (VARIABLES + 1) 
                    + " - Click: Good Variable Names";
            levelArray = FLYING_VARIABLES_ARRAY;
            pointsNeededToAdvanceToNextLevel = variablesToAdv;
            playerOutOfScore.innerHTML = variablesToAdv;
            break;
        case CONSTANTS: 
            titleText = "Level " + (CONSTANTS + 1)
                    + " - Click: Good Constant Names";
            levelArray = FLYING_CONSTANTS_ARRAY;
            pointsNeededToAdvanceToNextLevel = constantsToAdv;
            playerOutOfScore.innerHTML = constantsToAdv;
            break;
        case VARS_AND_CONSTANTS: 
            titleText = "Level " + (VARS_AND_CONSTANTS + 1)
                    + " - Click: Good Variables and Constant Names";
            levelArray = FLYING_VARIABLES_AND_CONSTANTS_ARRAY;
            pointsNeededToAdvanceToNextLevel = varsAndConstantsToAdv;
            playerOutOfScore.innerHTML = varsAndConstantsToAdv;
            break;
        case EXPRESSIONS: 
            titleText = "Level " + (EXPRESSIONS + 1)
                    + " - Click: Valid Expressions";
            levelArray = EXPRESSIONS_ARRAY;
            pointsNeededToAdvanceToNextLevel = expressionsToAdv;
            playerOutOfScore.innerHTML = expressionsToAdv;
            break;
        case CALLING_MODULES: 
            titleText = "Level " + (CALLING_MODULES + 1)
                    + " - Click: Valid Module Call Statements";
            levelArray = CALLING_MODULES_ARRAY;
            pointsNeededToAdvanceToNextLevel = callingModulesToAdv;
            playerOutOfScore.innerHTML = callingModulesToAdv;
            break;
        case MODULE_HEADERS: 
            titleText = "Level " + (MODULE_HEADERS + 1)
                    + " - Click: Valid Module Headers";
            levelArray = MODULE_HEADERS_ARRAY;
            pointsNeededToAdvanceToNextLevel = moduleHeadersToAdv;
            playerOutOfScore.innerHTML = moduleHeadersToAdv;
            break;
        case CALLING_FUNCTIONS: 
            titleText = "Level " + (CALLING_FUNCTIONS + 1)
                    + " - Click: Valid Function Call Statements";
            levelArray = CALLING_FUNCTIONS_ARRAY;
            pointsNeededToAdvanceToNextLevel = callingFunctionsToAdv;
            playerOutOfScore.innerHTML = callingFunctionsToAdv;
            break;
        case FUNCTION_HEADERS: 
            titleText = "Level " + (FUNCTION_HEADERS + 1)
                    + " - Click: Valid Function Headers";
            levelArray = FUNCTION_HEADERS_ARRAY;
            pointsNeededToAdvanceToNextLevel = functionHeadersToAdv;
            playerOutOfScore.innerHTML = functionHeadersToAdv;
            break;
        case MODULES_AND_FUNCTIONS: 
            titleText = "Level " + (MODULES_AND_FUNCTIONS + 1)
                    + " - Click: Mod & Function Calls & Headers";
            levelArray = MODULES_AND_FUNCTIONS_ARRAY;
            pointsNeededToAdvanceToNextLevel = modulesAndFunctionsToAdv;
            playerOutOfScore.innerHTML = modulesAndFunctionsToAdv;
            break;
        case BOOLEANS: 
            titleText = "Level " + (BOOLEANS + 1)
                    + " - Click: Boolean Expressions that Evaluate to TRUE";
            levelArray = BOOLEANS_ARRAY;
            pointsNeededToAdvanceToNextLevel = booleansToAdv;
            playerOutOfScore.innerHTML = booleansToAdv;
            break;
        case IF_STATEMENTS: 
            titleText = "Level " + (IF_STATEMENTS + 1)
                    + " - Click: Valid If Statements";
            levelArray = IF_STATEMENTS_ARRAY;
            pointsNeededToAdvanceToNextLevel = ifStatementsToAdv;
            playerOutOfScore.innerHTML = ifStatementsToAdv;
            break;
        case LOOPS: 
            titleText = "Level " + (LOOPS + 1)
                    + " - Click: Valid Loop Statements";
            levelArray = LOOPS_ARRAY;
            pointsNeededToAdvanceToNextLevel = loopsToAdv;
            playerOutOfScore.innerHTML = loopsToAdv;
            break;
        case ARRAYS: 
            titleText = "Level " + (ARRAYS + 1)
                    + " - Click: Valid Array Statements";
            levelArray = ARRAY_STATEMENTS_ARRAY;
            pointsNeededToAdvanceToNextLevel = arraysToAdv;
            playerOutOfScore.innerHTML = arraysToAdv;
            break;
        case OOP: 
            titleText = "Level " + (OOP + 1)
                    + " - Click: Valid OOP Terms";
            levelArray = OOP_STATEMENTS_ARRAY;
            pointsNeededToAdvanceToNextLevel = oopToAdv;
            playerOutOfScore.innerHTML = oopToAdv;
            break;

        default:
            titleText = "not defined";
            break;
    }   
}
function initializeLevel() {
    playerTotalPoints = 
              playerTotalPoints 
            + playerPlusPoints 
            + playerMinusPoints
            + playerMinusPoints;
    
    for (var j = 0; j < MAX_FLYING_OBJECTS; j++) {
        flyingObjectArray[j].visible = false;
        flyingObjectArray[j].y = 999; 
        flyingObjectArray[j].ySlot = 999;
    }
    
    for (var z = 0; z < MAX_FLYING_OBJECTS; z++){
        yActiveSlot[z] = false;
    }
    initializeFlyingObjects();
    
    playerPlusPoints  = 0;
    playerMinusPoints = 0;
    playerLevelPoints = 0;
}
function getRandomNumber (low, high) {
    var randomNbr = (Math.floor(Math.random() * ((high + 1) - low)) + low);
    return randomNbr;
}   
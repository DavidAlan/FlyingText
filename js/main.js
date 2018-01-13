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

    switch(gV.gameState) {
        case gC.PLAYING:
            playGame();
            //render();
            break;
            
        case gC.PAUSED:
            if (gV.endOfLevel) {
                 turnOnEndOfLevelOverlay();
            }
            break;
        //    
        case gC.OVER: 
            gV.levelPlusPoints [gV.gameLevel] = gV.playerPlusPoints;  
            gV.levelMinusPoints[gV.gameLevel] = gV.playerMinusPoints; 
            calculatePoints();
            turnOnGameFinishedOverlay();
            endGame();
            gV.gameState = gC.STOP;
            break;
            
        case gC.STOP: 
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
    pageTitle.innerHTML = gV.titleText;
    
    if (gV.endOfLevel) {
         turnOnEndOfLevelOverlay();
    }
}
function updateScores() {
    playerPlusScore.innerHTML  = gV.playerPlusPoints;
    playerMinusScore.innerHTML = gV.playerMinusPoints;
    playerLevelScore.innerHTML = gV.playerPlusPoints + gV.playerMinusPoints;
        
    var tempPlayerTotalPoints = 
          gV.playerTotalPoints 
        + gV.playerPlusPoints 
        + gV.playerMinusPoints
        + gV.playerMinusPoints;
    
    playerTotalScore.innerHTML = tempPlayerTotalPoints;
}
function playGame() {
    updateFlyingObjects();
    
    if (gV.gameState == gC.STOP){
        gV.levelPlusPoints [gV.gameLevel] = gV.playerPlusPoints;  
        gV.levelMinusPoints[gV.gameLevel] = gV.playerMinusPoints; 
        endGame();
        return;
    }
    
    if((gV.playerPlusPoints + gV.playerMinusPoints) >= gV.pointsNeededToAdvanceToNextLevel) {
        gV.levelPlusPoints [gV.gameLevel] = gV.playerPlusPoints;  
        gV.levelMinusPoints[gV.gameLevel] = gV.playerMinusPoints; 
        
        gV.gameLevel++;
        gV.endOfLevel = true;
        
        if (gV.gameLevel <= gV.lastGameLevel) {
            setTitleText();
            initializeLevel();
            pauseGame();
            render();          
        } else {
            calculatePoints();
            turnOnGameFinishedOverlay();
            endGame();
            gV.gameState = gC.STOP;
        }
    } else {
        render(); 
    }
}
function endGame() {
    gV.gameState = gC.STOP;
    
    game.style.display="none";

    completed_game.style.display="block";

    var level0text  = document.getElementById("scoresLevel_0");
    level0text.innerHTML = 
            + gV.levelPlusPoints[0]  + " - "
            + (gV.levelMinusPoints[0] * -1);
    var level_1_text  = document.getElementById("scoresLevel_1");
    var level_2_text  = document.getElementById("scoresLevel_2");
    var level_3_text  = document.getElementById("scoresLevel_3");
    var level_4_text  = document.getElementById("scoresLevel_4");
    var level_5_text  = document.getElementById("scoresLevel_5");
    var level_6_text  = document.getElementById("scoresLevel_6");
    var level_7_text  = document.getElementById("scoresLevel_7");
    var level_8_text  = document.getElementById("scoresLevel_8");
    var level_9_text  = document.getElementById("scoresLevel_9");
    var level_10_text  = document.getElementById("scoresLevel_10"); 
    var level_11_text  = document.getElementById("scoresLevel_11");
    var level_12_text  = document.getElementById("scoresLevel_12");    
    var level_13_text  = document.getElementById("scoresLevel_13");
    
    if (gC.MAX_GAME_LEVEL > 1) {
        level_1_text.innerHTML = 
            + gV.levelPlusPoints[1]  + " - "
            + (gV.levelMinusPoints[1] * -1);
    } else {
        level_1_text.innerHTML = "";
    }
    if (gC.MAX_GAME_LEVEL > 2) {
        level_2_text.innerHTML = 
            + gV.levelPlusPoints[2]  + " - "
            + (gV.levelMinusPoints[2] * -1);
    } else {
        level_2_text.innerHTML = "";
    }  
    if (gC.MAX_GAME_LEVEL > 3) {
        level_3_text.innerHTML = 
            + gV.levelPlusPoints[3]  + " - "
            + (gV.levelMinusPoints[3] * -1);
    } else {
        level_3_text.innerHTML = "";
    }       
    if (gC.MAX_GAME_LEVEL > 4) {
        level_4_text.innerHTML = 
            + gV.levelPlusPoints[4]  + " - "
            + (gV.levelMinusPoints[4] * -1);
    } else {
        level_4_text.innerHTML = "";
    }           
    if (gC.MAX_GAME_LEVEL > 5) { 
        level_5_text.innerHTML = 
            + gV.levelPlusPoints[5]  + " - "
            + (gV.levelMinusPoints[5] * -1);
    } else {
        level_5_text.innerHTML = "";
    } 
    if (gC.MAX_GAME_LEVEL > 6) { 
        level_6_text.innerHTML = 
            + gV.levelPlusPoints[6]  + " - "
            + (gV.levelMinusPoints[6] * -1);
    } else {
        level_6_text.innerHTML = "";
    } 
    if (gC.MAX_GAME_LEVEL > 7) { 
        level_7_text.innerHTML = 
            + gV.levelPlusPoints[7]  + " - "
            + (gV.levelMinusPoints[7] * -1);
    } else {
        level_7_text.innerHTML = "";
    }  
    if (gC.MAX_GAME_LEVEL > 8) { 
        level_8_text.innerHTML = 
            + gV.levelPlusPoints[8]  + " - "
            + (gV.levelMinusPoints[8] * -1);
    } else {
        level_8_text.innerHTML = "";
    }    
    if (gC.MAX_GAME_LEVEL > 9) {   
        level_9_text.innerHTML = 
            + gV.levelPlusPoints[9]  + " - "
            + (gV.levelMinusPoints[9] * -1);
    } else {
        level_9_text.innerHTML = "";
    } 
    if (gC.MAX_GAME_LEVEL > 10) {   
        level_10_text.innerHTML = 
            + gV.levelPlusPoints[10]  + " - "
            + (gV.levelMinusPoints[10] * -1);
    } else {
        level_10_text.innerHTML = "";
    }
    if (gC.MAX_GAME_LEVEL > 11) { 
        level_11_text.innerHTML = 
            + gV.levelPlusPoints[11]  + " - "
            + (gV.levelMinusPoints[11] * -1);
    } else {
        level_11_text.innerHTML = "";
    }      
    if (gC.MAX_GAME_LEVEL > 12) { 
        level_12_text.innerHTML = 
            + gV.levelPlusPoints[12]  + " - "
            + (gV.levelMinusPoints[12] * -1);
    } else {
        level_12_text.innerHTML = "";
    } 
    if (gC.MAX_GAME_LEVEL > 13) { 
        level_13_text.innerHTML = 
            + gV.levelPlusPoints[13]  + " - "
            + (gV.levelMinusPoints[13] * -1);
    } else {
        level_13_text.innerHTML = "";
    }    
    
    var pauses_nbr  = document.getElementById("pausesNbr");
    pauses_nbr.innerHTML = gV.numberOfPauses;
    
    var total_pauses  = document.getElementById("totalPauses");
    total_pauses.innerHTML = "Pauses during the game divided by "
            + gC.PAUSE_FACTOR
            + " means  -" + Math.floor(gV.numberOfPauses / gC.PAUSE_FACTOR)
            + "  point(s) deducted from the total";

    var level_total_text1  = document.getElementById("adjustedText1");
    level_total_text1.innerHTML = "Adjusted Total Points: ";

    var level_total_text2  = document.getElementById("adjustedText2");
    level_total_text2.innerHTML = "(doubling the negatives from each level)";

    var level_total_text  = document.getElementById("scoresLevel_total");
    level_total_text.innerHTML = gV.playerTotalPoints;
        
    document.getElementById("beginButton").style.display = "none";
    document.getElementById("beginLevelText").style.display = "none";
    document.getElementById("beginLevel").style.display = "none";
    document.getElementById("endLevelText").style.display = "none";
    document.getElementById("endLevel").style.display = "none";
    document.getElementById("modeTypes").style.display = "none";
    
    turnOnOverlay(2);
}
function calculatePoints() {
    console.log("\n playerTotalPoints: " + gV.playerTotalPoints
            + "\n playerPlusPoints: "  + gV.playerPlusPoints
            + "\n playerMinusPoints: " + gV.playerMinusPoints
            + "\n playerMinusPoints: " + gV.playerMinusPoints   //Subtract twice to penalize player 
            + "\n Math.floor(numberOfPauses / " + gC.PAUSE_FACTOR +"): " 
            + Math.floor(gV.numberOfPauses / gC.PAUSE_FACTOR)
    );
      
    //Include the last level in the totals and the number of pauses
    gV.playerTotalPoints = 
          gV.playerTotalPoints 
        + gV.playerPlusPoints 
        + gV.playerMinusPoints
        + gV.playerMinusPoints   //Subtract twice to penalize player 
        - Math.floor(gV.numberOfPauses / gC.PAUSE_FACTOR);
}
function setTitleText() {
    switch(gV.gameLevel) {
        case gC.LEVEL_1: 
            gV.titleText = "Level " + (gC.LEVEL_1 + 1) 
                    + " - Click: Good " + gV.levelTitle[gC.LEVEL_1];
            gV.levelArray = gV.levelArray1;
            gV.pointsNeededToAdvanceToNextLevel = gV.ToAdvanceFromLevel1;
            playerOutOfScore.innerHTML = gV.ToAdvanceFromLevel1;
            break;
        case gC.LEVEL_2: 
            gV.titleText = "Level " + (gC.LEVEL_2 + 1)
                    + " - Click: Good " + gV.levelTitle[gC.LEVEL_2];
            gV.levelArray = gV.levelArray2;
            gV.pointsNeededToAdvanceToNextLevel = gV.ToAdvanceFromLevel2;
            playerOutOfScore.innerHTML = gV.ToAdvanceFromLevel2;
            break;
        case gC.LEVEL_3: 
            gV.titleText = "Level " + (gC.LEVEL_3 + 1)
                    + " - Click: Good " + gV.levelTitle[gC.LEVEL_3];
            gV.levelArray = gV.levelArray3;
            gV.pointsNeededToAdvanceToNextLevel = gV.ToAdvanceFromLevel3;
            playerOutOfScore.innerHTML = gV.ToAdvanceFromLevel3;
            break;
        case gC.LEVEL_4: 
            gV.titleText = "Level " + (gC.LEVEL_4 + 1)
                    + " - Click: Valid " + gV.levelTitle[gC.LEVEL_4];
            gV.levelArray = gV.levelArray4;
            gV.pointsNeededToAdvanceToNextLevel = gV.ToAdvanceFromLevel4;
            playerOutOfScore.innerHTML = gV.ToAdvanceFromLevel4;
            break;
        case gC.LEVEL_5: 
            gV.titleText = "Level " + (gC.LEVEL_5 + 1)
                    + " - Click: Valid " + gV.levelTitle[gC.LEVEL_5];
            gV.levelArray = gV.levelArray5;
            gV.pointsNeededToAdvanceToNextLevel = gV.ToAdvanceFromLevel5;
            playerOutOfScore.innerHTML = gV.ToAdvanceFromLevel6;
            break;
        case gC.LEVEL_6: 
            gV.titleText = "Level " + (gC.LEVEL_6 + 1)
                    + " - Click: Valid " + gV.levelTitle[gC.LEVEL_6];
            gV.levelArray = gV.levelArray6;
            gV.pointsNeededToAdvanceToNextLevel = gV.ToAdvanceFromLevel6;
            playerOutOfScore.innerHTML = gV.ToAdvanceFromLevel6;
            break;
        case gC.LEVEL_7: 
            gV.titleText = "Level " + (gC.LEVEL_7 + 1)
                    + " - Click: Valid " + gV.levelTitle[gC.LEVEL_7];
            gV.levelArray = gV.levelArray7;
            gV.pointsNeededToAdvanceToNextLevel = gV.ToAdvanceFromLevel7;
            playerOutOfScore.innerHTML = gV.ToAdvanceFromLevel7;
            break;
        case gC.LEVEL_8: 
            gV.titleText = "Level " + (gC.LEVEL_8 + 1)
                    + " - Click: Valid " + gV.levelTitle[gC.LEVEL_8];
            gV.levelArray = gV.levelArray8;
            gV.pointsNeededToAdvanceToNextLevel = gV.ToAdvanceFromLevel8;
            playerOutOfScore.innerHTML = gV.ToAdvanceFromLevel8;
            break;
        case gC.LEVEL_9: 
            gV.titleText = "Level " + (gC.LEVEL_9 + 1)
                    + " - Click: " + gV.levelTitle[gC.LEVEL_9];
            gV.levelArray = gV.levelArray9;
            gV.pointsNeededToAdvanceToNextLevel = gV.ToAdvanceFromLevel9;
            playerOutOfScore.innerHTML = gV.ToAdvanceFromLevel9;
            break;
        case gC.LEVEL_10: 
            gV.titleText = "Level " + (gC.LEVEL_10 + 1)
                    + " - Click:  " + gV.levelTitle[gC.LEVEL_10] + gC.EXTRA_TEXT_LEVEL_10;
            gV.levelArray = gV.levelArray10;
            gV.pointsNeededToAdvanceToNextLevel = gV.ToAdvanceFromLevel10;
            playerOutOfScore.innerHTML = gV.ToAdvanceFromLevel10;
            break;
        case gC.LEVEL_11: 
            gV.titleText = "Level " + (gC.LEVEL_11 + 1)
                    + " - Click: Valid " + gV.levelTitle[gC.LEVEL_11];
            gV.levelArray = gV.levelArray11;
            gV.pointsNeededToAdvanceToNextLevel = gV.ToAdvanceFromLevel11;
            playerOutOfScore.innerHTML = gV.ToAdvanceFromLevel11;
            break;
        case gC.LEVEL_12: 
            gV.titleText = "Level " + (gC.LEVEL_12 + 1)
                    + " - Click: Valid " + gV.levelTitle[gC.LEVEL_12];
            gV.levelArray = gV.levelArray12;
            gV.pointsNeededToAdvanceToNextLevel = gV.ToAdvanceFromLevel12;
            playerOutOfScore.innerHTML = gV.ToAdvanceFromLevel12;
            break;
        case gC.LEVEL_13: 
            gV.titleText = "Level " + (gC.LEVEL_13 + 1)
                    + " - Click: Valid " + gV.levelTitle[gC.LEVEL_13];
            gV.levelArray = gV.levelArray13;
            gV.pointsNeededToAdvanceToNextLevel = gV.ToAdvanceFromLevel13;
            playerOutOfScore.innerHTML = gV.ToAdvanceFromLevel13;
            break;
        case gC.LEVEL_14: 
            gV.titleText = "Level " + (gC.LEVEL_14 + 1)
                    + " - Click: Valid " + gV.levelTitle[gC.LEVEL_14];
            gV.levelArray = gV.levelArray14;
            gV.pointsNeededToAdvanceToNextLevel = gV.ToAdvanceFromLevel14;
            playerOutOfScore.innerHTML = gV.ToAdvanceFromLevel14;
            break;

        default:
            gV.titleText = "not defined";
            break;
    }   
}
function initializeLevel() {
    gV.playerTotalPoints = 
          gV.playerTotalPoints 
        + gV.playerPlusPoints 
        + gV.playerMinusPoints
        + gV.playerMinusPoints;
    
    for (var j = 0; j < gC.MAX_FLYING_OBJECTS; j++) {
        f.flyingObjectArray[j].visible = false;
        f.flyingObjectArray[j].y = 999; 
        f.flyingObjectArray[j].ySlot = 999;
    }
    
    for (var z = 0; z < gC.MAX_FLYING_OBJECTS; z++) {
        f.yActiveSlot[z] = false;
    }
    initializeFlyingObjects();
    
    gV.playerPlusPoints  = 0;
    gV.playerMinusPoints = 0;
    gV.playerLevelPoints = 0;
}
function getRandomNumber (low, high) {
    var randomNbr = (Math.floor(Math.random() * ((high + 1) - low)) + low);
    return randomNbr;
}   
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
function clickHandler() {
    pause = !pause;
    if (pause) {
        numberOfPauses++;
        pauseGame();
    } else {
        resumeGame();
    }
}
function pauseGame() {
    document.getElementById("pauseButton").style.padding = "5px 25px 5px 25px";  // t,r,b,ld
    pauseButton.innerHTML = " Resume "; 
    gameState = PAUSED;
    pause = true;
    //console.log("---------- Paused");
}
function resumeGame() {
    document.getElementById("pauseButton").style.display = "inline-block";
    document.getElementById("pauseButton").style.padding = "5px 37px 5px 36px";  // t,r,b,l
    pauseButton.innerHTML = "Pause"; 
    gameState = PLAYING;
    pause = false;
    turnOffOverlay();
    turnOffOverlayResult();
    endOfLevel = false;
    //console.log("---------- Resuming");
}
function hidePauseButton(){
    document.getElementById("pauseButton").style.display = "none";
}
function mousedownHandler(event) { 
    //Find the mouse's x and y position
    var mouseX = event.layerX - canvas.offsetLeft;
    var mouseY = event.layerY - canvas.offsetTop;
}
function introClickHandler() {
    firstGameLevel = document.getElementById("beginLevel").options.selectedIndex;
    lastGameLevel  = document.getElementById("endLevel").options.selectedIndex;
    
    //Validate begin and end level values
    gameLevel  = firstGameLevel;
    
    if (firstGameLevel > lastGameLevel) {
        gameLevel = 0;
        firstGameLevel = 0;
        lastGameLevel = MAX_GAME_LEVEL;
    }
    
    document.getElementById("endLevel").selectedIndex = "13";

    if (document.getElementById("mode1").checked) {
        console.log("Mode: Quick");
        mode = MODE_QUICK;
        initialNbrOfFlyingObjects = 5;
        ToAdvanceFromLevel1 = 5; 
        ToAdvanceFromLevel2 = 5;
        ToAdvanceFromLevel3 = 5;
        ToAdvanceFromLevel4 = 5; 
        ToAdvanceFromLevel5 = 5;
        ToAdvanceFromLevel6 = 5;
        ToAdvanceFromLevel7 = 5;
        ToAdvanceFromLevel8 = 5;
        ToAdvanceFromLevel9 = 5;
        ToAdvanceFromLevel10 = 5;
        ToAdvanceFromLevel11 = 5;
        ToAdvanceFromLevel12 = 5;
        ToAdvanceFromLevel13 = 5;
        ToAdvanceFromLevel14 = 5;
    }
    if (document.getElementById("mode2").checked) {
        console.log("Mode: Regular");
        mode = MODE_REGULAR;
        initialNbrOfFlyingObjects = getRandomNumber(4,8);
    }
    if (document.getElementById("mode3").checked) {
        console.log("Mode: Sudden Death");
        mode = MODE_SUDDEN_DEATH;
        initialNbrOfFlyingObjects = getRandomNumber(4,8);
        if (firstGameLevel != lastGameLevel){
            ToAdvanceFromLevel1 = 7; 
            ToAdvanceFromLevel2 = 7;
            ToAdvanceFromLevel3 = 7;
            ToAdvanceFromLevel4 = 7; 
            ToAdvanceFromLevel5 = 7;
            ToAdvanceFromLevel6 = 7;
            ToAdvanceFromLevel7 = 7;
            ToAdvanceFromLevel8 = 7;
            ToAdvanceFromLevel9 = 7;
            ToAdvanceFromLevel10 = 7;
            ToAdvanceFromLevel11 = 7;
            ToAdvanceFromLevel12 = 7;
            ToAdvanceFromLevel13 = 7;
            ToAdvanceFromLevel14 = 7;
        } else {
            ToAdvanceFromLevel1 = 999; 
            ToAdvanceFromLevel2 = 999;
            ToAdvanceFromLevel3 = 999;
            ToAdvanceFromLevel4 = 999; 
            ToAdvanceFromLevel5 = 999;
            ToAdvanceFromLevel6 = 999;
            ToAdvanceFromLevel7 = 999;
            ToAdvanceFromLevel8 = 999;
            ToAdvanceFromLevel9 = 999;
            ToAdvanceFromLevel10 = 999;
            ToAdvanceFromLevel11 = 999;
            ToAdvanceFromLevel12 = 999;
            ToAdvanceFromLevel13 = 999;
            ToAdvanceFromLevel14 = 999;
        }
    }

    completed_game.style.display="none"; 
    game.style.display="block"; 
    
    turnOffOverlay();
    turnOffOverlayResult();
    
    var modeAndLevels   = document.getElementById("modeAndLevels");
    var mAndL = "";
    if ( mode == MODE_SUDDEN_DEATH) {
        mAndL = "SD levels: " + (firstGameLevel + 1) + "-" + (lastGameLevel + 1);
    }
    if (mode == MODE_REGULAR) {
        mAndL = "Regular levels: " + (firstGameLevel + 1) + "-" + (lastGameLevel + 1);
    }
    if (mode == MODE_QUICK) {
        mAndL = "Quick levels: " + (firstGameLevel + 1) + "-" + (lastGameLevel + 1);
    }
    modeAndLevels.innerHTML = mAndL;
        
    startGame();
    pauseButton.innerHTML = " Pause ";     
}

//The pause-resume button
//var pauseButton = document.querySelector("#button");
var pauseButton = document.getElementById("pauseButton");
pauseButton.style.cursor = "pointer"; 
pauseButton.addEventListener("click", clickHandler, false);
pauseButton.style.padding = "5px 25px 5px 25px";  // t,r,b,l

//The begin button
//var beginButton = document.querySelector("#beginButton");
var beginButton = document.getElementById("beginButton");
beginButton.style.cursor = "pointer";
beginButton.addEventListener("click", introClickHandler, false);
beginButton.style.padding = "5px 25px 5px 25px";  // t,r,b,l

document.addEventListener('keydown', function(event) {
    if(event.keyCode == 80) {  //The letter p
        showPraise = !showPraise;
    }
});

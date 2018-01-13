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
    gV.pause = !gV.pause;
    if (gV.pause) {
        gV.numberOfPauses++;
        pauseGame();
    } else {
        resumeGame();
    }
}
function pauseGame() {
    document.getElementById("pauseButton").style.padding = "5px 25px 5px 25px";  // t,r,b,ld
    pauseButton.innerHTML = " Resume "; 
    gV.gameState = gC.PAUSED;
    gV.pause = true;
    //console.log("---------- Paused");
}
function resumeGame() {
    document.getElementById("pauseButton").style.display = "inline-block";
    document.getElementById("pauseButton").style.padding = "5px 37px 5px 36px";  // t,r,b,l
    pauseButton.innerHTML = "Pause"; 
    gV.gameState = gC.PLAYING;
    gV.pause = false;
    turnOffOverlay();
    turnOffOverlayResult();
    gV.endOfLevel = false;
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
    gV.firstGameLevel = document.getElementById("beginLevel").options.selectedIndex;
    gV.lastGameLevel  = document.getElementById("endLevel").options.selectedIndex;
    
    //Validate begin and end level values
    if (gV.firstGameLevel > gV.lastGameLevel) {
        gV.gameLevel = 0;
        gV.firstGameLevel = 0;
        gV.lastGameLevel = gC.MAX_GAME_LEVEL;
    }
    gV.gameLevel  = gV.firstGameLevel;
    
    document.getElementById("endLevel").selectedIndex = "13";

    if (document.getElementById("mode1").checked) {
        console.log("Mode: Quick");
        gV.mode = gC.MODE_QUICK;
        gV.initialNbrOfFlyingObjects = 5;
        gV.ToAdvanceFromLevel1 = 5; 
        gV.ToAdvanceFromLevel2 = 5;
        gV.ToAdvanceFromLevel3 = 5;
        gV.ToAdvanceFromLevel4 = 5; 
        gV.ToAdvanceFromLevel5 = 5;
        gV.ToAdvanceFromLevel6 = 5;
        gV.ToAdvanceFromLevel7 = 5;
        gV.ToAdvanceFromLevel8 = 5;
        gV.ToAdvanceFromLevel9 = 5;
        gV.ToAdvanceFromLevel10 = 5;
        gV.ToAdvanceFromLevel11 = 5;
        gV.ToAdvanceFromLevel12 = 5;
        gV.ToAdvanceFromLevel13 = 5;
        gV.ToAdvanceFromLevel14 = 5;
    }
    if (document.getElementById("mode2").checked) {
        console.log("Mode: Regular");
        gV.mode = gC.MODE_REGULAR;
        gV.initialNbrOfFlyingObjects = getRandomNumber(4,8);
    }
    if (document.getElementById("mode3").checked) {
        console.log("Mode: Sudden Death");
        gV.mode = gC.MODE_SUDDEN_DEATH;
        gV.initialNbrOfFlyingObjects = getRandomNumber(4,8);
        if (gV.firstGameLevel != gV.lastGameLevel){
            gV.ToAdvanceFromLevel1 = 7;
            gV.ToAdvanceFromLevel2 = 7;
            gV.ToAdvanceFromLevel3 = 7;
            gV.ToAdvanceFromLevel4 = 7;
            gV.ToAdvanceFromLevel5 = 7;
            gV.ToAdvanceFromLevel6 = 7;
            gV.ToAdvanceFromLevel7 = 7;
            gV.ToAdvanceFromLevel8 = 7;
            gV.ToAdvanceFromLevel9 = 7;
            gV.ToAdvanceFromLevel10 = 7;
            gV.ToAdvanceFromLevel11 = 7;
            gV.ToAdvanceFromLevel12 = 7;
            gV.ToAdvanceFromLevel13 = 7;
            gV.ToAdvanceFromLevel14 = 7;
        } else {
            gV.ToAdvanceFromLevel1 = 999; 
            gV.ToAdvanceFromLevel2 = 999;
            gV.ToAdvanceFromLevel3 = 999;
            gV.ToAdvanceFromLevel4 = 999; 
            gV.ToAdvanceFromLevel5 = 999;
            gV.ToAdvanceFromLevel6 = 999;
            gV.ToAdvanceFromLevel7 = 999;
            gV.ToAdvanceFromLevel8 = 999;
            gV.ToAdvanceFromLevel9 = 999;
            gV.ToAdvanceFromLevel10 = 999;
            gV.ToAdvanceFromLevel11 = 999;
            gV.ToAdvanceFromLevel12 = 999;
            gV.ToAdvanceFromLevel13 = 999;
            gV.ToAdvanceFromLevel14 = 999;
        }
    }

    completed_game.style.display="none"; 
    game.style.display="block"; 
    
    turnOffOverlay();
    turnOffOverlayResult();
    
    var modeAndLevels = document.getElementById("modeAndLevels");
    var mAndL = "";
    if (gV.mode == gC.MODE_SUDDEN_DEATH) {
        mAndL = "SD levels: " + (gV.firstGameLevel + 1) + "-" + (gV.lastGameLevel + 1);
    }
    if (gV.mode == gC.MODE_REGULAR) {
        mAndL = "Regular levels: " + (gV.firstGameLevel + 1) + "-" + (gV.lastGameLevel + 1);
    }
    if (gV.mode == gC.MODE_QUICK) {
        mAndL = "Quick levels: " + (gV.firstGameLevel + 1) + "-" + (gV.lastGameLevel + 1);
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
    if(event.keyCode == 80) {  //The letter p shows/hides praise text
        gV.showPraise = !gV.showPraise;
    }
});

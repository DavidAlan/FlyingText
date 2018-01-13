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
//--- All things related to the flying text objects
var flyingObject = {
    x: 1100,
    y: 20,
    vx: 1,
    visible: true,
    sourceArrayElement: 999,
    text: "NULL",
    textTF: true,
    errorExplanation: "",
    alpha: 1,
    font: "normal 16px Helvetica",
    fillStyle: "white",
    textBaseline: "top",
    ySlot: 999    
};
var f = {
    ySlots: [],
    yActiveSlot: [],
    yValue: 15,
    openSlot: 0,
    flyingObjectArray: [], 
    flyingObjectColor: 1
};

for (var z = 0; z < gC.MAX_FLYING_OBJECTS; z++){
    f.ySlots[z] = f.yValue;
    f.yActiveSlot[z] = false;
    f.yValue = f.yValue + 35; 
}

var flyingObjectArea = document.getElementById("flyingObjectArea");
flyingObjectArea.style.cursor = "pointer";
flyingObjectArea.addEventListener("click", clickHandlerFlyingObjects, false);

//////////////////////////////////////////////////////////////////////////////

function clickHandlerFlyingObjects() {
    if (gV.pause) {return;}
     //Find the mouse's x and y position
    var mouseX = event.layerX - canvas.offsetLeft;
    var mouseY = event.layerY - canvas.offsetTop;
        
    //console.log("\n------------------------mouse: " + mouseX + "," + mouseY);  //???????????????
    checkForHit(mouseX, mouseY);  
}
function createFlyingObjects(){  
    for (var i = 0; i < gC.MAX_FLYING_OBJECTS; i++) {
        f.flyingObjectArray[i] = Object.create(flyingObject); 
        f.flyingObjectArray[i].sourceArrayElement = 999;     
        f.flyingObjectArray[i].font = "normal 16px Helvetica";
        f.flyingObjectArray[i].alpha = 1;
        f.flyingObjectArray[i].textBaseline = "top"; 
    }
    initializeFlyingObjects();
}
function initializeFlyingObjects(){ 
    for (var i = 0; i < gC.MAX_FLYING_OBJECTS; i++) {
        createOneFlyingObject(i);
                                                        
        if (i < gV.initialNbrOfFlyingObjects) {
            f.flyingObjectArray[i].visible = true;
            f.openSlot = getOpenSlot();
            f.flyingObjectArray[i].y = f.ySlots[f.openSlot]; 
            f.flyingObjectArray[i].ySlot = f.openSlot;
        } else {
            f.flyingObjectArray[i].visible = false; 
        }
    }
}
function createOneFlyingObject (i) {
    f.flyingObjectArray[i].x = getRandomNumber(1050, 1100); 
    f.flyingObjectArray[i].vx = getRandomNumber(1, 9) /5 * -1;
    f.flyingObjectArray[i].fillStyle = gC.FLYING_OBJECT_COLOR_1;
    getTextForSlot(gV.levelArray, i); 
    f.flyingObjectArray[i].visible = true;
}
function getOpenSlot(){
    var randomSlot = getRandomNumber(0, gC.MAX_FLYING_OBJECTS - 1);
    while (f.yActiveSlot[randomSlot]) {
        randomSlot = getRandomNumber(0, gC.MAX_FLYING_OBJECTS - 1);
    }
    f.yActiveSlot[randomSlot] = true; 
    return randomSlot;
}
function getTextForSlot(fTextArray, j){
    var randomElement = getRandomNumber(0, fTextArray.length - 1);
    var usedElement   = checkForUsedElement(randomElement);
    while (usedElement) {
        randomElement = getRandomNumber(0, fTextArray.length - 1);
        usedElement   = checkForUsedElement(randomElement);
    }
    f.flyingObjectArray[j].sourceArrayElement = randomElement;  
    
    var parts = fTextArray[randomElement].split('#', 3);  //?????????????????????undefined?
    
    f.flyingObjectArray[j].text = parts[0]; 
    f.flyingObjectArray[j].textTF = parts[1]; 
    f.flyingObjectArray[j].errorExplanation = parts[2]; 
}
function checkForUsedElement(rElement){
    for (var k = 0; k < gC.MAX_FLYING_OBJECTS; k++) {
        if (f.flyingObjectArray[k].visible) {                     
            if (f.flyingObjectArray[k].sourceArrayElement === rElement) {  
                return true;
            } else {
            }//end if
        }//end if
    }//end for
    return false;
}
function updateFlyingObjects() {
    for (var i = 0; i < gC.MAX_FLYING_OBJECTS; i++) {
        if (f.flyingObjectArray[i].visible) {
            if (f.flyingObjectArray[i].fillStyle === gC.FLYING_OBJECT_COLOR_1) {f.flyingObjectColor = 1;}
            if (f.flyingObjectArray[i].fillStyle === gC.FLYING_OBJECT_COLOR_2) {f.flyingObjectColor = 2;}
            if (f.flyingObjectArray[i].fillStyle === gC.FLYING_OBJECT_COLOR_3) {f.flyingObjectColor = 3;}

            f.flyingObjectArray[i].x = f.flyingObjectArray[i].x + f.flyingObjectArray[i].vx;

            if (f.flyingObjectArray[i].x < 2) {
                if(f.flyingObjectArray[i].textTF === "true") {  //good syntax got past
                    gV.playerMinusPoints--;
                    updateScores();
                    
                    showPopUpWindow(f.flyingObjectArray[i].x, 
                                    f.flyingObjectArray[i].y,     
                                    "Missed good syntax..... " +
                                    f.flyingObjectArray[i].text);
                    f.flyingObjectArray[i].visible = false;
                    pauseGame();  
                    hidePauseButton();
                    
                    if (gV.mode == gC.MODE_SUDDEN_DEATH) {
                        gV.errorText = f.flyingObjectArray[i].text;
                        gV.errorMessage = "You missed clicking on that...";
                        console.log("Sudden Death encountered!");
                        gV.gameState = gC.OVER;
                        return;
                    }
                } else {  //bad syntax got past them
                    //gV.playerMinusPoints++;
                }
                f.yActiveSlot[f.flyingObjectArray[i].ySlot] = false; 
                createOneFlyingObject(i);
                f.openSlot = getOpenSlot();
                f.flyingObjectArray[i].y = f.ySlots[f.openSlot]; 
                f.flyingObjectArray[i].ySlot = f.openSlot;
                activateSlot();
            }
                                                        
            //Change colors of the text
            if (f.flyingObjectArray[i].x < 500) {
                f.flyingObjectArray[i].fillStyle = gC.FLYING_OBJECT_COLOR_2;
            }
            if (f.flyingObjectArray[i].x < 100) {
                f.flyingObjectArray[i].fillStyle = gC.FLYING_OBJECT_COLOR_3;
            }
        }
    }
}
function displayFlyingObjects() {
    for(var i = 0; i < gC.MAX_FLYING_OBJECTS; i++){
        if(f.flyingObjectArray[i].visible){
                                                    //console.log("displayFlyingObjects i=" + i
                                                    //    + "  y=" + f.flyingObjectArray[i].y
                                                    //);
            drawingSurface.globalAlpha = f.flyingObjectArray[i].alpha;
            drawingSurface.font = f.flyingObjectArray[i].font;  

            if (f.flyingObjectArray[i].fillStyle === gC.FLYING_OBJECT_COLOR_1) {f.flyingObjectColor = 1;}
            if (f.flyingObjectArray[i].fillStyle === gC.FLYING_OBJECT_COLOR_2) {f.flyingObjectColor = 2;}
            if (f.flyingObjectArray[i].fillStyle === gC.FLYING_OBJECT_COLOR_3) {f.flyingObjectColor = 3;}
                
            switch(f.flyingObjectColor) {
                case 1: default:
                    drawingSurface.fillStyle = gC.FLYING_OBJECT_COLOR_1;
                    break;
                case 2: 
                    drawingSurface.fillStyle = gC.FLYING_OBJECT_COLOR_2;
                    break;
                case 3: 
                    drawingSurface.fillStyle = gC.FLYING_OBJECT_COLOR_3;
                    break;
            }
            drawingSurface.textBaseline = f.flyingObjectArray[i].textBaseline;
            drawingSurface.fillText(f.flyingObjectArray[i].text, 
                                    f.flyingObjectArray[i].x, 
                                    f.flyingObjectArray[i].y);  
        }
        drawingSurface.globalAlpha = 1;
    }
}
function checkForHit(xPos,yPos){
    var yTop, yBot, xLeft, xRight;
    for (var i = 0; i < gC.MAX_FLYING_OBJECTS; i++) {
        if (f.flyingObjectArray[i].visible) {
            yTop   = f.flyingObjectArray[i].y - 6;  
            yBot   = f.flyingObjectArray[i].y + 25;
            
            xLeft   = f.flyingObjectArray[i].x - 5;
            xRight  = f.flyingObjectArray[i].x  
                    + (f.flyingObjectArray[i].text.length * 15);
            
            if (yPos >= yTop
             && yPos <= yBot
             && xPos >= xLeft
             && xPos <= xRight) {
                if(f.flyingObjectArray[i].textTF === "true") {  //clicked on good syntax
                    gV.playerPlusPoints++;
                    f.flyingObjectArray[i].visible = false; 
                    f.yActiveSlot[f.flyingObjectArray[i].ySlot] = false;                                                    
                    createOneFlyingObject(i);
                    f.openSlot = getOpenSlot();
                    f.flyingObjectArray[i].y = f.ySlots[f.openSlot]; 
                    f.flyingObjectArray[i].ySlot = f.openSlot;
                    if (getRandomNumber(0,1) === 1) {
                        activateSlot();
                    }
                    turnOnOverlayResult(xPos, yPos);
                    break;
                } else {  //clicked on bad syntax
                    gV.playerMinusPoints--;
                    updateScores();
                    showPopUpWindow(f.flyingObjectArray[i].x, 
                                    f.flyingObjectArray[i].y,     
                                    f.flyingObjectArray[i].errorExplanation);
                    pauseGame();  
                    hidePauseButton();
                    if (gV.mode == gC.MODE_SUDDEN_DEATH) {
                        gV.errorText = f.flyingObjectArray[i].text;
                        gV.errorMessage = f.flyingObjectArray[i].errorExplanation;
                        console.log("Sudden Death encountered!");
                        gV.gameState = gC.OVER;  
                        return;
                    }
                }
            }
        }
    }
}
function activateSlot(){
    for (var j = 0; j < gC.MAX_FLYING_OBJECTS; j++) {
        if (!f.flyingObjectArray[j].visible) {
            createOneFlyingObject(j);
            f.openSlot = getOpenSlot();
            f.flyingObjectArray[j].y = f.ySlots[f.openSlot]; 
            f.flyingObjectArray[j].ySlot = f.openSlot;
            break;
        }
    }
}
function toString(fObject) {
    var str = "--------------------------------\n" +
    "x:       " + fObject.x + "\n" +
    "y:       " + fObject.y + "\n" +
    "vx:      " + fObject.vx + "\n" +
    "text:    " + fObject.text + "\n" +
    "textTF:  " + fObject.textTF + "\n" +
    "ySlot:   " + fObject.ySlot + "\n" +   
    "visible: " + fObject.visible + "\n" +
    "sourceArrayElement: " + fObject.sourceArrayElement + "\n" +

    "--------------------------------";
    
    return str;
}

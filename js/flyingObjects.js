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
var flyingObject =
{
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
var MAX_FLYING_OBJECTS = 17;

var Y_SLOTS = [];
var yActiveSlot = [];
var yValue  = 15;

for (var z = 0; z < MAX_FLYING_OBJECTS; z++){
    Y_SLOTS[z] = yValue;
    yActiveSlot[z] = false;
    yValue = yValue + 35; 
}
var openSlot;

var flyingObjectArray = [];

var flyingObjectColor = 1;
var FLYING_OBJECT_COLOR_1 = "white";
var FLYING_OBJECT_COLOR_2 = "yellow"; 
var FLYING_OBJECT_COLOR_3 = "hotPink";

var flyingObjectArea = document.getElementById("flyingObjectArea");
flyingObjectArea.style.cursor = "pointer";
flyingObjectArea.addEventListener("click", clickHandlerFlyingObjects, false);

//////////////////////////////////////////////////////////////////////////////

function clickHandlerFlyingObjects() {
    if (pause) {return;}
     //Find the mouse's x and y position
    var mouseX = event.layerX - canvas.offsetLeft;
    var mouseY = event.layerY - canvas.offsetTop;
        
    //console.log("\n------------------------mouse: " + mouseX + "," + mouseY);  //???????????????
    checkForHit(mouseX, mouseY);  
}
function createFlyingObjects(){  
    for (var i = 0; i < MAX_FLYING_OBJECTS; i++) {
        flyingObjectArray[i] = Object.create(flyingObject); 
        flyingObjectArray[i].sourceArrayElement = 999;     
        flyingObjectArray[i].font = "normal 16px Helvetica";
        flyingObjectArray[i].alpha = 1;
        flyingObjectArray[i].textBaseline = "top"; 
    }
    initializeFlyingObjects();
}
function initializeFlyingObjects(){ 
    for (var i = 0; i < MAX_FLYING_OBJECTS; i++) {
        createOneFlyingObject(i);
                                                        
        if (i < initialNbrOfFlyingObjects) {
            flyingObjectArray[i].visible = true;
            openSlot = getOpenSlot();
            flyingObjectArray[i].y = Y_SLOTS[openSlot]; 
            flyingObjectArray[i].ySlot = openSlot;
        } else {
            flyingObjectArray[i].visible = false;
        }
        //if (flyingObjectArray[i].visible) {                     // DEBUG CODE 
        //    console.log(toString(flyingObjectArray[i]));
        //}
    }
}
function createOneFlyingObject (i) {
    flyingObjectArray[i].x = getRandomNumber(1050, 1100); 
    flyingObjectArray[i].vx = getRandomNumber(1, 9) /5 * -1;
    flyingObjectArray[i].fillStyle = FLYING_OBJECT_COLOR_1;
    getTextForSlot(levelArray, i); 
    flyingObjectArray[i].visible = true;
}
function getOpenSlot(){
    var randomSlot = getRandomNumber(0,MAX_FLYING_OBJECTS - 1);
    while (yActiveSlot[randomSlot]) {
        randomSlot = getRandomNumber(0,MAX_FLYING_OBJECTS - 1);
    }
    yActiveSlot[randomSlot] = true;
    return randomSlot;
}
function getTextForSlot(fTextArray, j){
    var randomElement = getRandomNumber(0,fTextArray.length - 1);
    var usedElement   = checkForUsedElement(randomElement);
    while (usedElement) {
        randomElement = getRandomNumber(0,fTextArray.length - 1);
        usedElement   = checkForUsedElement(randomElement);
    }
    flyingObjectArray[j].sourceArrayElement = randomElement;  
    
    var parts = fTextArray[randomElement].split('#', 3);
    
    flyingObjectArray[j].text = parts[0]; 
    flyingObjectArray[j].textTF = parts[1]; 
    flyingObjectArray[j].errorExplanation = parts[2]; 
}
function checkForUsedElement(rElement){
    for (var k = 0; k < MAX_FLYING_OBJECTS; k++) {
        if (flyingObjectArray[k].visible) {                     
            if (flyingObjectArray[k].sourceArrayElement === rElement) {  
                return true;
            } else {
            }//end if
        }//end if
    }//end for
    return false;
}
function updateFlyingObjects() {
    for (var i = 0; i < MAX_FLYING_OBJECTS; i++) {
        if (flyingObjectArray[i].visible) {
            if (flyingObjectArray[i].fillStyle === FLYING_OBJECT_COLOR_1) {flyingObjectColor = 1;}
            if (flyingObjectArray[i].fillStyle === FLYING_OBJECT_COLOR_2) {flyingObjectColor = 2;}
            if (flyingObjectArray[i].fillStyle === FLYING_OBJECT_COLOR_3) {flyingObjectColor = 3;}

            flyingObjectArray[i].x = flyingObjectArray[i].x + flyingObjectArray[i].vx;

            if (flyingObjectArray[i].x < 2) {
                if(flyingObjectArray[i].textTF === "true") {  //good syntax got past
                    playerMinusPoints--;
                    updateScores();
                    
                    showPopUpWindow(flyingObjectArray[i].x, 
                                    flyingObjectArray[i].y,     
                                    "Missed good syntax..... " +
                                    flyingObjectArray[i].text);
                    flyingObjectArray[i].visible = false;
                    pauseGame();  
                    hidePauseButton();
                    
                    if (mode == MODE_SUDDEN_DEATH) {
                        console.log("Sudden Death encountered!");
                        gameState = OVER;
                        return;
                    }
                } else {  //bad syntax got past them
                    //playerMinusPoints++;
                }
                yActiveSlot[flyingObjectArray[i].ySlot] = false; 
                createOneFlyingObject(i);
                openSlot = getOpenSlot();
                flyingObjectArray[i].y = Y_SLOTS[openSlot]; 
                flyingObjectArray[i].ySlot = openSlot;
                activateSlot();
            }
                                                        
            //Change colors of the text
            if (flyingObjectArray[i].x < 500) {
                flyingObjectArray[i].fillStyle = FLYING_OBJECT_COLOR_2;
            }
            if (flyingObjectArray[i].x < 100) {
                flyingObjectArray[i].fillStyle = FLYING_OBJECT_COLOR_3;
            }
        }
    }
}
function displayFlyingObjects() {
    for(var i = 0; i < MAX_FLYING_OBJECTS; i++){
        if(flyingObjectArray[i].visible){
                                                    //console.log("displayFlyingObjects i=" + i
                                                    //    + "  y=" + flyingObjectArray[i].y
                                                    //);
            drawingSurface.globalAlpha = flyingObjectArray[i].alpha;
            drawingSurface.font = flyingObjectArray[i].font;  

            if (flyingObjectArray[i].fillStyle === FLYING_OBJECT_COLOR_1) {flyingObjectColor = 1;}
            if (flyingObjectArray[i].fillStyle === FLYING_OBJECT_COLOR_2) {flyingObjectColor = 2;}
            if (flyingObjectArray[i].fillStyle === FLYING_OBJECT_COLOR_3) {flyingObjectColor = 3;}
                
            switch(flyingObjectColor) {
                case 1: default:
                    drawingSurface.fillStyle = FLYING_OBJECT_COLOR_1;
                    break;
                case 2: 
                    drawingSurface.fillStyle = FLYING_OBJECT_COLOR_2;
                    break;
                case 3: 
                    drawingSurface.fillStyle = FLYING_OBJECT_COLOR_3;
                    break;
            }
            drawingSurface.textBaseline = flyingObjectArray[i].textBaseline;
            drawingSurface.fillText(flyingObjectArray[i].text, 
                                    flyingObjectArray[i].x, 
                                    flyingObjectArray[i].y);  
        }
        drawingSurface.globalAlpha = 1;
    }
}
function checkForHit(xPos,yPos){
    var yTop, yBot, xLeft, xRight;
    for (var i = 0; i < MAX_FLYING_OBJECTS; i++) {
        if (flyingObjectArray[i].visible) {
            yTop   = flyingObjectArray[i].y - 6;  
            yBot   = flyingObjectArray[i].y + 25;
            
            xLeft   = flyingObjectArray[i].x - 5;
            xRight  = flyingObjectArray[i].x  
                    + (flyingObjectArray[i].text.length * 15);
            
            if (yPos >= yTop
             && yPos <= yBot
             && xPos >= xLeft
             && xPos <= xRight) {
                if(flyingObjectArray[i].textTF === "true") {  //clicked on good syntax
                    playerPlusPoints++;
                    flyingObjectArray[i].visible = false; 
                    yActiveSlot[flyingObjectArray[i].ySlot] = false;                                                    
                    createOneFlyingObject(i);
                    openSlot = getOpenSlot();
                    flyingObjectArray[i].y = Y_SLOTS[openSlot]; 
                    flyingObjectArray[i].ySlot = openSlot;
                    if (getRandomNumber(0,1) === 1) {
                        activateSlot();
                    }
                    turnOnOverlayResult(xPos, yPos);
                    break;
                } else {  //clicked on bad syntax
                    playerMinusPoints--;
                    updateScores();
                    showPopUpWindow(flyingObjectArray[i].x, 
                                    flyingObjectArray[i].y,     
                                    flyingObjectArray[i].errorExplanation);
                    pauseGame();  
                    hidePauseButton();
                    if (mode == MODE_SUDDEN_DEATH) {
                        console.log("Sudden Death encountered!");
                        gameState = OVER;  
                        return;
                    }
                }
            }
        }
    }
}
function activateSlot(){
    for (var j = 0; j < MAX_FLYING_OBJECTS; j++) {
        if (!flyingObjectArray[j].visible) {
            createOneFlyingObject(j);
            openSlot = getOpenSlot();
            flyingObjectArray[j].y = Y_SLOTS[openSlot]; 
            flyingObjectArray[j].ySlot = openSlot;
            break;
        }
    }
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
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

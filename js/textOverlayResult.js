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
function turnOnOverlayResult(xPos, yPos) {
    if (!showPraise) return;
    var CONGRATS_TEXT_ARRAY = 
        ["Well Done!"
        ,"Good Job!"    
        ,"Good Work!"
        ,"Fabulous!"    
        ,"That's right!"    
        ,"Wow! Nice!"    
        ,"Wow!"    
        ,"Nice!"    
        ,"Good Work!"    
        ,"Fantastic!"    
        ,"Good eye!" 
        ,"You got this!"    
        ,"You got it!"    
        ,"Superstar!"
        ,"Legendary!"
        ,"Wonderful!"
        ,"Excellent!"
        ,"Tremendous!"
        ,"Marvelous!"
        ,"Amazing!"
        ,"Brilliant!"
        ,"Great!"
        ,"Correct!"
        ,"Clever!"
        ,"Mad Skills!"    
        ,"Awesome!"
        ,"UR Great!"
        ,"UR Awesome!"
        ,"UR Fantastic!"
        ,"Playah!"
        ,"Gnarly!"
        ,"Killer!"
        ,"U Rule!"
        ,"U Rock!"
        ,"Thrillville!"
        ,"UR on Fleek!"
        ,"On Fleek!"
        ,"UR Lit!"
        ,"UR Trill!"
        ,"Cool!"
        ,"UR GOAT!"
        ,"Respect!"
        ,"Respek!"
        ,"FR!"
        ,"For Real!"
        ,"UR High Key!"
        ,"V Good!"
        ,"Very Good!"
        ,"On Fire!"
        ,"UR on Fuego!"
        ,"Bees Knees!"
        ,"All Gravy!"
        ,"Shiny!"
        ,"Money, Baby!"
        ,"Not Shabby!"
        ,"Sweet!"
        ,"UR Hot!"
        ,"UR da Bomb!"
        ,"Shiznay!"
        ,"Gold!"
        ,"Luminous!"
        ,"Strizzy!"
        ,"Golden!"
        ,"Sick!"
        ,"Butter!"
        ,"Beastly!"
        ,"All Net!"
        ,"Masterful!"
        ,"Ultra Sweet!"
        ,"Ultra Sick!"
        ,"Mega Money!"
        ,"Mega Good!"
        ,"That's Fine!"
        ,"Wassup!"
        ,"UR da Boss!"
        ,"You Bad!"
        ,"Bodacious!"
        ,"Aced it!"
        ,"Aces!"
        ,"Radical!"
        ,"Burp!"
        ,"Blinding!"
        ,"Scrummy!"
        ];    
    
    text = CONGRATS_TEXT_ARRAY[getRandomNumber(1, CONGRATS_TEXT_ARRAY.length - 1)];
    
    var overlayText = document.getElementById("overlayTextResult");
    
    var xx = Math.floor(xPos - 60);
    var yy = Math.floor(550 - yPos); 

    overlayText.style.left = xx + 'px';
    overlayText.style.bottom = yy + 'px';
    
    overlayText.innerHTML = text;     
        
    overlayText.style.display = "block";
    startTimerResult();
}
function turnOnEndOfLevelOverlay() {
    text = "Congratulations! You have finished the level.<br><br>"
         + "Click the Resume button to start this next level.";
         
    var overlayText = document.getElementById("overlayTextResult");
    
    overlayText.style.left = '400px';
    overlayText.style.bottom = '300px';
    
    overlayText.innerHTML = text;     
        
    overlayText.style.display = "block";
}
function turnOffOverlayResult() {
    document.getElementById("overlayTextResult").style.display = "none";
}
function hideMessage() {
    document.getElementById("overlayTextResult").style.display="none"; 
}
function startTimerResult() {
    var tim = window.setTimeout("hideMessage()", 500);  // 5000 milliseconds = 5 seconds
}
/*
#overlayText{
    position: absolute; 
    top: 45%;
    left: 55%;
    font-size: 20px;
    color: white;
    transform: translate(-50%,-50%);
    -ms-transform: translate(-50%,-50%);
    
    -webkit-box-shadow: 5px 5px 5px rgba(0, 0, 0, 10.5);
    -moz-box-shadow: 5px 5px 5px rgba(0, 0, 0, 10.5);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 10.5);

    padding: 20px;
    margin-bottom: 20px;
    border: 3px solid black;    
}
*/
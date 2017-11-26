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
function turnOnOverlay(textNbr) {
    var text = "TBD";
    switch(textNbr){
        case 1: 
        default:
            text = "Welcome!<br><br>" 
            + "Can you identify correct pseudocode syntax?<br>"
            + "Do you know the difference between variables and constants?<br><br>"
            + "Play this game to test your knowledge!<br><br>"
            + "-----------------------------------------------------------------------------------------<br><br>"
            + "-1 for letting a good statement go by; -2 for clicking on bad syntax.<br>"
            + "And the more you pause the game, the more your score is reduced.<br>"
            + "<br>"
            + "Choose from the options below and, when you are ready, <br>"
            + "click the Begin button to start the game.";
            break;
        case 2: 
            if (mode === MODE_SUDDEN_DEATH){
                text = "Congratulations on surviving for at least a little while!<br><br>" 
                + "Note your score below and try to beat it.<br><br>"
                + "Refresh the screen to play again.";
                
            } else {
                text = "Congratulations!<br><br>" 
                + "Note your score below and try to beat it.<br><br>"
                + "Refresh the screen to play again.";
            }
            break;
    }
    
    var overlayText = document.getElementById("overlayText");
    overlayText.innerHTML = text;
    
    document.getElementById("overlay").style.display = "block";
}
function turnOffOverlay() {
    document.getElementById("overlay").style.display = "none";
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
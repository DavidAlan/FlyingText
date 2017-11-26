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
function displayIntroScreen() {
    
    var startLevelText  = document.getElementById("beginLevelText");
    startLevelText.innerHTML = "First level: ";
    
    var endLevelText  = document.getElementById("endLevelText");
    endLevelText.innerHTML = "Last level: ";
    
    document.getElementById("endLevel").selectedIndex = "13";
    
    turnOnOverlay(1);     
}

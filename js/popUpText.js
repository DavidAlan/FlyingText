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
//var popup = document.getElementById("myPopup");
function showPopUpWindow(xPos, yPos, line1) {
    popup = document.getElementById("myPopup");
    var x = xPos - 750;
    var y = 610 - yPos; 
    
    popup.style.marginLeft   = x + "px";
    popup.style.marginBottom = y + "px";
    popup.textContent   = line1; 
    
    popup.classList.toggle("show");    
    resumeGame();
}
/************************************************************************/
/* Popup container */
/*
.popup {
    position: relative;
    display: block;
    cursor: pointer;
}
*/
/* The actual popup (appears on top) */
/*
.popup .popuptext {
    visibility: hidden;
    width: 300px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 8px 0;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    margin-left: -80px;
    margin-bottom: 300px;
    font-size: 16px;
}
*/
/* Popup arrow */
/*
.popup .popuptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
}
*/
/* Toggle this class when clicking on the popup container (hide and show the popup) */
/*
.popup .show {
    visibility: visible;
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 1s
}
*/
/* Add animation (fade in the popup) */
/*
@-webkit-keyframes fadeIn {
    from {opacity: 0;} 
    to {opacity: 1;}
}

@keyframes fadeIn {
    from {opacity: 0;}
    to {opacity:1 ;}
}
 */
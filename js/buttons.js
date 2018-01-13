/* 
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
*/

*
{
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;   /* emulogic;  */
    padding: 0px;
    margin: 0px;
}

h1
{
    text-align: center;
    font-size: 32px;
    color: #FFBF00;
    padding-bottom: 10px;

    text-shadow: 3px 3px black;

    -webkit-text-stroke: 1px #000;
    -moz-text-stroke: 1px #000;
    text-stroke: 1px #000;
}

p
{
    text-align: left;
    font-size: 18px;
    padding-bottom: 10px;
    color: #FFBF00;  /* orange */
}

button
{
    font-size: 24px;
    color: #FFBF00;
    padding: 5px 10px;
    border: 2px solid lime;

    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;	
    background: black;

    -webkit-user-select: none;
    -moz-user-select: none;   
}

button:hover
{
    background-color: #FFBF00;
    color: #000;
}

button:active
{
    background-color: #9e7606;    
    color: #000;
}

#game 
{
    margin: 10px auto;  
    width: 1200px;  
    height: 750px; /*  auto;  */
    padding: 15px;
    border: black;  

    background:-webkit-linear-gradient(300deg, #588063, #000);
    background:-moz-linear-gradient(top, #588063, #000);
    background: linear-gradient(top, #588063, #000);

    -webkit-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);

    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;	
}

#stage
{
    margin: 0px 0px; /* auto;  */
    width: 1200px;
    height: 600px;
    position: relative;

    -webkit-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);

    margin-bottom: 20px;
    border: 1px solid lime;
}

#text
{
    text-align: left;
    font-size: 14px;
    padding-bottom: 10px;
    color: #FFBF00;  /* orange */   
}

.modeAndLevels
{
    position: relative;
    height: 18px;
    top:   35px;
    left:   30px;   /*1410 */
    width: 170px;
    font-size: 16px;
    color: #FFBF00;  /* orange */   
}

.flyingObjectArea {
    position: absolute;
    height: 600px;
    top:    1px;
    left:   1px;
    width:  1200px;
    font-size: 16px;
    color: yellow;   
}

.messages {
    position: absolute;
    height: 69px;
    top:   700px;
    left:   280px;
    width: 701px;
    font-size: 24px;
    color: rgb(12, 13, 12);
}

#overlayText{
    position: absolute; 
    top: 40%; /*  45%;  */
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
#overlayTextResult{
    position: absolute;  
    color: white;
       
    background:-webkit-linear-gradient(300deg, #588063, #000);
    background:-moz-linear-gradient(top, #588063, #000);
    background: linear-gradient(top, #588063, #000);
    
    -webkit-box-shadow: 5px 5px 5px rgba(0, 0, 0, 10.5);
    -moz-box-shadow: 5px 5px 5px rgba(0, 0, 0, 10.5);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 10.5);

    padding: 20px;
    margin-bottom: 20px;
    border: 3px solid black;
}
/************************************************************************/

#completed_game 
{
    margin: 10px auto;  
    width: 1200px;  
    height: 750px; /*  auto;  */
    padding: 15px;
    border: black;  

    background:-webkit-linear-gradient(300deg, #588063, #000);
    background:-moz-linear-gradient(top, #588063, #000);
    background: linear-gradient(top, #588063, #000);

    -webkit-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);

    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;	
}

#completed_stage
{
    margin: 0px 0px; /* auto;  */
    width: 1200px;
    height: 600px;
    position: relative;

    -webkit-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);

    margin-bottom: 20px;
    border: 1px solid lime;
}


/************************************************************************/

/* Popup container */
.popup {
    position: relative;
    display: block;
    /*display: inline-block; */
    cursor: pointer;
}

/* The actual popup (appears on top) */
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

/* Popup arrow */
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

/* Toggle this class when clicking on the popup container (hide and show the popup) */
.popup .show {
    visibility: visible;
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 1s
}

/* Add animation (fade in the popup) */
@-webkit-keyframes fadeIn {
    from {opacity: 0;} 
    to {opacity: 1;}
}

@keyframes fadeIn {
    from {opacity: 0;}
    to {opacity:1 ;}
}

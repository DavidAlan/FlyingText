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
var gameLevel = 0;
var firstGameLevel = 0;
var lastGameLevel = 13;
var levelArray = [];    //Array used to fly in text
var pointsNeededToAdvanceToNextLevel = 3;  //replaced by level

var mode = MODE_REGULAR;

var gameState = PAUSED;

var titleText = "Not Defined Yet"; //The Level number and name 

//The canvas and its drawing surface
var canvas = document.querySelector("canvas");
var drawingSurface = canvas.getContext("2d");
canvas.style.display= 'block';
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

var pause = true;

var playerPlusPoints  = 0;
var playerMinusPoints = 0;
var playerLevelPoints = 0;
var playerTotalPoints = 0; 

var numberOfPauses = 0;

var initialNbrOfFlyingObjects = 5;

var levelTitle = "";  
var levelPlusPoints  = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var levelMinusPoints = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];

//Score needed to advance to next level
var variablesToAdv = 20; 
var constantsToAdv = 20;
var varsAndConstantsToAdv = 20;
var expressionsToAdv = 20; 
var callingModulesToAdv = 20;
var moduleHeadersToAdv = 20;
var callingFunctionsToAdv = 20;
var functionHeadersToAdv = 20;
var modulesAndFunctionsToAdv = 20;
var booleansToAdv = 20;
var ifStatementsToAdv = 20;
var loopsToAdv = 20;
var arraysToAdv = 20;
var oopToAdv = 20;

//---------------------------------------------------------------------------

var completedOutput = document.querySelector("#completed_game"); 

//---------------------------------------------------------------------------
var popup = document.getElementById("myPopup");

var pageTitle   = document.getElementById("gameLevelText");
pageTitle.innerHTML = titleText;

var playerPlusScore  = document.getElementById("playerPlusScore");
var playerMinusScore = document.getElementById("playerMinusScore");
var playerLevelScore = document.getElementById("playerLevelScore");
var playerTotalScore = document.getElementById("playerTotalScore");
var playerOutOfScore = document.getElementById("playerOutOfScore");

playerPlusScore.innerHTML = playerPlusPoints;
playerMinusScore.innerHTML = playerMinusPoints;
playerLevelScore.innerHTML = playerPlusPoints + playerMinusPoints;
playerTotalScore.innerHTML = playerTotalPoints;
playerOutOfScore.innerHTML = 0;
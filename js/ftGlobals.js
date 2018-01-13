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

//Global Constants ------------------------------------------
var gC = {
    TITLE: "Pseudocode - v6", //Displays on the browser tab
    CANVAS_WIDTH: 1200, 
    CANVAS_HEIGHT: 600, 

    //Game states
    PLAYING: 0,
    PAUSED: 1,
    OVER: 2,
    STOP: 3,

    //Game Levels
    LEVEL_1: 0,
    LEVEL_2: 1,
    LEVEL_3: 2,
    LEVEL_4: 3,
    LEVEL_5: 4,
    LEVEL_6: 5,
    LEVEL_7: 6,
    LEVEL_8: 7,
    LEVEL_9: 8,
    LEVEL_10: 9,
    LEVEL_11: 10,
    LEVEL_12: 11,
    LEVEL_13: 12,
    LEVEL_14: 13,

    EXTRA_TEXT_LEVEL_10: " that evaluate to True",

    //Game Modes
    MODE_QUICK: 0,
    MODE_REGULAR: 1,
    MODE_SUDDEN_DEATH: 2,

    //Miscellaneous Constants
    MAX_GAME_LEVEL: 13,  //13
    PAUSE_FACTOR: 4,

    MAX_FLYING_OBJECTS: 17,

    FLYING_OBJECT_COLOR_1: "white",
    FLYING_OBJECT_COLOR_2: "yellow", 
    FLYING_OBJECT_COLOR_3: "hotPink",

    WELCOME_MESSAGE: "Welcome!<br><br>" 
    + "Can you identify correct pseudocode syntax?<br>"
    + "Do you know the difference between variables and constants?<br><br>"
    + "Play this game to test your knowledge!<br><br>"
    + "<HR / ><br>"
    + "Lose points for letting a good statement go by or for clicking on <br> "
    + "bad syntax. And the more you pause the game, the more your score is "
    + "reduced."
    + "<br><br>"
    + "When playing, press the letter 'p' to to toggle Praise on or off.<br>"
    + "<br>"
    + "Choose from the options below and, when you are ready, <br>"
    + "click the Begin button to start the game."
    + "<br><br>"
    + "If clicking does not work, try adjusting the browser's zoom settings."
}

// Global Variables -------------------------------------------------
var gV = {
    gameLevel: 0,
    endOfLevel: false,
    showPraise: true,
    firstGameLevel: 0,
    lastGameLevel: gC.MAX_GAME_LEVEL,
    
    pointsNeededToAdvanceToNextLevel: 3,  //replaced by level
    
    textMessage: "not defined",
    errorText: "not defined",
    errorMessage: "not defined",
    
    gameState: gC.PAUSED,
    mode: gC.MODE_REGULAR,

    playerPlusPoints: 0,
    playerMinusPoints: 0,
    playerLevelPoints: 0,
    playerTotalPoints: 0,  

    pause: true,
    numberOfPauses: 0,

    initialNbrOfFlyingObjects: 5,

    titleText: "Not Defined Yet",   //The Level number and name 

    levelArray: [],     //Array used to fly in text
    levelArray1: [],
    levelArray2: [],
    levelArray3: [],
    levelArray4: [],
    levelArray5: [],
    levelArray6: [],
    levelArray7: [],
    levelArray8: [],
    levelArray9: [],
    levelArray10: [],
    levelArray11: [],
    levelArray12: [],
    levelArray13: [],

    levelTitle: [],  
    levelPlusPoints:  [0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    levelMinusPoints: [0,0,0,0,0,0,0,0,0,0,0,0,0,0],

    //Score needed to advance to next level
    ToAdvanceFromLevel1: 20, 
    ToAdvanceFromLevel2: 20,
    ToAdvanceFromLevel3: 20,
    ToAdvanceFromLevel4: 20, 
    ToAdvanceFromLevel5: 20,
    ToAdvanceFromLevel6: 20,
    ToAdvanceFromLevel7: 20,
    ToAdvanceFromLevel8: 20,
    ToAdvanceFromLevel9: 20,
    ToAdvanceFromLevel10: 20,
    ToAdvanceFromLevel11: 20,
    ToAdvanceFromLevel12: 20,
    ToAdvanceFromLevel13: 20,
    ToAdvanceFromLevel14: 20,
}

//HTML-related fields ----------------------------------------------------
//The canvas and its drawing surface
var canvas = document.querySelector("canvas");
var drawingSurface = canvas.getContext("2d");
canvas.style.display= 'block';
canvas.width = gC.CANVAS_WIDTH;
canvas.height = gC.CANVAS_HEIGHT;

var completedOutput = document.querySelector("#completed_game"); 

var popup = document.getElementById("myPopup");

var pageTitle   = document.getElementById("gameLevelText");
pageTitle.innerHTML = gV.titleText;

var playerPlusScore  = document.getElementById("playerPlusScore");
var playerMinusScore = document.getElementById("playerMinusScore");
var playerLevelScore = document.getElementById("playerLevelScore");
var playerTotalScore = document.getElementById("playerTotalScore");
var playerOutOfScore = document.getElementById("playerOutOfScore");

playerPlusScore.innerHTML  = gV.playerPlusPoints;
playerMinusScore.innerHTML = gV.playerMinusPoints;
playerLevelScore.innerHTML = gV.playerPlusPoints + gV.playerMinusPoints;
playerTotalScore.innerHTML = gV.playerTotalPoints;
playerOutOfScore.innerHTML = 0;

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
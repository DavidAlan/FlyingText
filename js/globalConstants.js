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
var CANVAS_WIDTH = 1200; 
var CANVAS_HEIGHT = 600; 

//Game states
var PLAYING = 0;
var PAUSED = 1;
var OVER = 2;
var STOP = 3;

//Game Levels
var LEVEL_1 = 0;
var LEVEL_2 = 1;
var LEVEL_3 = 2;
var LEVEL_4 = 3;
var LEVEL_5 = 4;
var LEVEL_6 = 5;
var LEVEL_7 = 6;
var LEVEL_8 = 7;
var LEVEL_9 = 8;
var LEVEL_10 = 9;
var LEVEL_11 = 10;
var LEVEL_12 = 11;
var LEVEL_13 = 12;
var LEVEL_14 = 13;

var EXTRA_TEXT_LEVEL_10 = " that evaluates to True";

//Game Modes
var MODE_QUICK = 0;
var MODE_REGULAR = 1;
var MODE_SUDDEN_DEATH = 2;

//Miscellaneous Constants
var MAX_GAME_LEVEL = LEVEL_14;
var PAUSE_FACTOR = 4;
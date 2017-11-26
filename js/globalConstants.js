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
var VARIABLES = 0;
var CONSTANTS = 1;
var VARS_AND_CONSTANTS = 2;
var EXPRESSIONS = 3;
var CALLING_MODULES = 4;
var MODULE_HEADERS = 5;
var CALLING_FUNCTIONS = 6;
var FUNCTION_HEADERS = 7;
var MODULES_AND_FUNCTIONS = 8;
var BOOLEANS = 9;
var IF_STATEMENTS = 10;
var LOOPS = 11;
var ARRAYS = 12;
var OOP = 13;

//Game Modes
var MODE_QUICK = 0;
var MODE_REGULAR = 1;
var MODE_SUDDEN_DEATH = 2;

//Miscellaneous Constants
var MAX_GAME_LEVEL = OOP;
var PAUSE_FACTOR = 4;
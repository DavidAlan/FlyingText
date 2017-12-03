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

levelTitle[LEVEL_12] = "Loops";
var LEVEL_12_ARRAY = 
        ["Do#true#na" 
       ,"While (wantsToContinue)#true#na"    
       
       ,"While (counter < 10)#true#na"    
       ,"While counter > 0#true#na"    
       ,"While NOT playerDead#true#na"    
       ,"While NOT salariedEmployee#true#na"    
       ,"While salariedEmployee#true#na"    
       ,"While ((x > 0) AND (x < 100))#true#na"    
       ,"While wizards == 0#true#na"    
       ,"While employees > 99#true#na"    
       ,"While dogs == 0#true#na"    
       ,"While (dogs == 0)#true#na"    
       ,"While coins == 0#true#na"    
       ,"While coins > 10000#true#na"    
       ,"While goldCoins > 1#true#na"    
       ,'While (getYorN("Again?"))#true#na'
       ,"While (x != 0)#true#na"    
       ,"While (x == 0)#true#na"    
       ,"While studyTime > minRequired#true#na"    
       ,"While class == FUN#true#na"    
       ,"While thisClassIsFun#true#na"    

       ,"While 147#false#147 is not a condition to be tested"    
       ,"While True OR False#false#While WHAT is true or false?"
       ,"While (True)#false#Don't do this. Change your design."
       ,"While (True and maybe False)#false#maybe is not code"
       ,"While (could be True)#false#could be is not code"
       ,"While ((x > 0) AND (x < 100)#false#Missing )"    
       ,"While coins = 0#false#= should be = ="
       ,"While playerIsAlive = True#false#Booleans are not compareed to T or F"
       ,"While coins are True#false#The word 'are' is not code"
       ,"While#false#Where is the condition?"
       ,"While#false#Where is the condition?"
       ,'While (getYorN("Again?"#false#Missing )'
       ,'While this is a great class#false#This is not code'
       ,"While (True)#false#Possible infinite loop. Don't code like this"
       ,"While (False)#false#Possible infinite loop. Don't code like this"
       ,"While readinGTexTBooK#false#The variable is not camelCase"
       ,"While Studying()#false#The function is not camelCase"
       ,"While dogs = 0#false#= should be = ="    
       ,"While (dogs = 0)#false#= should be = ="    
       ,"While goldCoins > #false#Missing condition"    
        ];

shuffle(LEVEL_12_ARRAY);
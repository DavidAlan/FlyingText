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

gV.levelTitle[gC.LEVEL_5] = "Module Call Statements";
gV.levelArray5 = 
        ["displayOutput()#true#na" 
       ,"displayOutput(names)#true#na"    
       ,"displayOutput(names, points)#true#na"    
       ,"showOutput()#true#na"    
       ,"showOutput(TRUE)#true#na"    
       ,'showString("Name?")#true#na'
       ,'calculateAnswer()#true#na'
       ,'determineAnswer(myArray)#true#na'
       ,'callCaptainKirk(SPOCK, dangerValue)#true#na'
       ,'contactBones(KIRK)#true#na'
       ,'castSpell(mySpell)#true#na'
       ,'solveMystery(sherlockHolmes)#true#na'
       ,'beAwesome("YOU")#true#na'
       ,'x(xxxxxx)#true#na'
       ,'displaySponge(BOB)#true#na'
       ,'getGoodGrades(STUDY)#true#na'
       ,'learnMaterial(readTheTextbook)#true#na'
       ,'writeSong(taylorSwift)#true#na'
       ,'displayAwesomeGraphic()#true#na'
       ,'transformData(data)#true#na'
       ,'captureTiger(HOBBS)#true#na'
    
       ,"DisplayOutput()#false#Not camelCase"    
       ,"DisplayOutput(names)#false#Not camelCase"    
       ,"Xxx()#false#Not camelCase"    
       ,"NBR_OF_ORCS = 3#false#Not a calling statement"    
       ,'newValue = getInteger("enter data")#false#This calls a function'    
       ,"x = 4#false#This is an expression"    
       ,"4 = x + 1#false#Cannot assign a value to a number"    
       ,"x++#false#This is an expression"    
       ,"countDownCounter--#false#This is an expression"    
       ,"showOUTPUT#false#Not camelCase. Missing ()"    
       ,"x = getOutput()#false#This is a function"    
       ,'newValue = getString("Name?")#false#This is a function'
       ,'newValue = getReal("Number?")#false#This is a function'
       ,'calculateAnswer#false#Missing ()'
       ,'determineAnswer(myArray))#false#Extra )'
       ,'calcAnswer until done#false#Not pseudocode'
       ,'x = determineAnswer(myArray)#false#This is a function'
       ,'return newValue#false#This is not a calling statement'
       ,'Module shootAlienShip()#false#This is a Module Header'
       ,'Module displayOutput()#false#This is a Module Header'
       ,'Module showOutput()#false#This is a Module Header'
       ,'Module Integer displayOutput()#false#This is an invalid Module Header'
       ,'Function Integer getInteger(String message)#false#This is an invalid Module Header'
        ];

gV.levelArray5 = shuffle(gV.levelArray5);

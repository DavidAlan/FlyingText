//  Catch Flying Text program
//  Copyright (c) 2017 David A. Freitag 
//  http://software.dafreitagC.com/
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

gV.levelTitle[gC.LEVEL_7] = "Function Call Statements";
gV.levelArray7 = 
        ["x = calculateOutput( )#true#na" 
       ,"newValue = calcOutput(names)#true#na"    
       ,"x = displayOutput(names, points)#true#na"    
       ,'newValue = getInteger("enter data")#true#na'    
       ,"playerAlive = doBattle( )#true#na"    
       ,"playerAlive = calcHealthValue(FALSE)#true#na"    
       ,"x = getOutput()#true#na"    
       ,'newValue = getString("Name?")#true#na'
       ,'newText = getString(enterMsg)#true#na'
       ,'oldText = getString( )#true#na'
       ,'newValue = getReal("Number?")#true#na'
       ,'newArray = determineAnswer(myArray)#true#na'
       ,'callMade = callCaptainKirk(SPOCK, dangerValue)#true#na'
       ,'successful = castSpell(mySpell)#true#na'
       ,'complete = finishJob(forMoney)#true#na'
       ,'sleepTime = nap(tenMinutes)#true#na'
       ,'done = displayAwesomeGraphic( )#true#na'
       ,'newForm = transformData(data)#true#na'
       ,'newZooAnimal = captureTiger(HOBBS)#true#na'
    
       ,"newValue == calcOutput()#false#== should be ="    
       ,"DisplayOutput(names)#false#Not camelCase"    
       ,"Xxx()#false#Not camelCase"    
       ,"NBR_OF_ORCS = 321#false#Not camelCase"    
       ,"x = 77#false#This is an expression"    
       ,"4 = x + 1#false#This is an invalid expression"    
       ,"x++#false#This is an expression"    
       ,"countDownCounter--#false#This is an expression"    
       ,"calculateOUTPUT#false#Not camelCase and missing ( )"    
       ,"playerAlive = calcHealthValue#false#Missing ( )"    
       ,'answer = calculateAnswer#false#Missing ( )'
       ,'newArray == determineAnswer(myArray)#false#== should be ='
       ,'x = calcAnswer until done#false#Not proper pseudocode'
       ,'9 = determineAnswer(myArray)#false#Cannot value assign to a number'
       ,'return newValue#false#Not a calling statement'
       ,'NEWzooAnimal = captureTiger(HOBBS)#false#variable not camelCase'
       ,'Function void shootAlienShip( )#false#This is an invalid function header'
       ,'Function null displayOutput( )#false#This is an invalid function header'
       ,'Function nothing showOutput( )#false#This is an invalid function header'
       ,'Module Integer displayOutput( )#false#This is an invalid module header'
        ];

gV.levelArray7 = shuffle(gV.levelArray7);
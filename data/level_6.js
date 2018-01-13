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

gV.levelTitle[gC.LEVEL_6] = "Module Headers";
gV.levelArray6 = 
        ["Module displayOutput()#true#na" 
       ,"Module displayOutput(String names)#true#na"    
       ,"Module displayOutput(String names, Integer points)#true#na"    
       ,"Module showOutput()#true#na"    
       ,"Module showOutput(Boolean isAlive)#true#na"    
       ,'Module showString(String x)#true#na'
       ,'Module calculateAnswer()#true#na'
       ,'Module determineAnswer(String myArray)#true#na'
       ,'Module callCaptainKirk(String SPOCK)#true#na'
       ,'Module castSpell(Integer mySpell)#true#na'
       ,'Module displayAwesomeGraphic()#true#na'
       ,'Module transformData(Real data)#true#na'
       ,'Module captureTiger(String HOBBS)#true#na'
       ,'Module displayOutput()#true#na'
       ,'Module showOutput()#true#na'
       ,'Module getGoodGrades(Integer studyMore)#true#na'
       ,'Module earnA(Real doHomework)#true#na'       
       ,'Module getGoodJob(String learnLots)#true#na'       
       ,'Module study(Real EXAMPLES)#true#na'       
    
       ,"Module DisplayOutput()#false#Not camelCase"
       ,"Module DisplayOutput(names)#false#Not camelCase, no varType in parameter"
       ,"Module Xxx()#false#Not camelCase"    
       ,"Module NBR_OF_ORCS = 3#false#Not camelCase and its a mess"    
       ,'FUNCTION getInteger("enter data")#false#Invalid function header'    
       ,"FUNCTION void getInteger('enter data')#false#Invalid function header"
       ,"x = 4#false#This is an expression"
       ,"4 = x + 1#false#This is an expression"    
       ,"x++#false#This is an expression"
       ,"countDownCounter--#false#This is an expression"    
       ,"showOUTPUT#false#Not camelCase"    
       ,"Module x = getOutput()#false#This is a mess"    
       ,'Module String getString("Name?")#false#Not a module header'
       ,'Module Real getReal("Number?")#false#Not a module header'
       ,'Module calculateAnswer#false#Missing ( )'
       ,'Module determineAnswer(myArray))#false#Extra ), no varType in parameter'
       ,'Module void calcAnswer#false#void is invalid in a module header'
       ,'Module determineAnswer#false#Missing ( )'
       ,'return newValue#false#This is a return statement'
       ,'MODULE shootAlienShip()#false#MODULE should be Module'
       ,'Module Integer displayOutput()#false#Not a module header'
       ,'Function Integer getInteger(String message)#false#Not a module header'
       ,'Module getGoodGrades(studyMore)#false#Missing varType in parameter'
       ,'Module earnA(doHomework)#false#Missing varType in parameter'
       ,'Module getGoodJob(learnLots)#false#Missing varType in parameter'
        ];

gV.levelArray6 = shuffle(gV.levelArray6);
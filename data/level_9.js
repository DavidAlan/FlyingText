
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

gV.levelTitle[gC.LEVEL_9] = "Modules and Functions";
gV.levelArray9 = 
        ["x = calculateOutput( )#true#na" 
       ,"newValue = calcOutput(names)#true#na"    
       ,"displayOutput(names, points)#true#na"    
       ,'newValue = getInteger("enter data")#true#na'    
       ,"playerAlive = doBattle( )#true#na"    
       ,"playerAlive = calcHealthValue(FALSE)#true#na"    
       ,"x = getOutput( )#true#na"    
       ,'newValue = getString("Name?")#true#na'
       ,'newValue = getReal("Number?")#true#na'
       ,'newArray = determineAnswer(myArray)#true#na'
       ,'callMade = callCaptainKirk(SPOCK, dangerValue)#true#na'
       ,'succssful = castSpell(mySpell)#true#na'
       ,'done = displayAwesomeGraphic()#true#na'
       ,'newForm = transformData(data)#true#na'
       ,'newZooAnimal = captureTiger(HOBBS)#true#na'
       ,'Function Integer getInteger(String message)#true#na'
       ,'Function String getString(String message)#true#na'
       ,'displaySponge(BOB)#true#na'
       ,'getGoodGrades(study)#true#na'
       ,'learnCoding(readTheTextbook)#true#na'
       ,'writeNewSong(taylorSwift)#true#na'
       
       ,"displayOutput(names)#true#na"    
       ,"displayOutput(names, points)#true#na"    
       ,"showOutput()#true#na"    
       ,"showOutput(TRUE)#true#na"    
       ,'showString("Name?")#true#na'
       ,'calculateAnswer()#true#na'
       ,'determineAnswer(myArray)#true#na'
       ,'callCaptainKirk(SPOCK, dangerValue)#true#na'
       ,'castSpell(mySpell)#true#na'
       ,'displayAwesomeGraphic( )#true#na'
       ,'transformData(data)#true#na'
       ,'captureTiger(HOBBS)#true#na'
       
       ,"Function Integer calculateOutput( )#true#na" 
       ,"Function Boolean calcOutput(String names)#true#na"    
       ,"Function Real displayOutput(String names, Real points)#true#na"    
       ,"Function Integer determineValues( )#true#na"    
       ,"Function Boolean validateInput()#true#na"    
       ,'Function String getString(String msg)#true#na'
       ,'Function Real getReal(String message)#true#na'
       ,'Function Integer calcAnswer(Real myArray)#true#na'
       ,'Function Integer transformData(Real data)#true#na'
       ,'Function Boolean shootAlienShip( )#true#na'
       ,'Function String getOutput( )#true#na'
       ,'Function Real determineOutput()#true#na'
       ,'Function Integer getInteger(String message)#true#na'
    
       ,"Module displayOutput( )#true#na" 
       ,"Module displayOutput(String names)#true#na"    
       ,"Module displayOutput(String names, Real points)#true#na"    
       ,"Module showOutput( )#true#na"    
       ,"Module showOutput(Boolean isDead)#true#na"    
       ,'Module showString(String x)#true#na'
       ,'Module calculateAnswer( )#true#na'
       ,'Module determineAnswer(Real myArray)#true#na'
       ,'Module callCaptainKirk(Boolean SPOCK)#true#na'
       ,'Module castSpell(Integer mySpell)#true#na'
       ,'Module displayAwesomeGraphic( )#true#na'
       ,'Module transformData(Real data)#true#na'
       ,'Module captureTiger(String HOBBS)#true#na'
       ,'Module displayOutput( )#true#na'
       ,'Module showOutput( )#true#na'
       ,'Module getGoodGrades(Integer studyMore)#true#na'
       ,'Module earnA(Real doHomework)#true#na'       
       ,'Module getGoodJob(String learnLots)#true#na'       
       ,'Module study(Real EXAMPLES)#true#na' 
        
       ,"Module displayOutput(message)#false#Missing varType for parameter" 
       ,"newValue == calcOutput()#false#== should be ="    
       ,"DisplayOutput(names)#false#Not camelCase, Missing varType for parameter"    
       ,"Xxx()#false#Not camelCase"
       ,"NBR_OF_ORCS = 321#false#Not camelCase"
       ,"nbrEmps = Y#false#This is an expression"
       ,"5 = w + 1#false#This is an expression"  
       ,"x++#false#This is an expression"
       ,"doomsdayCounter--#false#This is an expression"
       ,"calculateOUTPUT#false#Not camelCase and missing ( )"
       ,"playerAlive = calcHealthValue#false#Missing ( )"
       ,'showString("Name?"))#false#Extra ), Missing varType for parameter'
       ,'calculateAnswer( ) - x#false#This is an expression'
       ,'answer = calculateAnswer#false#Missing ( )'
       ,'newArray == determineAnswer(myArray)#false#== should be =, Missing varType for parameter'
       ,'x = calcAnswer until done#false#This is an invalid expression'
       ,'2x = doubleValue(originalValue)#false#This is an invalid expression'
       ,'return newValue#false#This is a return statement'
       ,'NEWzooAnimal = captureTiger(HOBBS)#false#Not camelCase'
       ,'Function void shootAlienShip( )#false#void is invalid in a function header'
       ,'Function null displayOutput( )#false#null is invalid in a function header'
       ,'Function nothing showOutput( )#false#nothing is invalid in a function header'
       ,'Module Integer displayOutput( )#false#Integer is invalid in a module header'
       ,'Module String getString( )#false#String is invalid in a module header'
       ,'Module Integer getInteger( )#false#Integer is invalid in a module header'
       ,'Module Boolean getYorN( )#false#Boolean is invalid in a module header'
       ,'Function getString( )#false#Missing returnVariableType'
       ,'Function Integer getInteger(String message)#false#Not a module header'
       ,'Module getGoodGrades(studyMore)#false#Missing varType for parameter'
       ,'Module earnA(doHomework)#false#Missing varType for parameter'
       ,'Module getGoodJob(learnLots)#false#Missing varType for parameter'
       ,'Module earnA(doHomework)#false#Missing varType for parameter'  
        ];

gV.levelArray9 = shuffle(gV.levelArray9);
gV.levelArray9 = shuffle(gV.levelArray9);
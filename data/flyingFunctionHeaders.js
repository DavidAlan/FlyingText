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

levelTitle[FUNCTION_HEADERS] = "Function Headers";
var FUNCTION_HEADERS_ARRAY = 
        ["Function Integer calculateOutput()#true#na" 
       ,"Function Boolean calcOutput(names)#true#na"    
       ,"Function Real displayOutput(names, points)#true#na"    
       ,"Function Integer determineValues()#true#na"    
       ,"Function Boolean validateInput()#true#na"    
       ,'Function String getString(String msg)#true#na'
       ,'Function Real getReal(String message)#true#na'
       ,'Function Integer calcAnswer(Integer myArray)#true#na'
       ,'Function Integer transformData(Real data)#true#na'
       ,'Function Boolean shootAlienShip()#true#na'
       ,'Function String getOutput()#true#na'
       ,'Function Real determineOutput()#true#na'
       ,'Function Integer getInteger(String message)#true#na'
    
       ,"Function DisplayOutput()#false#Missing returnVariableType"
       ,"Function Void getOutput(names)#false#Void is not valid in a function header"
       ,"Module Xxx()#false#Not a function"
       ,"Function NBR_OF_ORCS = 3#false#Not a function header"
       ,'FUNCTION getInteger("enter data")#false#Missing returnVariableType'
       ,'FUNCTION void getInteger("enter data")#false#Missing returnVariableType'
       ,"test = x#false#This is an expression"    
       ,"66 = x + 1#false#This is an invalid expression"    
       ,"xPoint++#false#This is an expression"    
       ,"doomsdayCounter--#false#This is an expression"    
       ,"Function showOUTPUT#false#Missing returnVariableType and ( )"    
       ,"Function x = getOutput()#false#This is a combination of statements"    
       ,'Function getString("Name?")#false#Missing returnVariableType'
       ,'Function calculateAnswer()#false#Missing returnVariableType'
       ,'Function Integer CalculateAnswer#false#Missing ( )'
       ,'Function Integer determineAnswer(myArray))#false#Extra )'
       ,'Function void calcAnswer#false#Void is invalid and missing ( )'
       ,'Function int callCaptainKirk(SPOCK, dangerValue)#false#int is not pseudocode'
       ,'Function int castSpell(mySpell)#false#int is not pseudocode'
       ,'Function displayAwesomeGraphic()#false#Missing returnVariableType'
       ,'Function Integer OR String determineAnswer()#false#Cannot user OR like this'
       ,'return newValue#false#Not a function header'
       ,'Function Int captureTiger(HOBBS)#false#Int is not pseudocode'
       ,'Module Integer displayOutput()#false#Module should be Function'
        ];

shuffle(FUNCTION_HEADERS_ARRAY);
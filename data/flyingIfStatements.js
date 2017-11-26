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

levelTitle[IF_STATEMENTS] = "If Statements";
var IF_STATEMENTS_ARRAY = 
        ["If x < MAX#true#na" 
       ,"If (x <= MAX - 1)#true#na"    
       ,"If (rows <= maxNbrOfRows - 1)#true#na"    
       ,"If (rows < maxNbrOfRows)#true#na"    
       ,"If (cols < maxNbrOfCols)#true#na"    
       ,"If (cols <= maxNbrOfCols - 1)#true#na"    
       ,"If (playerIsAlive)#true#na"    
       ,"If (salariedEmployee)#true#na"    
       ,"If (dogIsLost)#true#na"    
       ,"If nbrOrcs == 5#true#na"    
       ,"If (counter < 100)#true#na"    
       ,"If studentGrade < 60#true#na"    
       ,'If (studentName == "Mary")#true#na'    
       ,'If (studentName == (sName))#true#na'    
       ,'If (studyHard)#true#na'    
       ,'If (goodGame)#true#na'    
       ,'If nbrOfPeople == nbrOfdogs#true#na'
       ,'If nbrOfPeople > nbrOfCars#true#na'
       ,'If nbrOfPeople < 75#true#na'
       ,'If (nbrOfPeople < 75)#true#na'
       ,'If x > 10 OR x < 0#true#na'
       ,'If x < 0 OR x > 0#true#na'
       
       ,"If (x greater than y)#false#'greater than' should be >"    
       ,"evaluate x: 0 or not#false#This is not code!"    
       ,"If ()#false#Missing condition to test"    
       ,"If (null)#false#What is being compared to null?"    
       ,"If (nbrOrcs = 5)#false#= should be = ="    
       ,"If (playerIsAlive == True)#false#Testing Booleans should not be explicit"
       ,'If (studentName == "Mary"#false#Missing )'    
       ,"If x = 5#false#= should be = ="    
       ,"If employeeNbr is equal to 123#false#'is equal to' should be = ="    
       ,"If Then#false#Missing condition"    
       ,'If (!studyHard))#false#Extra )'    
       ,'If (GoodGame)#false#not camelCase'    
       ,'If 4 = 4#false#Never false'
       ,'If x = 4#false#Never false, = should be = ='
       ,'If nbrEmployees = 99#false#Never false'
       ,'If nbrWizards = 0#false#Never false, = should be = ='
       ,'If nbrOfPeople = nbrOFdogs#false#Not camelCase'
       ,'If nbrOfPeople == nbrOFdogs#false#Not camelCase'
       ,'If nbrOfPeople < nbrOfPeople#false#Not camelCase'
       ,'If x > 10 AND x < 0#false#Never true'
       ,'If x < 0 AND x > 0#false#Never true'
       ,'If (nbrOfPeople ~ 75)#false#Invalid operator'
        ];

shuffle(IF_STATEMENTS_ARRAY);
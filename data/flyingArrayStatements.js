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

levelTitle[ARRAYS] = "Arrays";
var ARRAY_STATEMENTS_ARRAY = 
        ["Declare Integer myArray[SIZE]#true#na" 
       ,"Declare String aNumber[100]#true#na" 
       ,"Declare String employees[MAX_EMPS]#true#na" 
       ,"Declare String employees[1]#true#na" 
       ,"employees[1] = 45#true#na" 
       ,"employees[10] = 22#true#na" 
       ,"employees[A] = 99#true#na" 
       ,"employees[MIN][MAX] = 99#true#na" 
       ,"spongeBob[0] = 0#true#na" 
       ,"rockStars[140] = 7#true#na" 
       ,'starshipNames[10] = "Enterprise"#true#na' 
       ,"Declare String ORCS_NAMES[3]#true#na" 
       ,"Declare String EMP_NAMES[69]#true#na" 
       ,"Declare Boolean janitors[30]#true#na" 
       ,"uName[0] = YEAR#true#na" 
       ,"isAlive[10] = True#true#na" 
       ,"theBeatles[10] = True#true#na" 
       ,"empName[2][4] = iName#true#na" 
       ,"Declare Boolean empName[2][4][1][5]#true#na" 
       ,"empName[0][0] = 0#true#na" 
    
       ,"uName[Aaa] = YEAR#false#Variable not camelCase" 
       ,"empName[ ][ ] = iName#false#Missing Subscripts" 
       ,"isAlive[-1] = True#false#Cannot have a negative subscript" 
       ,"Declare Int myArray[ ]#false#Int is not pseudocode"  
       ,"Declare String [SIZE]#false#Missing variable name" 
       ,"Declare String employees#false#Missing [ ]" 
       ,"Declare Integer orcs{1}#false#{ } should be [ ]" 
       ,"Declare String orcs[ ]#false#Missing size value in [ ]" 
       ,"Declare String DOGS[private]#false#private is a reserved word" 
       ,"Declare Boolean employees{100}#false#{ } should be [ ]" 
       ,"employees[ ] = 45#false#Missing size value in [ ]" 
       ,"employees[1] == 45#false#== should be =" 
       ,"employees[0] = Zero#false#Zero is not camelCase" 
       ,"wizardNames[10] =#false#Missing value after =" 
       ,'theBeatles[1] == "Fab 4"#false#== should be =' 
       ,'SchoolNames[5] = "PimaCC"#false#Variable not camelCase' 
       ,"Declare Integer employeeName[ ][ ] = iName#false#Missing values in [ ]" 
       ,"Declare Boolean employeeName[2][4][1][5] = 4#false#4 is not a Boolean" 
       ,"Declare Integer empName[0][0] == True#false#True is not an Integer" 
       ,"CLICK_ME_AND_WIN_PRIZES!#false#You haven't been around much have you?"    
        ];

shuffle(ARRAY_STATEMENTS_ARRAY);
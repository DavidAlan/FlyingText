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

levelTitle[VARIABLES] = "Variables";
var FLYING_VARIABLES_ARRAY = 
        ["userName#true#na" 
       ,"userAge#true#na"    
       ,"employee#true#na"    
       ,"employeeNbr#true#na"    
       ,"xYzzzzz#true#na"    
       ,"heroName#true#na"    
       ,"userAge#true#na"    
       ,"healthPercent#true#na"    
       ,"gender#true#na"    
       ,"ceoName#true#na"    
       ,"schoolName#true#na"    
       ,"university#true#na"
       ,"salaryType#true#na"
       ,"contactPreference#true#na"
       ,"fiveOrcs#true#na"
       ,"thisIsFunToPlay#true#na"
       ,"wildcats#true#na"
       ,"nbrOfPowerRangers#true#na"
       ,"mortgageRate#true#na"
       ,"orcHealth#true#na"
       ,"theMatrix#true#na"
       ,"numberOfPlayers#true#na"
       ,"playerName#true#na"
       ,"bugsBunny#true#na"
       ,"captainKirk#true#na"
       ,"hogwarts#true#na"
       ,"undeadDragon#true#na"
       ,"nbrOfZombies#true#na"
       ,"greatGame#true#na"
       ,"funToPlay#true#na"
    
       ,"user age#false#This has a space between words"    
       ,"thisisaverygoodvariablename#false#This is not camelCase"    
       ,"EMPLOYEE#false#This is a constant"    
       ,"employee_number#false#This is not camelCase"
       ,"user-age#false#This is not camelCase"    
       ,"HealthPercent#false#This is not camelCase"    
       ,"Variable#false#This is not camelCase"    
       ,"CEOname#false#This is not camelCase"    
       ,"SCHOOL_NAME#false#This is a constant"    
       ,"daffy_duck#false#This is not camelCase"    
       ,"school-name#false#This is not camelCase"    
       ,"SchoolName#false#This is not camelCase"    
       ,"4students#false#Cannot start with a number"
       ,"Wildcats#false#This is not camelCase"
       ,"NbrOfPowerRangers#false#This is not camelCase"
       ,"MortgateRate#false#This is not camelCase"
       ,"HRdepartment#false#This is not camelCase"
       ,"OrcHealth#false#This is not camelCase"
       ,"THISisAVariable#false#This is not camelCase"
       ,"COMPANY_NAME#false#This is a constant"
       ,"player-score#false#This is not camelCase"
       ,"Hogwarts#false#This is not camelCase"
       ,"team-vampire#false#This is not camelCase"
       ,"UNICORNS#false#This is a constant"
       ,"DavidF#false#Not camelCase. This is the author"
       ,"bugsbunnY#false#Not camelCase."
       ,"PlayerNameY#false#Not camelCase."
       ,"captainkirK#false#Not camelCase."
       ,"thematrix#false#Not camelCase."
       ,"!$%^@(*%&$!#false#Invalid characters"
        ];

shuffle(FLYING_VARIABLES_ARRAY);
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

levelTitle[LEVEL_10] = "Booleans";
var LEVEL_10_ARRAY = 
        ["True#true#na" 
       ,"NOT False#true#na"    
       ,"True OR True#true#na"    
       ,"True OR False#true#na"    
       ,"False OR True#true#na"    
       ,"True AND True#true#na"
       ,"False OR NOT False#true#na"    
       ,"NOT True OR True#true#na"    
       ,"NOT (False AND False)#true#na"    
       ,"True OR (False OR False)#true#na"    
       ,"(False OR False) OR True#true#na"    
       ,"False OR False OR False OR True#true#na"    
       ,"NOT (False OR False)#true#na"    
       ,"NOT False OR NOT True#true#na"
       ,"True OR NOT True#true#na"
       ,"True AND (TRUE OR NOT True)#true#na"
    
       ,"False#false#false is not true"    
       ,"False AND False#false#Neither is true"    
       ,"False OR False#false#Neither is true"    
       ,"False OR (NOT TRUE OR NOT True)#false#Nothing is true"
       ,"NOT (False AND False) AND False#false#And False is false"    
       ,"NOT True#false#NOT True is False, right?"    
       ,"NOT False AND False#false#False all around"
       ,"True AND (False OR False)#false#True AND (False) is false"    
       ,"True AND (False AND False)#false#True AND (False) is false"    
       ,"TOTALLY_True#false#Totally is not pseudocode"    
       ,"True AND True AND True AND False#false#AND false makes it false"    
       ,"NOT False AND NOT True#false#AND NOT True makes it false"    
       ,"True AND NOT True#false#AND NOT True makes it false"    
       ,"MAYBE#false#Really?"    
       ,"COULD_BE#false#Did you even read the chapter?"    
       ,"CLICK_ME!#false#Made you click!"    
        ];

shuffle(LEVEL_10_ARRAY);
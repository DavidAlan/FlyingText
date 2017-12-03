{
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
}
function displayIntroScreen() {
    var textLevel1  = document.getElementById("textLevel1");
    textLevel1.innerHTML = "1. " + levelTitle[LEVEL_1];
    var textLevel2  = document.getElementById("textLevel2");
    textLevel2.innerHTML = "2. " + levelTitle[LEVEL_2];
    var textLevel3  = document.getElementById("textLevel3");
    textLevel3.innerHTML = "3. " + levelTitle[LEVEL_3];
    var textLevel4  = document.getElementById("textLevel4");
    textLevel4.innerHTML = "4. " + levelTitle[LEVEL_4];
    var textLevel5  = document.getElementById("textLevel5");
    textLevel5.innerHTML = "5. " + levelTitle[LEVEL_5];
    var textLevel6  = document.getElementById("textLevel6");
    textLevel6.innerHTML = "6. " + levelTitle[LEVEL_6];
    var textLevel7  = document.getElementById("textLevel7");
    textLevel7.innerHTML = "7. " + levelTitle[LEVEL_7];
    var textLevel8  = document.getElementById("textLevel8");
    textLevel8.innerHTML = "8. " + levelTitle[LEVEL_8];
    var textLevel9  = document.getElementById("textLevel9");
    textLevel9.innerHTML = "9. " + levelTitle[LEVEL_9];
    var textLevel10  = document.getElementById("textLevel10");
    textLevel10.innerHTML = "10. " + levelTitle[LEVEL_10];
    var textLevel11  = document.getElementById("textLevel11");
    textLevel11.innerHTML = "11. " + levelTitle[LEVEL_11];
    var textLevel12  = document.getElementById("textLevel12");
    textLevel12.innerHTML = "12. " + levelTitle[LEVEL_12];
    var textLevel13  = document.getElementById("textLevel13");
    textLevel13.innerHTML = "13. " + levelTitle[LEVEL_13];
    var textLevel14  = document.getElementById("textLevel14");
    textLevel14.innerHTML = "14. " + levelTitle[LEVEL_14];
    
    var startTextLevel1  = document.getElementById("beginLevel1");
    startTextLevel1.innerHTML = "1. " + levelTitle[LEVEL_1];
    var startTextLevel2  = document.getElementById("beginLevel2");
    startTextLevel2.innerHTML = "2. " + levelTitle[LEVEL_2];
    var startTextLevel3  = document.getElementById("beginLevel3");
    startTextLevel3.innerHTML = "3. " + levelTitle[LEVEL_3];
    var startTextLevel4  = document.getElementById("beginLevel4");
    startTextLevel4.innerHTML = "4. " + levelTitle[LEVEL_4];
    var startTextLevel5  = document.getElementById("beginLevel5");
    startTextLevel5.innerHTML = "5. " + levelTitle[LEVEL_5];
    var startTextLevel6  = document.getElementById("beginLevel6");
    startTextLevel6.innerHTML = "6. " + levelTitle[LEVEL_6];
    var startTextLevel7  = document.getElementById("beginLevel7");
    startTextLevel7.innerHTML = "7. " + levelTitle[LEVEL_7];
    var startTextLevel8  = document.getElementById("beginLevel8");
    startTextLevel8.innerHTML = "8. " + levelTitle[LEVEL_8];
    var startTextLevel9  = document.getElementById("beginLevel9");
    startTextLevel9.innerHTML = "9. " + levelTitle[LEVEL_9];
    var startTextLevel10  = document.getElementById("beginLevel10");
    startTextLevel10.innerHTML = "10. " + levelTitle[LEVEL_10];
    var startTextLevel11  = document.getElementById("beginLevel11");
    startTextLevel11.innerHTML = "11. " + levelTitle[LEVEL_11];
    var startTextLevel12  = document.getElementById("beginLevel12");
    startTextLevel12.innerHTML = "12. " + levelTitle[LEVEL_12];
    var startTextLevel13  = document.getElementById("beginLevel13");
    startTextLevel13.innerHTML = "13. " + levelTitle[LEVEL_13];
    var startTextLevel14  = document.getElementById("beginLevel14");
    startTextLevel14.innerHTML = "14. " + levelTitle[LEVEL_14];
    
    var endTextLevel1  = document.getElementById("endLevel1");
    endTextLevel1.innerHTML = "1. " + levelTitle[LEVEL_1];
    var endTextLevel2  = document.getElementById("endLevel2");
    endTextLevel2.innerHTML = "2. " + levelTitle[LEVEL_2];
    var endTextLevel3  = document.getElementById("endLevel3");
    endTextLevel3.innerHTML = "3. " + levelTitle[LEVEL_3];
    var endTextLevel4  = document.getElementById("endLevel4");
    endTextLevel4.innerHTML = "4. " + levelTitle[LEVEL_4];
    var endTextLevel5  = document.getElementById("endLevel5");
    endTextLevel5.innerHTML = "5. " + levelTitle[LEVEL_5];
    var endTextLevel6  = document.getElementById("endLevel6");
    endTextLevel6.innerHTML = "6. " + levelTitle[LEVEL_6];
    var endTextLevel7  = document.getElementById("endLevel7");
    endTextLevel7.innerHTML = "7. " + levelTitle[LEVEL_7];
    var endTextLevel8  = document.getElementById("endLevel8");
    endTextLevel8.innerHTML = "8. " + levelTitle[LEVEL_8];
    var endTextLevel9  = document.getElementById("endLevel9");
    endTextLevel9.innerHTML = "9. " + levelTitle[LEVEL_9];
    var endTextLevel10  = document.getElementById("endLevel10");
    endTextLevel10.innerHTML = "10. " + levelTitle[LEVEL_10];
    var endTextLevel11  = document.getElementById("endLevel11");
    endTextLevel11.innerHTML = "11. " + levelTitle[LEVEL_11];
    var endTextLevel12  = document.getElementById("endLevel12");
    endTextLevel12.innerHTML = "12. " + levelTitle[LEVEL_12];
    var endTextLevel13  = document.getElementById("endLevel13");
    endTextLevel13.innerHTML = "13. " + levelTitle[LEVEL_13];
    var endTextLevel14  = document.getElementById("endLevel14");
    endTextLevel14.innerHTML = "14. " + levelTitle[LEVEL_14];
    
    var startLevelText  = document.getElementById("endLevelText");
    startLevelText.innerHTML = "First level: ";
    
    var endLevelText  = document.getElementById("endLevelText");
    endLevelText.innerHTML = "Last level: ";
    
    document.getElementById("endLevel").selectedIndex = "13";
    
    turnOnOverlay(1);     
}

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
    textLevel1.innerHTML = "1. " + gV.levelTitle[gC.LEVEL_1];

    if (gC.MAX_GAME_LEVEL > 1) {
        var textLevel2  = document.getElementById("textLevel2");
        textLevel2.innerHTML = "2. " + gV.levelTitle[gC.LEVEL_2];
    } 
    if (gC.MAX_GAME_LEVEL > 2) {
        var textLevel3  = document.getElementById("textLevel3");
        textLevel3.innerHTML = "3. " + gV.levelTitle[gC.LEVEL_3];
    }
    if (gC.MAX_GAME_LEVEL > 3) {
        var textLevel4  = document.getElementById("textLevel4");
        textLevel4.innerHTML = "4. " + gV.levelTitle[gC.LEVEL_4];
    }
    if (gC.MAX_GAME_LEVEL > 4) {
        var textLevel5  = document.getElementById("textLevel5");
        textLevel5.innerHTML = "5. " + gV.levelTitle[gC.LEVEL_5];
    }
    if (gC.MAX_GAME_LEVEL > 5) {
        var textLevel6  = document.getElementById("textLevel6");
        textLevel6.innerHTML = "6. " + gV.levelTitle[gC.LEVEL_6];
    }
    if (gC.MAX_GAME_LEVEL > 6) {
        var textLevel7  = document.getElementById("textLevel7");
        textLevel7.innerHTML = "7. " + gV.levelTitle[gC.LEVEL_7];
    }
    if (gC.MAX_GAME_LEVEL > 7) {
        var textLevel8  = document.getElementById("textLevel8");
        textLevel8.innerHTML = "8. " + gV.levelTitle[gC.LEVEL_8];
    }
    if (gC.MAX_GAME_LEVEL > 8) {
        var textLevel9  = document.getElementById("textLevel9");
        textLevel9.innerHTML = "9. " + gV.levelTitle[gC.LEVEL_9];
    }
    if (gC.MAX_GAME_LEVEL > 9) {
        var textLevel10  = document.getElementById("textLevel10");
        textLevel10.innerHTML = "10. " + gV.levelTitle[gC.LEVEL_10];
    }
    if (gC.MAX_GAME_LEVEL > 10) {
        var textLevel11  = document.getElementById("textLevel11");
        textLevel11.innerHTML = "11. " + gV.levelTitle[gC.LEVEL_11];
    }
    if (gC.MAX_GAME_LEVEL > 11) {
        var textLevel12  = document.getElementById("textLevel12");
        textLevel12.innerHTML = "12. " + gV.levelTitle[gC.LEVEL_12];
    }
    if (gC.MAX_GAME_LEVEL > 12) {
        var textLevel13  = document.getElementById("textLevel13");
        textLevel13.innerHTML = "13. " + gV.levelTitle[gC.LEVEL_13];
    }
    if (gC.MAX_GAME_LEVEL > 13) {
        var textLevel14  = document.getElementById("textLevel14");
        textLevel14.innerHTML = "14. " + gV.levelTitle[gC.LEVEL_14];
    }
    
    var startTextLevel1  = document.getElementById("beginLevel1");
    startTextLevel1.innerHTML = "1. " + gV.levelTitle[gC.LEVEL_1];
    var endTextLevel1  = document.getElementById("endLevel1");
    endTextLevel1.innerHTML = "1. " + gV.levelTitle[gC.LEVEL_1];

    var startTextLevel2  = document.getElementById("beginLevel2");
    var endTextLevel2    = document.getElementById("endLevel2");
    var startTextLevel3  = document.getElementById("beginLevel3");
    var endTextLevel3    = document.getElementById("endLevel3");
    var startTextLevel4  = document.getElementById("beginLevel4");
    var endTextLevel4    = document.getElementById("endLevel4");
    var startTextLevel5  = document.getElementById("beginLevel5");
    var endTextLevel5    = document.getElementById("endLevel5");
    var startTextLevel6  = document.getElementById("beginLevel6");
    var endTextLevel6    = document.getElementById("endLevel6");
    var startTextLevel7  = document.getElementById("beginLevel7");
    var endTextLevel7    = document.getElementById("endLevel7");
    var startTextLevel8  = document.getElementById("beginLevel8");
    var endTextLevel8    = document.getElementById("endLevel8");
    var startTextLevel9  = document.getElementById("beginLevel9");
    var endTextLevel9    = document.getElementById("endLevel9");
    var startTextLevel10  = document.getElementById("beginLevel10");
    var endTextLevel10    = document.getElementById("endLevel10");
    var startTextLevel11  = document.getElementById("beginLevel11");
    var endTextLevel11    = document.getElementById("endLevel11");
    var startTextLevel12  = document.getElementById("beginLevel12");
    var endTextLevel12    = document.getElementById("endLevel12");
    var startTextLevel13  = document.getElementById("beginLevel13");
    var endTextLevel13    = document.getElementById("endLevel13");
    var startTextLevel14  = document.getElementById("beginLevel14");
    var endTextLevel14    = document.getElementById("endLevel14");
    var startTextLevel14  = document.getElementById("beginLevel14");
    var endTextLevel14    = document.getElementById("endLevel14");

    if (gC.MAX_GAME_LEVEL > 1) {
        startTextLevel2.innerHTML = "2. " + gV.levelTitle[gC.LEVEL_2];
        endTextLevel2.innerHTML = "2. " + gV.levelTitle[gC.LEVEL_2];
    } else {
        startTextLevel2.remove(startTextLevel2);
        endTextLevel2.remove(endTextLevel2);
    }
    if (gC.MAX_GAME_LEVEL > 2) {
        startTextLevel3.innerHTML = "3. " + gV.levelTitle[gC.LEVEL_3];
        endTextLevel3.innerHTML = "3. " + gV.levelTitle[gC.LEVEL_3];
    } else {
        startTextLevel3.remove(startTextLevel3);
        endTextLevel3.remove(endTextLevel3);
    }
    if (gC.MAX_GAME_LEVEL > 3) {
        startTextLevel4.innerHTML = "4. " + gV.levelTitle[gC.LEVEL_4];
        endTextLevel4.innerHTML = "4. " + gV.levelTitle[gC.LEVEL_4];
    } else {
        startTextLevel4.remove(startTextLevel4);
        endTextLevel4.remove(endTextLevel4);
    }
    if (gC.MAX_GAME_LEVEL > 4) {
        startTextLevel5.innerHTML = "5. " + gV.levelTitle[gC.LEVEL_5];
        endTextLevel5.innerHTML = "5. " + gV.levelTitle[gC.LEVEL_5];
    } else {
        startTextLevel5.remove(startTextLevel5);
        endTextLevel5.remove(endTextLevel5);
    }
    if (gC.MAX_GAME_LEVEL > 5) {
        startTextLevel6.innerHTML = "6. " + gV.levelTitle[gC.LEVEL_6];
        endTextLevel6.innerHTML = "6. " + gV.levelTitle[gC.LEVEL_6];
    } else {
        startTextLevel6.remove(startTextLevel6);
        endTextLevel6.remove(endTextLevel6);
    }
    if (gC.MAX_GAME_LEVEL > 6) {
        startTextLevel7.innerHTML = "7. " + gV.levelTitle[gC.LEVEL_7];
        endTextLevel7.innerHTML = "7. " + gV.levelTitle[gC.LEVEL_7];
    } else {
        startTextLevel7.remove(startTextLevel7);
        endTextLevel7.remove(endTextLevel7);
    }
    if (gC.MAX_GAME_LEVEL > 7) {
        startTextLevel8.innerHTML = "8. " + gV.levelTitle[gC.LEVEL_8];
        endTextLevel8.innerHTML = "8. " + gV.levelTitle[gC.LEVEL_8];
    } else {
        startTextLevel8.remove(startTextLevel8);
        endTextLevel8.remove(endTextLevel8);
    }
    if (gC.MAX_GAME_LEVEL > 8) {
        startTextLevel9.innerHTML = "9. " + gV.levelTitle[gC.LEVEL_9];
        endTextLevel9.innerHTML = "9. " + gV.levelTitle[gC.LEVEL_9];
    } else {
        startTextLevel9.remove(startTextLevel9);
        endTextLevel9.remove(endTextLevel9);
    }
    if (gC.MAX_GAME_LEVEL > 9) {
        startTextLevel10.innerHTML = "10. " + gV.levelTitle[gC.LEVEL_10];
        endTextLevel10.innerHTML = "10. " + gV.levelTitle[gC.LEVEL_10];
    } else {
        startTextLevel10.remove(startTextLevel10);
        endTextLevel10.remove(endTextLevel10);
    }
    if (gC.MAX_GAME_LEVEL > 10) {
        startTextLevel11.innerHTML = "11. " + gV.levelTitle[gC.LEVEL_11];
        endTextLevel11.innerHTML = "11. " + gV.levelTitle[gC.LEVEL_11];
    } else {
        startTextLevel11.remove(startTextLevel11);
        endTextLevel11.remove(endTextLevel11);
    }
    if (gC.MAX_GAME_LEVEL > 11) {
        startTextLevel12.innerHTML = "12. " + gV.levelTitle[gC.LEVEL_12];
        endTextLevel12.innerHTML = "12. " + gV.levelTitle[gC.LEVEL_12];
    } else {
        startTextLevel12.remove(startTextLevel12);
        endTextLevel12.remove(endTextLevel12);
    }
    if (gC.MAX_GAME_LEVEL > 12) {
        startTextLevel13.innerHTML = "13. " + gV.levelTitle[gC.LEVEL_13];
        endTextLevel13.innerHTML = "13. " + gV.levelTitle[gC.LEVEL_13];
    } else {
        startTextLevel13.remove(startTextLevel13);
        endTextLevel13.remove(endTextLevel13);
    }
    if (gC.MAX_GAME_LEVEL > 13) {
        startTextLevel14.innerHTML = "14. " + gV.levelTitle[gC.LEVEL_14];
        endTextLevel14.innerHTML = "14. " + gV.levelTitle[gC.LEVEL_14];
    } else {
        startTextLevel14.remove(startTextLevel14);
        endTextLevel14.remove(endTextLevel14);
    }

    var tabTitle  = document.getElementById("tabTitle");
    tabTitle.innerHTML = gC.TITLE;

    var startLevelText  = document.getElementById("beginLevelText");
    startLevelText.innerHTML = "First level: ";
    
    var endLevelText  = document.getElementById("endLevelText");
    endLevelText.innerHTML = "Last level: ";
    
    document.getElementById("endLevel").selectedIndex = gC.MAX_GAME_LEVEL - 1;
    
    turnOnOverlay(1);     
}
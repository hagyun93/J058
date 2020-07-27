var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var keyboard = [["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
            ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
            ["A", "S", "D", "F", "G", "H", "J", "K", "L", ";"],
            ["Z", "X", "C", "V", "B", "N", "M", ",", ".", "?"]];
var keyword = input[0]; // 입력단어
var position = {};  // 키보드 단어 좌표화
var output = "";    // 출력값
var currentWord = "1";  // 현재 글자 위치 (초기값 1)

function solution(keyboard, keyword){

    for(var i=0; i<keyboard.length; i++){
        for(var j=0; j<keyboard[0].length; j++){
            position[keyboard[i][j]] = [i, j];
        }
    }
    for(var i=0; i<keyword.length; i++){
        // 키값이 존재 하지 않으면(키보드에 없는 글자면) false 출력
        if(!position.hasOwnProperty(keyword.charAt(i)+"")) return false;
        keyboardPrint(keyword.charAt(i)+"");
        currentWord = keyword.charAt(i)+"";
    }
    return output;
}

function keyboardPrint(nextWord){
    // 현재 글자 위치(x1,y1)와 입력할 단어의 위치(x2,y2)의 거리 비교
    // 위-아래 비교
    xdistPrint(position[currentWord][0] - position[nextWord][0]);
    // 좌-우 비교 
    ydistPrint(position[currentWord][1] - position[nextWord][1]);
    output+="@";
}

function xdistPrint(dist){
    while(true){
        if(dist==0) break;
        else if (dist>0) {
            dist-=1;
            output+="^";
        } else {
            dist+=1;
            output+="_";
        }
    }
}

function ydistPrint(dist){
    while(true){
        if(dist==0) break;
        else if (dist>0) {
            dist-=1;
            output+="<";
        } else {
            dist+=1;
            output+=">";
        }
    }
}

console.log(solution(keyboard, keyword));
var turn = 1;

var boxA = false;
var boxB = false;
var boxC = false;

var boxD = false;
var boxE = false;
var boxF = false;

var boxG = false;
var boxH = false;
var boxI = false;


function changeA() {
    if (turn === 1 && boxA === false) {
        document.getElementById("boxA").style.border = "red 3px solid";
        document.getElementById("boxA").innerHTML = "X";
        turn += 1;
        boxA = true;
    }
    else if (turn === 2 && boxA === false) {
        document.getElementById("boxA").style.border = "blue 3px solid";
        document.getElementById("boxA").innerHTML = "O";
        turn -= 1;
        boxA = true;
    }
    else {

    }
}
function changeB() {
    if (turn === 1 && boxB === false) {
        document.getElementById("boxB").style.border = "red 3px solid";
        document.getElementById("boxB").innerHTML = "X";
        turn += 1;
        boxB = true;
    }
    else if (turn === 2 && boxB === false) {
        document.getElementById("boxB").style.border = "blue 3px solid";
        document.getElementById("boxB").innerHTML = "O";
        turn -= 1;
        boxB = true;
    }
}
function changeC(){
    if (turn === 1 && boxC === false){
        document.getElementById("boxC").style.border = "red 3px solid";
        document.getElementById("boxC").innerHTML = "X";
        turn += 1;
        boxC = true;
    }
    else if (turn === 2 && boxC == false){
        document.getElementById("boxC").style.border = "blue 3px solid";
        document.getElementById("boxC").innerHTML = "O";
        turn -= 1;
        boxC = true;
    }
}
function changeD() {
    if (turn === 1 && boxD === false) {
        document.getElementById("boxD").style.border = "red 3px solid";
        document.getElementById("boxD").innerHTML = "X";
        turn += 1;
        boxD = true;
    }
    else if (turn === 2 && boxD == false) {
        document.getElementById("boxD").style.border = "blue 3px solid";
        document.getElementById("boxD").innerHTML = "O";
        turn -= 1;
        boxD = true;
    }
}
function changeE() {
    if (turn === 1 && boxE === false) {
        document.getElementById("boxE").style.border = "red 3px solid";
        document.getElementById("boxE").innerHTML = "X";
        turn += 1;
        boxE = true;
    }
    else if (turn === 2 && boxE === false) {
        document.getElementById("boxE").style.border = "blue 3px solid";
        document.getElementById("boxE").innerHTML = "O";
        turn -= 1;
        boxE = true;
    }
}
function changeF(){
    if (turn === 1 && boxF === false) {
        document.getElementById("boxF").style.border = "red 3px solid";
        document.getElementById("boxF").innerHTML = "X";
        turn += 1;
        boxF = true;
    }
    else if (turn === 2 && boxF === false){
        document.getElementById("boxF").style.border = "blue 3px solid";
        document.getElementById("boxF").innerHTML = "O";
        turn -= 1;
        boxF = true;
    }
}
function changeG(){
    if (turn === 1 && boxG === false) {
        document.getElementById("boxG").style.border = "red 3px solid";
        document.getElementById("boxG").innerHTML = "X";
        turn += 1;
        boxG = true;
    }
    else if (turn === 2 && boxG === false){
        document.getElementById("boxG").style.border = "blue 3px solid";
        document.getElementById("boxG").innerHTML = "O";
        turn -= 1;
        boxG = true;
    }
}
function changeH() {
    if (turn === 1 && boxH === false) {
        document.getElementById("boxH").style.border = "red 3px solid";
        document.getElementById("boxH").innerHTML = "X";
        turn += 1;
        boxH = true;
    }
    else if (turn === 2 && boxH === false){
        document.getElementById("boxH").style.border = "blue 3px solid";
        document.getElementById("boxH").innerHTML = "O";
        turn -= 1;
        boxH = true;
    }
}
function changeI() {
    if (turn === 1 && boxI == false){
        document.getElementById("boxI").style.border = "red 3px solid";
        document.getElementById("boxI").innerHTML = "X";
        turn += 1;
        boxI = true;
    }
    else if (turn === 2 && boxI === false){
        document.getElementById("boxI").style.border = "blue 3px solid";
        document.getElementById("boxI").innerHTML = "O";
        turn -= 1;
        boxI = true;
    }
}
exponents = [
    "⁰",
    "¹",
    "²",
    "³",
    "⁴",
    "⁵",
    "⁶",
    "⁷",
    "⁸",
    "⁹"
]

function Solve(){

    let i = document.getElementById("InstructionsContainer")
    i.remove()
    div = document.createElement("div");
    document.body.appendChild(div);
    div.setAttribute("id", "InstructionsContainer");

    let mon1 = document.getElementById("mon1").value;
    let mon2 = document.getElementById("mon2").value;
    let exp = parseInt(document.getElementById("exp").value);

    let multipliers = GetTriangleLevel(exp);
    let expA = exp;
    let expB = 0;
    let array = [];

    if (String(mon1).replace(" ", "") == "" || String(mon2).replace(" ", "") == "" || exp == 0 || exp == NaN){
        console.log("Empty fields");
        return;
    }

    for (let i = 0; i < exp + 1; i++){
        let line = [];
        line.push(multipliers[i]);
        line.push("[");
        if (expA > 0){
            line.push("(" + mon1 + ")");
            if (expA > 1){
                let exponent = "";
                for (let x = 0; x < getDigits(expA).length; x++){
                    exponent += exponents[getDigits(expA)[x]];
                }
                line.push(exponent);
            }
        }
        if (expA > 0 && expB > 0){
            line.push("×")
        }
        if(expB > 0){
            line.push("(" + mon2 + ")");
            if (expB > 1){
                let exponent = "";
                for (let x = 0; x < getDigits(expB).length; x++){
                    exponent += exponents[getDigits(expB)[x]];
                }
                line.push(exponent);
            }
        }
        line.push("]");
        expA-=1;
        expB+=1;
        array.push(line);
    }

    PrintInstructions(array, exp, multipliers)
}

function PrintInstructions(array){

    let text = "";

    for (let x = 0; x < array.length; x++){

        for (let y = 0; y < array[x].length; y++){

            text += array[x][y].toString() + " ";
        }
        if(x != array.length - 1){
            text += "\xa0\xa0\xa0+\xa0\xa0\xa0";
        }
    }
    let textObj = document.createTextNode(text);
    document.getElementById("InstructionsContainer").appendChild(textObj);

    let br = document.createElement("br");
    document.getElementById("InstructionsContainer").appendChild(br);

    textObj = document.createTextNode("|");
    document.getElementById("InstructionsContainer").appendChild(textObj);
    
    br = document.createElement("br");
    document.getElementById("InstructionsContainer").appendChild(br);

    textObj = document.createTextNode("|");
    document.getElementById("InstructionsContainer").appendChild(textObj);
    
    br = document.createElement("br");
    document.getElementById("InstructionsContainer").appendChild(br);

    textObj = document.createTextNode("V");
    document.getElementById("InstructionsContainer").appendChild(textObj);
    
    br = document.createElement("br");
    document.getElementById("InstructionsContainer").appendChild(br);
    
    text = "";

    for (let x = 0; x < array.length; x++){

        for (let y = 0; y < array[x].length; y++){
            if (x == 0 || x == array.length - 1){
                if(y == 0 || y == 1 || y == array[x].length - 1){
                    
                }
                else if (array[x][y] != "[" && array[x][y] != "]" && array[x][y] != "×"){
                    text += array[x][y].toString() + " ";
                }
            } 
            else if (array[x][y] != "[" && array[x][y] != "]" && array[x][y] != "×"){
                text += array[x][y].toString() + " ";
            }
            
        }
        if(x != array.length - 1){
            text += "\xa0\xa0\xa0+\xa0\xa0\xa0";
        }
    }

    textObj = document.createTextNode(text);
    document.getElementById("InstructionsContainer").appendChild(textObj);

}

function GetTriangleLevel(level) {
    let arrays = [1];
    let last_row = [1];
    for (let x = 0; x < level; x++){
        let current_row = [1];
        for (let y = 0; y < (last_row.length); y++){
            if (y != last_row.length - 1){
                if (last_row.length > 1){
                    current_row.push(last_row[y] + last_row[y+1]);
                }
            } 
        }
        current_row.push(1);
        arrays.push(current_row);
        last_row = current_row;
    }
    return last_row;
}


function getDigits(num){
    var digits = []; 
    while (num > 0) { 
        digits[digits.length] = num % 10; 
        num = parseInt(num / 10); 
    } 
    digits.reverse()
    return digits;
}
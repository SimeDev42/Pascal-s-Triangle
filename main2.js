let link = "https://pascal-s-triangle-api.anvil.app/_/api"

///////////////////////////////////////////////////////////////////////////////////////////////////////////

function GetExpression(){
    a = document.getElementById("mon1").value;
    b = document.getElementById("mon2").value;
    n = parseInt(document.getElementById("exp").value);
    console.log(String(a).replace(" ", ""));
    console.log(String(b).replace(" ", ""));
    console.log(n);
    if (String(a).replace(" ", "") != "" && String(b).replace(" ", "") != "" && n > 0 && n != NaN && n < 101){
        httpGetAsync(link + "/get_formula_at_exp?n=" + n, GotFormula);

        let i = document.getElementById("InstructionsContainer");
        i.remove();
        div = document.createElement("div");
        document.body.appendChild(div);
        div.setAttribute("id", "InstructionsContainer");

        let formulaObj = document.createTextNode("Loading...");
        document.getElementById("InstructionsContainer").appendChild(formulaObj);
    }

}

let formula = "";
let solved = "";


function GotFormula(text){
    formula = text;
    httpGetAsync(link + "/solve?a=" + a + "&b=" + b + "&n=" + n, GotSolved);
}
function GotSolved(text){
    solved = text;
    ShowDataOnScreen(formula, solved);
}

function ShowDataOnScreen(f, s){

    if (f == 500 || s == 500){
        let i = document.getElementById("InstructionsContainer");
        i.remove();
        div = document.createElement("div");
        document.body.appendChild(div);
        div.setAttribute("id", "InstructionsContainer");

        let formulaObj = document.createTextNode("Error loading");
        document.getElementById("InstructionsContainer").appendChild(formulaObj);
        return
    }

    let i = document.getElementById("InstructionsContainer");
    i.remove();
    div = document.createElement("div");
    document.body.appendChild(div);
    div.setAttribute("id", "InstructionsContainer");

    let formulaObj = document.createTextNode(f);
    document.getElementById("InstructionsContainer").appendChild(formulaObj);
    ShowDownArrow();
    let solvedObj = document.createTextNode(s);
    document.getElementById("InstructionsContainer").appendChild(solvedObj);
}

function ShowDownArrow(){
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
}

function httpGetAsync(theUrl, callback, errorCallback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}
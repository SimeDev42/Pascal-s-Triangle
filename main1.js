let link = "https://pascal-s-triangle-api.anvil.app/_/api"

///////////////////////////////////////////////////////////////////////////////////////////////////////////

function createTriangle(){

    let i = document.getElementById("TriangleContainer");
    i.remove();
    div = document.createElement("div");
    document.body.appendChild(div);
    div.setAttribute("id", "TriangleContainer");

    n = document.getElementsByTagName("input")[0].value;
    console.log(n.value)
    if (n > 0 && n != NaN && n < 101){
        httpGetAsync(link + "/get_triangle_at_exp?n=" + n, GotTriangle);
    }
    
}

function GotTriangle(data){
    console.log(data);
    let obj = JSON.parse(data);
    addTriangleToScreen(obj.triangle);
}

function addTriangleToScreen(array){
    for(let x = 0; x < array.length; x++){
        let text = "";
        for (let y = 0; y < array[x].length; y++){
            text += array[x][y] + " ";
        }
        let textObj = document.createTextNode(text);
        let br = document.createElement("br");
        document.getElementById("TriangleContainer").appendChild(textObj);
        document.getElementById("TriangleContainer").appendChild(br);
    }
}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}
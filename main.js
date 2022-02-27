function createTriangle(){

    let i = document.getElementById("TriangleContainer");
    i.remove();
    div = document.createElement("div");
    document.body.appendChild(div);
    div.setAttribute("id", "TriangleContainer");

    let rows = parseInt(document.getElementsByTagName("input")[0].value) - 1;
    let arrays = ["1"];
    let last_row = ["1"];
    for (let x = 0; x < rows; x++){
        let current_row = ["1\xa0"];
        for (let y = 0; y < (last_row.length); y++){
            if (y != last_row.length - 1){
                if (last_row.length > 1){
                    current_row.push((parseInt(last_row[y]) + parseInt(last_row[y+1])).toString());
                }
            } 
        }
        current_row.push("\xa01");
        arrays.push(current_row);
        last_row = current_row;
    }
    
    addTriangleToScreen(arrays);
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
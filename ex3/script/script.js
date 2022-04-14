let b;
createBoxes()

//plus button
let button = document.getElementById("btn");

button.addEventListener("click", changeOpacity())

/**
 * created flex container
 */
function createFlexContainer(){

    document.getElementById('main').innerHTML = '<div></div>';
}

/**creates one box */
function createBox(i){

    b= Math.random();
    let box = document.createElement('article');
    box.setAttribute("backgroundColor", '#000000' )
    box.setAttribute("id", 'box-'+i);
    box.setAttribute("style", `opacity: ${b};`);
    box.setAttribute("onclick", "changeColor(this)")
    document.getElementById('main').appendChild(box);
}

/**creates multiple boxes can be changed by changeing the for loop */
function createBoxes(){
    
    for (let i = 1; i < 43; i++) {
        createBox(i)
    }
}

/**
 * changes the color of a clicked box
 * @param {Object} box 
 */
function changeColor(box){

    let boxColor = box.style
    
    if (boxColor.backgroundColor == "rgb(255, 255, 255)") {
        boxColor.backgroundColor = "#000000";
    } else {
        boxColor.backgroundColor = "#FFFFFF";

    }
}

/**
 * increaces the opacity of the first box.
 */
function changeOpacity(){

    let box = document.getElementById("box-1")

    let boxOpacity = box.style.opacity
    let check = 0.05 + parseFloat(boxOpacity)
    if (check<=1){
        box.style.opacity = check;
    }
    else{
        box.style.opacity = check - 1;
    }
}
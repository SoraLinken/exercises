let b;
createBoxes()

let button = document.getElementById("btn");
let box1 = document.getElementById("box-1");

button.addEventListener("click", changeOpacity(box1))

function createFlexContainer(){
    document.getElementById('main').innerHTML = '<div></div>';
}

function createBox(i){
    b= Math.random();
    let box = document.createElement('article');
    box.setAttribute("backgroundColor", '#000000' )
    box.setAttribute("id", 'box-'+i);
    box.setAttribute("style", `opacity: ${b};`);
    box.setAttribute("onclick", "changeColor(this)")
    document.getElementById('main').appendChild(box);}

function createBoxes(){
    for (let i = 1; i < 10; i++) {
        createBox(i)
    }
}

function changeColor(box){
    console.log("bla")
    console.log(box)
    console.log(box.id)
    console.log(box.style)
    document.getElementById(box)

    let boxColor = box.style.backgroundColor;
    console.log(boxColor)
    if (boxColor == '#000000') {
        boxColor = "red";
        console.log("yes");
    } else {
        boxColor = 'black';
        console.log("no");

    }
    console.log(box.style.opacity)
}

function changeOpacity(box){
    console.log("bla")
    console.log(box.style.opacity)
    let boxOpacity = box.style.opacity
    let check = 0.05 + parseFloat(boxOpacity)
    if (check<=1){
        box.style.opacity = check;
    }
    else{
        box.style.opacity = check - 1;
    }
}
// for (var item of document.querySelectorAll("main")) {
//     item.addEventListener("click", function (evt) {
//         evt.target.setAttribute("style", "background-color: green");
//         evt.target.setAttribute("style", `opacity: ${b};`);
//     }, false);
// }



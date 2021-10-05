var square = document.getElementById("square");

square.addEventListener("mouseover", func, false);
square.addEventListener("mouseout", func1, false);

function func(){
    square.setAttribute("style", "background-color:blue;")
}

function func1(){
    square.setAttribute("style", "background-color: black;")
}

square.addEventListener("mousedown", func2, false);

function func2(){
    square.setAttribute("style", "background-color: red;")
}

square.addEventListener("mouseup", func3, false);

function func3(){
    square.setAttribute("style", "background-color: yellow;")
}

square.addEventListener("dblclick", func4, false);

function func4(){
    square.setAttribute("style", "background-color: green;")
}




// var button = document.getElementById("button")
// var input = document.getElementsByClassName("input")
// var ul = document.querySelector("list")
// var li = document.getElementsByName("li")
// const form = document.getElementById("add-todo")

form.addEventListener("submit", function(event){
    event.preventDefault()

    var foodItem = form.title1.value
    var newLi = document.createElement("li")
    newLi.textContent = "li"
    var myList = document.getElementById("my-list")
    myList.append(newLi);
})

// function inputLength() {
//     return input.value.length;
// }

// function createListElement() {
//     var li = document.createElement("li");
//     li.appendChild(document.createTextNode(input.value));
//     ul.appendChild(li);
//     input.value = "";
// }

// function addListAfterClick(){
//     if (inputLength () > 0) {
//         createListElement();
//     }
// }

// button.addEventListener("click", addListAfterClick);







































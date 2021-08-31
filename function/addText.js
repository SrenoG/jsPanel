
function addText(){
    let allElementDiv = document.getElementById('allElementDiv');
    let textDiv = document.createElement("div");

    let title = document.createElement("span");
    let inputText = document.getElementById('textInput');
    title.innerText = inputText.value;
    if(inputText.value == '' || inputText.value == "INSERT SOMETHING")
    {
        inputText.value = "INSERT SOMETHING"
    }
    else
    {           
        title.style.color = color.value;
        color.value = '#000000';
        inputText.value = '';

        let divButton = document.createElement("div");
        
        let bUp = document.createElement("button");
        bUp.innerText = "Up";
        bUp.addEventListener("click", moveUp, false)
        
        let bDown = document.createElement("button");
        bDown.innerText = "Down";
        bDown.addEventListener("click", moveDown, false)
        
        let divDelete = document.createElement("div");
        let buttonDelete = document.createElement("button");
        buttonDelete.innerText = "DELETE"
        buttonDelete.addEventListener("click", deleteElt, false);
        
        divButton.classList.add('divButton')       
        textDiv.classList.add("textDiv", "draggable");
        textDiv.setAttribute("ondrop", "drop(event, this)")
        textDiv.setAttribute("ondragover", "allowDrop(event)")
        textDiv.setAttribute("ondragstart", "drag(event, this)")
        textDiv.setAttribute("draggable", "true")
        title.classList.add("text");

        
        textDiv.appendChild(title);
        textDiv.appendChild(divButton);
        divButton.appendChild(bUp);
        divButton.appendChild(bDown);
        divDelete.appendChild(buttonDelete);
        textDiv.appendChild(divDelete);
        list.push(textDiv); 
        loadListOnScreen();    

    }
}
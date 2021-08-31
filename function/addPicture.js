function addPicture(){
    let allElementDiv = document.getElementById('allElementDiv');
    let textDiv = document.createElement("div");
    let imgDiv = document.createElement("div");
    let pic = document.createElement("img");
    let inputUrl = document.getElementById('inputUrl');
    pic.src = inputUrl.value;
    if(inputUrl.value == '')
    {
        inputText.value = "INSERT SOMETHING"
    }
    else
    {           
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
        
        pic.classList.add('pictures');
        divButton.classList.add('divButton')       
        textDiv.classList.add("textDiv");
        textDiv.setAttribute("ondrop", "drop(event, this)")
        textDiv.setAttribute("ondragover", "allowDrop(event)")
        textDiv.setAttribute("ondragstart", "drag(event, this)")
        textDiv.setAttribute("draggable", "true")
        imgDiv.classList.add("imgDiv");
        
        imgDiv.appendChild(pic);
        textDiv.appendChild(imgDiv);
        textDiv.appendChild(divButton);
        divButton.appendChild(bUp);
        divButton.appendChild(bDown);
        divDelete.appendChild(buttonDelete);
        textDiv.appendChild(divDelete);
        list.push(textDiv); 
        loadListOnScreen();    
    }
}
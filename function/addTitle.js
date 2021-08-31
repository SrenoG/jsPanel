function addTitle(){     
    let title = document.createElement("h1");
    let inputText = document.getElementById('textInput');
    title.innerText = inputText.value;
    if(inputText.value == '' || inputText.value == "INSERT SOMETHING")
    {
        inputText.value = "INSERT SOMETHING"
    }
    else
    {    
        let buttonAddTitle = document.getElementById("titleButton").disabled = true;       
        title.style.color = color.value;
        color.value = '#000000';
        inputText.value = '';

        let divButton = document.createElement("div");                    
        let divDelete = document.createElement("div");
        let buttonDelete = document.createElement("button");
        buttonDelete.innerText = "DELETE"
        buttonDelete.addEventListener("click", deleteTitle, false);
      
        titleDiv.classList.add('textDiv');
        divButton.classList.add('divButton')       
        title.classList.add("text");
        
        divDelete.appendChild(buttonDelete);
        titleDiv.appendChild(title);
        titleDiv.appendChild(divDelete);
        // list.push(titleDiv); 
        loadListOnScreen();    

    }
}
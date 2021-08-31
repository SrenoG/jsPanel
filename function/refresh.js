function loadListOnScreen()
{  
    let div = document.getElementById('allElementDiv');
    div.innerHTML = "";
    // let titleDiv = document.createElement('div');
    // titleDiv.id = "title";
    // div.appendChild(titleDiv);
    list.forEach(element => {
        div.appendChild(element);
    });
    document.body.appendChild(div);
}
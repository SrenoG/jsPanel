function deleteElt(event, el){       
    let index = list.indexOf(this.parentNode.parentNode)
    console.log(index);
    list.splice(index,1)
    console.log(list);
    loadListOnScreen();
}

function onDropDelete(event, el){ 
    event.preventDefault();      
    let index = list.indexOf(el)
    list.splice(index,1)
    loadListOnScreen();
}
function deleteTitle(event){
    document.getElementById("titleButton").disabled = false;     
    // let index = list.indexOf(this.parentNode)
    // list.splice(index,1)
    document.getElementById('title').innerHTML = '';
    loadListOnScreen();
}

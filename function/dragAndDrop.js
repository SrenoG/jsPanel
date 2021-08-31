
function allowDrop(ev) {
    ev.preventDefault();
    }

    function drag(ev, el) {
        let index = list.indexOf(el)
        ev.dataTransfer.setData("index", index);
    }


    function drop(ev, el) {
    ev.preventDefault();
    let index = list.indexOf(el)
    var data = ev.dataTransfer.getData("index");
    arraymove(list, data, index);
    loadListOnScreen();
    }   
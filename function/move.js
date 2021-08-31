function moveUp(event)
    {
        let index = list.indexOf(this.parentNode.parentNode)       
        if(index > 0)
        {
            arraymove(list, index, index - 1);           
        };
        loadListOnScreen(); 
    }

    function moveDown(event)
    {
        let index = list.indexOf(this.parentNode.parentNode)       
        if(index < list.length)
        {
            arraymove(list, index, index + 1);           
        };
        loadListOnScreen(); 
    }

    function arraymove(arr, fromIndex, toIndex) {
                var element = arr[fromIndex];
                arr.splice(fromIndex, 1);
                arr.splice(toIndex, 0, element);
    }
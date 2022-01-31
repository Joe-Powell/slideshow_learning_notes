

let counter = 0;
const slide_container = document.querySelectorAll('.slide-container')


function reset() {
    // for(let i=0; i < slide_container.length; i++) {
    //     slide_container[i].style.display = 'none';
    // }
    for(let i of slide_container) {
        slide_container[i].style.display = 'none';
    }
}


 // not using currently, but can be used when using a click only slideshow
function loadPage() { 
    reset()
    slide_container[0].style.display='block'
}


function rightClick() {
    reset()
    if(counter == slide_container.length - 1) {
        counter = -1;
    }

    slide_container[counter + 1].style.display ='block'
    counter++

    setTimeout(rightClick, 5000)
}

rightClick()


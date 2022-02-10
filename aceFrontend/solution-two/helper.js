// When delete is clicked display: block, display: grid

let check = false

function switchButton(){
    if(!check){
        interactiveClickOn('block', 'grid', true)   
    }else{
        interactiveClickOn('none', 'none', false)
    }
}

function interactiveClickOn(a, b, c){
    document.getElementById('overlay').style.display = a
    document.getElementById('modal-wrap').style.display = b 
    check = c
}


let dropdown = document.getElementById('nav-dropdown')
dropdown.style.display = 'list-item'
dropdown.style['list-style'] = 'none'
dropdown.style['position'] = 'relative'

function makeDropdown(){
    let ul = document.createElement('ul')
    ul.setAttribute("id", "parent-list")
    ul.setAttribute("list-style-type", "none")
    ul.style['display'] = 'none'
    ul.style['list-style'] = 'none'
    ul.style['padding-left'] = '0'
    ul.style['position'] = 'absolute'
    ul.style['border'] = '1px solid gray'
    ul.style['left'] = '0'
    ul.style['right'] = '0'
    ul.style['margin'] = '11.5px 0px'
    ul.style['background'] = 'white'
    ul.style['border-radius'] = '2px'
    ul.style['border-color'] = 'rgba(209, 209, 209, 0.8)'
    dropdown.style.cursor = 'pointer'
    
    let count = 0
    while(count<3){
        var li = document.createElement("li")
        li.appendChild(document.createTextNode("Item"))
        li.id = 'list-item'
        if(count<1){
            li.style['margin-top'] = '5px'
        }else if(count>1){
            li.style['margin-bottom'] = '5px'
        }
        li.style['padding'] = '5px 0 5px 5px'
        ul.appendChild(li)
        count++
    }
    dropdown.appendChild(ul)
    
}

makeDropdown()

let open = false
dropdown.onclick = () => {

    if(!open){
        document.getElementById('parent-list').style.display = 'block'
        open = true
    }else{
        document.getElementById('parent-list').style.display = 'none'
        open = false
    }
    
}

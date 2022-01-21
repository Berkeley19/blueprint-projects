const createClock = () => {
    let div = document.createElement("div")
    div.classList.add("container")
    for(let i=0; i<5; i++){
        let inner = document.createElement('div');
        i !== 2 ? inner.classList.add('outer') : inner.classList.add('middle') 
        div.appendChild(inner)
    }
    return div
}

const addNumbers = (div) => {

}

document.body.appendChild(createClock())
console.log(document.getElementsByClassName("outer"))
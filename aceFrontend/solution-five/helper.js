const tabObject = [
    {
        "label": "Description",
        "content": "The worlds fastest fidget spinner"
    },
    {
        "label": "Specs",
        "content": "Slime green, low friction ball bearings, with dual finger grips"
    },
    {
        "label": "Reviews",
        "content": "I have one. It's pretty good."
    }
];

//we need a grid
//one section, with a grid of grid-column-template 45px, 1fr size of 300px
//then inside first grid we have a flex 

//for js, add eventlistener to each label tab, by 

const labels = document.getElementById('labels');
let currentColor = []

for (let i = 0; i < labels.children.length; i++) {
    console.log('pp')
    labels.children[i].addEventListener("click", switchTabs);
    console.log(labels.children[i]);
}

function switchTabs(e) {
    let contentWords = document.getElementById('content__words')
    for (let i = 0; i < tabObject.length; i++) {
        if (tabObject[i].label === e.target.textContent) {
            contentWords.textContent = tabObject[i].content
            if (currentColor.length === 0) {
                currentColor.push(e.target.id)
                document.getElementById(currentColor[0]).style.backgroundColor = "#0000ff80"
            } else {
                document.getElementById(currentColor[0]).style.backgroundColor = ""
                currentColor.pop()
                e.target.style.backgroundColor = "#0000ff80"
                currentColor.push(e.target.id)
            }
            break
        }
    }
}







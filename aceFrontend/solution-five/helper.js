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
class Tabs {
    constructor(el, tabsContent = [], tabsIndex = 0) {
        el.innerHtml = ''
        this.tabsIndex = tabsIndex
        this.tabsContent = tabsContent
        this.previous = []

        const nav = document.createElement("nav")
        const list = document.createElement("ul")
        list.className = "tabs__list"

        tabsContent.forEach((tab, index) =>
            list.insertAdjacentHTML('beforeend',
                `
            <li data-tab-index="${index}" class="tab__list-item">${tab.label}</li>
            `
            )
        )
        nav.addEventListener('click', this.handleClick)
        nav.appendChild(list)

        this.content = document.createElement('article')
        this.content.className = 'tabs__content'
        this.content.innerHTML = tabsContent[tabsIndex] && tabsContent[tabsIndex].content

        el.appendChild(nav)
        el.appendChild(this.content)
    }

    handleClick = (e) => {
        const i = e.target.dataset.tabIndex
        this.content.innerHTML = this.tabsContent[i] && this.tabsContent[i].content
    }
}

const parent = document.getElementById("tabs")
new Tabs(parent, tabObject)


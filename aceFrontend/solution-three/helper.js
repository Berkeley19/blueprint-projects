const api_url = "https://www.acefrontend.com/c/bitter/data.json"

function renderDate(dateString) {
    const date = new Date(dateString)
    const locale = 'en-us'
    const month = date.toLocaleString(locale, { month: 'short' })
    const day = date.getDate()
    return `${month} ${day}`
}

async function getCritterData() {
    try {
        let res = await fetch('https://www.acefrontend.com/c/critter/feed.json')
        let result = await res.json()
        return result
    } catch (e) {
        return e.message
    }
}

class CritterForm {
    constructor(critter = {}) {
        this.form = this.createCritterForm(critter)
    }
    
    createCritterForm(critter) {
        const { created_at, user, likes, text } = critter
        const date = renderDate(created_at)
        const node = document.createElement('section')
        node.className = 'card'
        node.innerHTML = `
            <div class="card-pic">
                <img id="image" src=${user.avatar} alt="test"></img>
            </div>
            <div class="card-info">
                <div class="top">
                    <h4 class="top-child">@${user.username}</h4>
                    <h4 class="top-child">• ${date}</h4>    
                </div>
                <div class="text">
                    <p>${text}</p>
                    <h6>Likes: ${likes}</h6>        
                </div>
            </div>
        `
        return node
    }
}


getCritterData()
.then(
    data => { 
        for(let i=0; i<data.feed.length; i++){
            const {form} = new CritterForm(data.feed[i])
            document.getElementById('creets').appendChild(form)    
        }
        })
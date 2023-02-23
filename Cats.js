
class Cat {
    constructor(data) {
        Object.assign(this, data)
    }

    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }

    getCatHtml() {
        const { name, avatar, age, bio } = this
        return `
            <div class="feature-suggestion">
                <div class="cat-info">
                    <h4> ${name}, ${age} </h4>
                    <div class="cat-bio">
                        ${bio}
                    </div>
                </div>
                <img class="cat-img" src="${avatar}">
            </div>`
    }

    catEmpty() {
      return `
            <div class="feature-suggestion">
                <img class="cat-img" src="./images/sad-cat.jpg">
                <h1 class ="center-text"> No More Cats 😪 </h1>
            </div>`
    }
    }


export default Cat

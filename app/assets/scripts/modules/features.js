class features {
    constructor () {
        this.id = 1;
     
        this.initial();
        this.events()
    }

    events() {
        document.addEventListener("click", el =>
            this.setBack(el))
    }

    initial() {
        document.getElementById(this.id).classList.add("features__active")
    }

    setBack(el) {
        document.getElementById(this.id).classList.remove("features__active")
 

        if(el.target.classList[0] == "item") {
            document.getElementById(el.target.id).classList.add("features__active")
            this.id = el.target.id;
        }
    }
}

export default features;


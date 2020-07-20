class modal {
    constructor () {
        this.hire         = document.querySelector("#hire");
        this.valueHire    =  document.getElementById("hire");
        this.contentModal = document.querySelector(".modal");
        this.body         = document.querySelector("body");
        this.events();
       
    }

    events() {
        this.hire.addEventListener("click", () => this.openModal());
    }

    openModal() {
        this.contentModal.classList.toggle("modal--on");
        this.body.setAttribute("style", "overflow-y: hidden;")
    }
}

export default modal;
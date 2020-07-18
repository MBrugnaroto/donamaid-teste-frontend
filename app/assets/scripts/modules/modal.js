class modal {
    constructor () {
        this.login = document.querySelector(".btn__login");
        this.contentModal = document.querySelector(".modal");
        this.body = document.querySelector("body");
        this.events();
    }

    events() {
        this.login.addEventListener("click", () => this.openModal());
    }

    openModal() {
        this.contentModal.classList.toggle("modal--on");
        this.body.setAttribute("style", "overflow-y: hidden;")
    }
}

export default modal;
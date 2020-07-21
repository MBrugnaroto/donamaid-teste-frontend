class loader {
    constructor () {
       this.action()
    }

    action() {
        $(".loader-wrapper").fadeOut("slow");
        document.body.setAttribute("style", "overflow-y: scroll;")      
    }
}

export default loader;
class consumeAPI {
    constructor (objData) {
        this.data = objData.collection;
        this.professionalName = document.querySelector("#professionalName");
        this.entryDate        = document.querySelector("#entryDate");
        this.gender           = document.querySelector("#gender");
        this.hair             = document.querySelector("#hair");
        this.eye              = document.querySelector("#eye");
        this.skin             = document.querySelector("#skin");
        this.buttonHire       = document.querySelector("#hire");
        this.listPro          = document.querySelector(".cv-carousel");
        this.count            = 0;
        this.professionalData;

        setTimeout(() => { 
            this.initialData();
            this.recoverPeople(this.data[1]);
            this.buttonList = document.querySelector("li");
        }, 3000);

        this.events() 
    }
    
    initialData() {
        this.data.forEach( el => {
            var child   = document.createElement('div')
            var textname = document.createTextNode(el.name)

            child.classList.add('item')
            child.setAttribute('id', ''+this.count)
            child.classList.add('features__list--pro--hover')
            child.appendChild(textname)
            
            this.listPro.appendChild(child)
            this.count++;
        })
        
    }

    setData(el) {
        if (el.target.tagName == 'DIV' && el.target.classList[0] != "cv-stage" && el.target.classList[0] != "cv-item") {
            this.recoverPeople(this.data[el.target.id])
        }
    }
    
    recoverPeople(data) {
        if (data != null) {
            var year = data.year.slice(0, 4);

            this.professionalName.innerHTML = data.name;
            this.entryDate.innerHTML        = 'Com a Donamaid desde ' + year;
            this.gender.innerHTML           = 'Genero: ' + data.gender;
            this.hair.innerHTML             = 'Cor do cabelo: ' + data.hair_color;
            this.eye.innerHTML              = 'Cor dos olhos: ' + data.eye_color;
            this.skin.innerHTML             = 'Cor da roupa ou pele: ' + data.skin_color;

            this.buttonHire.innerHTML = "Quero contratar " + data.name;
        }

        else {
            this.professionalName.innerHTML = "Ooh não!! Esse ser já foi sucumbido."
            this.entryDate.innerHTML        = 'Com a Donamaid desde ' + "n/a";
            this.gender.innerHTML           = 'Genero: ' + "n/a";
            this.hair.innerHTML             = 'Cor do cabelo: ' + "n/a";
            this.eye.innerHTML              = 'Cor dos olhos: ' + "n/a";
            this.skin.innerHTML             = 'Cor da roupa ou pele: ' + "n/a";

            this.buttonHire.innerHTML = "OPS!!";
        }
    }

    events() {
        this.listPro.addEventListener("click", el => {
           this.setData(el)
        });
        
    }
}

export default consumeAPI;
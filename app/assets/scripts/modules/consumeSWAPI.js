import axios from "axios";

class consumeSWAPI {
    constructor (){
        this.collection = []
        this.https = 'https:'
        this.url = 'https://swapi.dev/api/people/';
        this.nextPage();
    }

    nextPage() {
        if (this.url != null) {
            var c = this.url + ".";
            this.url = this.https + c.slice(7, -1);

            axios.get(this.url).then( response => {
                var data = response.data.results;
                this.url = response.data.next;

                this.insert(data)
                this.nextPage();
            })
        }
    }

    insert(data) {
        data.forEach( (el) => {
            var year = el.created.slice(0, 4);

            var setPeople = {
                name: el.name,
                year: year,
                gender: el.gender,
                hair_color: el.hair_color,
                eye_color: el.eye_color,
                skin_color: el.skin_color
            }

            this.collection.push(setPeople);
        })
    }
}

export default consumeSWAPI;


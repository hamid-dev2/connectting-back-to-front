export default class Api {
    constructor(url) {
        this.url = url
        this.config = (methodType, data) => {
            return {
                methods : methodType.toUpperCase(),
                headers : { "Content-Type" : "application/json" },
                body : JSON.stringify(data)
            }
        }
    }

    get() {
        fetch(this.url)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    post(someData) {
        fetch(this.url, this.config("post", someData))
        .then(res => console.log(res))
        .catch(err => console.log(err))  
    }

    put(someData) {
        fetch(this.url, this.config("put", someData))
        .then(res => console.log(res))
        .catch(err => console.log(err))  
    }

    patch(someData) {
        fetch(this.url, this.config("patch", someData))
        .then(res => console.log(res))
        .catch(err => console.log(err))  
    }

    delete(someData) {
        fetch(this.url, this.config("delete", someData))
        .then(res => console.log(res))
        .catch(err => console.log(err))  
    }
}
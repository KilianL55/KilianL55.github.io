console.log("modal.js loaded")

class Modal {
    constructor(title, content, image) {

        this.modal = document.querySelector(".modalContainer");
        this.title = document.querySelector(".modalHeader > h1");
        this.title.textContent = title;
        this.content = document.querySelector(".modalContent > p");
        this.content.textContent = content;
        this.image = document.querySelector(".modalContent > img");
        this.image.src = image;

    }

    open() {
        console.log('open')
        this.modal.classList.add('show');
        document.getElementById("veilleContainer").classList.add("blur")
        document.querySelector("header").classList.add("blur")
    }

    close() {
        this.modal.classList.remove('show');
        document.getElementById("veilleContainer").classList.remove("blur")
        document.querySelector("header").classList.remove("blur")
    }
}
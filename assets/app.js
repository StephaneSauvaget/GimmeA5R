
import './styles/app.css'

// start the Stimulus application
import './bootstrap';

const hambIcone = document.querySelector(".burger-icone");
const eventForm = document.querySelector(".event-form-container");
const searchEventButton = document.querySelector(".event-form form input[type=submit]");
const lines = document.querySelectorAll('.line');

hambIcone.addEventListener("click", () => {
    eventForm.classList.toggle("change");
    for (let i = 0; i < lines.length; i++) {
        lines[i].classList.toggle('change');
        console.log('change!');
    }
});


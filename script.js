
const container = document.querySelector(".container");
const toggle = document.querySelector(".toggle");
const input = document.querySelector(".input");
const btn = document.querySelector(".submit");
const yourName = document.querySelector(".card-holder");

function submitName() {
    const newName = input.value;
    yourName.innerHTML = newName;
    input.form.submit();
}
// function hideSubmit() {
//     input.remove();
//     btn.remove();
// }

btn.addEventListener("click", submitName);
// btn.addEventListener("click", hideSubmit);

toggle.addEventListener("click", () => {
    container.classList.toggle("dark")
    ? (toggle.firstElementChild.className = "far fa-sun")
    : (toggle.firstElementChild.className = "far fa-moon");
});
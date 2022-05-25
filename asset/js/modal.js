let modal = document.querySelector(".modal");
let buyBtns = document.querySelectorAll(".place-buy-btn");
let modalClose = modal.querySelector(".modal-close");
let modalContainer = modal.querySelector(".modal-container")

for (let buyBtn of buyBtns) {
    buyBtn.addEventListener("click", () => {
        modal.classList.add("open");
    })
}

modalClose.addEventListener("click", () => {
    modal.classList.remove("open");
})
modal.addEventListener("click", () => {
    modal.classList.remove("open");
})
modalContainer.addEventListener("click", (event) => {
    event.stopPropagation();
})
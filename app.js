const bottomimage = document.querySelectorAll(".bottom-image img")
const topimage = document.querySelector(".top-image img")

bottomimage.forEach(item => {
    item.addEventListener("click", () => {
        topimage.src=item.src
    })
})
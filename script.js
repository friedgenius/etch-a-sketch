function createGrid(number = 32){
    const container = document.querySelector(".container");
    while (container.firstChild) {
        container.firstChild.remove()
    }
    for (i = 0; i <number; i ++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (j=0;j < number; j++) {
            const box = document.createElement("div");
            box.classList.add("blank");
            box.style.cssText = `height:${500/number}px; width:${500/number}px`
            row.appendChild(box);
        }
        container.appendChild(row);
    }
}

function changeColor(e){
    const rainbow = document.querySelector("#rainbow");
    if (rainbow.checked) {
        let random = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
        this.style.backgroundColor = random;
    }
    else{
        this.classList.add("hovered");
    }
    
}

function checkNumber(number) {
    const prompt = document.querySelector("p");
    if (number >100){
        prompt.textContent = "please enter A number less thAn 100";
        return null;
    }
    prompt.textContent = null;
    return number;
}
let reset = document.querySelector(".reset");
reset.addEventListener("click", function(e){
    let number = document.querySelector("#side");
    let gridSide = checkNumber(number.value)
    let pixels = document.querySelectorAll(".blank")
    pixels.forEach(pixel => pixel.classList.remove("hovered"));
    pixels.forEach(pixel => {pixel.style.backgroundColor = "black"});
    number.value = null;
    if (!gridSide) return;
    createGrid(gridSide);
    pixels = document.querySelectorAll(".blank")
    pixels.forEach(pixel => pixel.addEventListener("mouseover", changeColor))
})
createGrid();
let pixels = document.querySelectorAll(".blank")
pixels.forEach(pixel => pixel.addEventListener("mouseover", changeColor))


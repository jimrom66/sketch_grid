const container= document.querySelector(".cont_grid");
const containerWidth= container.offsetWidth;
const containerHeight= container.offsetHeight;
let numberOfBoxes = 16
const divSize = Math.min(containerWidth, containerHeight) / Math.sqrt(numberOfBoxes)-4;

for(let i = 0; i<16; i++){
    let newDiv=document.createElement("div");
    newDiv.classList.add("my_div");
    // newDiv.style.width = `${divSize}px`;  // Set width of each box
    // newDiv.style.height = `${divSize}px`; // Set height of each box
    newDiv.textContent= i + 1;
    container.appendChild(newDiv);
}
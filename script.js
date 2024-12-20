const container= document.querySelector(".cont_grid");

let numberOfBoxes = 16
const divSize = 800 / Math.sqrt(numberOfBoxes);
const divBasis=Math.sqrt(numberOfBoxes)/numberOfBoxes;

for(let i = 0; i<numberOfBoxes; i++){
    let newDiv=document.createElement("div");
    newDiv.classList.add("my_div");
    newDiv.style.width = `${divSize}px`;  // Set width of each box
    newDiv.textContent= i + 1;
    container.appendChild(newDiv);
}
    
    
const container= document.querySelector(".cont_grid");
const userInput=document.getElementById("quantity");
const button=document.getElementById("submit_btn");
let numberOfBoxes = 0

button.addEventListener("click",function(){
    reset();
    const input=userInput.value;
    numberOfBoxes=input**2;
    gridsketc(numberOfBoxes);
})



function gridsketc(numberOfBoxes){
    const divSize = 800 / Math.sqrt(numberOfBoxes);
    for(let i = 0; i<numberOfBoxes; i++){
    let newDiv=document.createElement("div");
    newDiv.classList.add("my_div");
    newDiv.style.width = `${divSize}px`;  // Set width of each box
    newDiv.textContent= i + 1;
    container.appendChild(newDiv);
    newDiv.addEventListener("mouseenter",function(){
        newDiv.style.backgroundColor="purple";
    })
}}

function reset(){
container.innerHTML=""
}

    
    
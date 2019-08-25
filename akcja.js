const btn1 = document.querySelector(".btn1"); //pobieram button
let divCounter = 0;
btn1.addEventListener("click", () => {
    const divDiv = document.createElement('div');
    ++divCounter;
    divDiv.textContent = divCounter;
    const divContainer = document.querySelector("div.conteiner");
    if (divCounter % 5 == 0) {
        divDiv.classList.add("radius");
    }

    divContainer.appendChild(divDiv);


})
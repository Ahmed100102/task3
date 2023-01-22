let pList = document.getElementById("person-list");
let pInput = document.getElementById("person-input");
let addButton = document.getElementById("add-button");

pInput.addEventListener("input", function() {
    let pValue = pInput.value;
    addButton.innerHTML = `Add <b>${pValue}</b> to the list`;
});

function addPerson() {
    let pValue = pInput.value;
    if (pValue === "") {
        alert("please type something");
        return;
    }
    let p = document.createElement("li");
    p.innerHTML = pValue;
    pList.appendChild(p);

    pInput.value = "";
    addButton.innerHTML = "Add to the list";
}

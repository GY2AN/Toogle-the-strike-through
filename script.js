let mainContainer = document.getElementById("checkBoxWithLabelContainer");

let inputElement = document.createElement("input");
inputElement.type = "checkbox";
inputElement.id = "checkBoxId";
inputElement.classList.add("input-el");
mainContainer.appendChild(inputElement);

/*let labelElement = document.createElement("label");
labelElement.classList.add("checkbox-label");
labelElement.setAttribute("for", "checkBoxId");
labelElement.id = labelId;
labelElement.textContent = "I am a label";
mainContainer.appendChild(labelElement);*/

let labelElement = document.createElement("label");
labelElement.classList.add("Check_box");
labelElement.setAttribute("for", "checkBoxId");
labelElement.textContent = "I am checkBox Element";
mainContainer.appendChild(labelElement);

function onCheckboxStatusChange(){
    labelElement.classList.toggle("strike-through");
}

inputElement.onclick = function(){
    onCheckboxStatusChange();
}
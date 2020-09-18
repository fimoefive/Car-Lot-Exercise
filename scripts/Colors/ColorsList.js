import { useColors, getAvailableColors } from "./ColorsProvider.js";

const contentTarget = document.querySelector(".colorsDrop");
const eventHub = document.querySelector(".dropdownContainer");

eventHub.addEventListener("colorSelect", event => {
    if (event.target.id === "colorSelect") {
        const customEvent = new CustomEvent  ("colorSelected", {
        detail: {
            chosenColor: event.target.value
            } 
        })
         eventHub.dispatchEvent(customEvent)
         colorsPreview(customEvent)
    }
});


const render = (colorList) => {
    contentTarget.innerHTML = `
       <select class="colorsDrop" id="colorSelect">
       <option value="0">Select a Color</option> 
       ${colorList.map(colorObj => {
            return `<option value="${colorObj.colorName}">${colorObj.colorName}</option>`
       }).join("")
    }
    </select>   
    `
};


export const ColorSelect = () => {
    getAvailableColors()
    .then(() => {
        const colorList = useColors()
        render(colorList)
    })
};

const colorsPreview = (event) => {
    const colorsContentTarget = document.querySelector(".ColorsPreview");

    colorsContentTarget.innerHTML = event.detail.chosenColor
};
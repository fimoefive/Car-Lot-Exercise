import { useColors, getAvailableColors } from "./ColorsProvider.js";

const contentTarget = document.querySelector(".car-filter");
const eventHub = document.querySelector("#main");

eventHub.addEventListener("change", event => {
    if (event.target.id === "colorSelect") {
    const customEvent = new CustomEvent("colorChosen", {
        detail: {
            colorThatWasChosen: event.target.value,
            chosenColorId: parseInt(event.target.id)
        }
    })
    eventHub.dispatchEvent(customEvent);
    }
});

export const ColorList = () => {
    getAvailableColors()
    .then(() => {
        const arrayOfColors = useColors()
        render(arrayOfColors);
    })
};

const render = (colorArray) => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="colorSelect">
        <option value="0">Please select a color ...</option>

        ${colorArray.map(colorObj => {
            return `<option value="${colorObj.id}">${colorObj.color}</option>`;
        })
    }
    </select>
    `
};
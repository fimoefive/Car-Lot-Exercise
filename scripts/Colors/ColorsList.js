import { useColors, getAvailableColors } from "./ColorsProvider.js";

const eventHub = document.querySelector("#main");
const contentTarget = document.querySelector(".colorFilter");

eventHub.addEventListener("change", event => {
if (event.target.id === "colorSelect") {
    const customEvent = new CustomEvent("colorChosen", {
        detail: {
            chosenColor : parseInt(event.target.value),
            chosenColorId: event.target.id
        }
    })
    eventHub.dispatchEvent(customEvent);
    //          colorsPreview(customEvent)
    }
});

export const ColorList = () => {
    getAvailableColors()
    .then(() => {
        const arrayOfColors = useColors()
        render(arrayOfColors)
    })
};

const render = (colorArray) => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="colorSelect">
        <option value="0">Please select a color ...</option>

        ${colorArray.map(colorObj => {
            return `<option value="${colorObj.id}">${colorObj.color}</option>`
          })
        .join("")}
    </select>
    `
};

// const render = (colorList) => {
   
//     let HTMLArray = colorList.map(singleColor => {
//             return colorName(singleColor);
//        })
//        contentTarget.innerHTML= HTMLArray.join("")
// };


// const colorsPreview = (event) => {
//     const colorsContentTarget = document.querySelector(".ColorsPreview");

//     colorsContentTarget.innerHTML = event.detail.chosenColor
// };
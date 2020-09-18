import { useColors, getAvailableColors } from "./ColorsProvider.js";
import { colorName } from "./Colors.js";


const eventHub = document.querySelector(".dropdownContainer");
const contentTarget = document.querySelector(".colorsDrop");

eventHub.addEventListener("change", event => {
if (event.target.id === "colorSelect") {
    const CustomEvent = new CustomEvent("colorChosen", {
        detail: {
            colorChosen: event.target.value
        }
    });
    eventHub.dispatchEvent(CustomEvent);
}
});

export const ColorList = () => {
    getAvailableColors()
    .then(() => {
        const colorList = useColors()
        render(colorList)
    })
};

const render = colorArray => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="colorSelect">
        <option value="0">Please select a color ...</option>
        ${theColorsArray
          .map(colorObj => {
            return `<option value="${colorObj.id}">${colorObj.color}</option>`;
          })
          .join("")}
    </select>
    `
};

// eventHub.addEventListener("colorSelect", event => {
//     if (event.target.id === "colorSelect") {
//         const customEvent = new CustomEvent  ("colorSelected", {
//         detail: {
//             chosenColor: event.target.value
//             } 
//         })
//          eventHub.dispatchEvent(customEvent)
//          colorsPreview(customEvent)
//     }
// });



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
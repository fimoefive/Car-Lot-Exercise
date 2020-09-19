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
    });
    eventHub.dispatchEvent(customEvent);
    }
});

export const ColorList = () => {
    getAvailableColors()
    .then(() => {
        const colorList = useColors()
        render(colorList)
    })
};

const render = (colorArray) => {
    contentTarget.innerHTML = `
    <select class="dropdown" id="colorSelect">
        <option value="0">Please select a color ...</option>

        ${colorArray.map(colorObj => {
            return `<option value="${colorObj.id}">${colorObj.color}</option>`
          })
        }
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
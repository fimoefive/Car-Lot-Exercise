import { useCars, getCars } from "./ColorsProvider.js";

const contentTarget = document.querySelector("#main");
const eventHub = document.querySelector(".dropdownContainer");

eventHub.addEventListener("carStateChanged", event => {
    if (event.target.id === "carSelect") {
        const customEvent = new CustomEvent  ("carSelected", {
        detail: {
            chosenCar: event.target.value
            }
           
        })
         eventHub.dispatchEvent(customEvent)
         carsPreview(customEvent)
};


const render = (carCollection) => {
    contentTarget.innerHTML = `
       <select class="carsDrop" id="colorSelect">
       <option value="0">Select a Color</option> 
       ${carCollection.map(carObj => {
            return `<option value="${carObj.colorName}">${carObj.colorName}</option>`
       }).join("")
    }
    </select>   
    `
};


export const CarSelect = () => {
    getCars()
    .then(() =>{
        const carList = useCars()
        render(carList)
    })
};

export const carsPreview = (event) => {
    const carsContentTarget = document.querySelector(".CarsPreview");

    carsContentTarget.innerHTML = event.detail.chosenCar
}
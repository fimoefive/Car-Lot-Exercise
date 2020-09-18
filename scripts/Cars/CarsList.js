import { useCars, getCars } from "./CarsProvider.js";

const contentTarget = document.querySelector(".carsDrop");
const eventHub = document.querySelector(".dropdownContainer");

eventHub.addEventListener("carSelect", changeEvent => {
    if (changeEvent.target.id === "carSelect") {
        const selectedCar = changeEvent.target.value

        const customEvent = new CustomEvent  ("carSelected", {
        detail: {
                Car: selectedCar
            }
           
        })
         eventHub.dispatchEvent(customEvent)
         carsPreview(customEvent)
    }
});


const render = (carCollection) => {
    contentTarget.innerHTML = `
       <select class="carsDrop" id="carSelect">
       <option value="0">Select a Car</option> 
       ${carCollection.map(carObj => {
            return `<option value="${carObj.colorName}">${carObj.colorName}</option>`
       }).join("")
    }
    </select>   
    `
};


export const CarSelect = () => {
    getCars()
    .then(() => { 
        const carCollection = useCars()
        render(carCollection)
    })
};

const carsPreview = (event) => {
    const carsContentTarget = document.querySelector(".CarsPreview");

    carsContentTarget.innerHTML = changeEvent.detail.Car
};
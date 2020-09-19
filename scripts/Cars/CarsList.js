import { carHTML } from "./Cars.js";
import { useCars, getCars } from "./CarsProvider.js";


const eventHub = document.querySelector("#main");

eventHub.addEventListener("colorChosen", event => {
    
    if (event.detail.colorChosen !== "0") {
        const SelectedCar = useCars().filter(singleCar => {
            return singleCar.colorId === event.detail.colorChosen;
        })
        render(SelectedCar)
        } 
        else render(useCars())
});

export const CarList = () => {
    getCars()
    .then(() => { 
        const carCollection = useCars()
        render(carCollection)
    })
};

const render = (carArray) => {
const contentTarget = document.querySelector(".carContainer");

let HTMLArray = carArray.map(singleCar => {
            return carHTML(singleCar);
       })
       contentTarget.innerHTML = HTMLArray.join("");
};

// const carsPreview = (changeEvent) => {
//     const carsContentTarget = document.querySelector(".CarsPreview");

//     carsContentTarget.innerHTML = changeEvent.detail.Car
// };